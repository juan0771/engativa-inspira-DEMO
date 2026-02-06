// Referencias a los elementos del DOM
const formProducto = document.getElementById('form-producto-admin');
const cuerpoTabla = document.getElementById('cuerpo-tabla-productos');
const listaTopVistas = document.getElementById('lista-top-vistas');

// 1. CARGAR PRODUCTOS EN LA TABLA DEL ADMIN
function cargarProductosAdmin() {
    db.collection("productos").orderBy("fecha", "desc").onSnapshot((snapshot) => {
        cuerpoTabla.innerHTML = ""; // Limpiar tabla
        let total = 0;

        snapshot.forEach((doc) => {
            const p = doc.data();
            total++;
            cuerpoTabla.innerHTML += `
                <tr>
                    <td><img src="${p.imagen_url}" width="50" style="border-radius:5px"></td>
                    <td>${p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>${p.vendedor}</td>
                    <td>
                        <button onclick="eliminarProducto('${doc.id}')" style="color:red; border:none; background:none; cursor:pointer">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById('stat-total-productos').innerText = total;
    });
}

// 2. GUARDAR NUEVO PRODUCTO (Con subida de imagen)
formProducto.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btnSubmit = formProducto.querySelector('button');
    btnSubmit.disabled = true;
    btnSubmit.innerText = "Subiendo...";

    const file = document.getElementById('p-img-file').files[0];
    const nombre = document.getElementById('p-nombre').value;
    const precio = document.getElementById('p-precio').value;
    const desc = document.getElementById('p-desc').value;
    const vendedor = document.getElementById('p-vendedor').value;
    
    // Nuevos campos capturados del formulario mejorado
    const localidad = document.getElementById('p-localidad').value;
    const telefono = document.getElementById('p-telefono').value;
    const direccion = document.getElementById('p-direccion').value;

    try {
        let urlImagen = "https://via.placeholder.com/150"; // Imagen por defecto

        if (file) {
            // Subir a Firebase Storage
            const storageRef = storage.ref(`productos/${Date.now()}_${file.name}`);
            await storageRef.put(file);
            urlImagen = await storageRef.getDownloadURL();
        }

        // Guardar en Firestore
        await db.collection("productos").add({
            nombre,
            precio,
            descripcion: desc,
            vendedor,
            localidad: localidad,
            telefono: telefono,
            dir: direccion,
            imagen_url: urlImagen,
            vistas: 0,
            fecha: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("¡Producto publicado con éxito!");
        formProducto.reset();
        cerrarModalAdmin();
    } catch (error) {
        console.error("Error al subir:", error);
        alert("Hubo un error al subir el producto.");
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerText = "Publicar Producto";
    }
});

// 3. ELIMINAR PRODUCTO
function eliminarProducto(id) {
    if(confirm("¿Estás seguro de eliminar este producto?")) {
        db.collection("productos").doc(id).delete();
    }
}

// 4. CARGAR ESTADÍSTICAS (Top 5 más vistos)
function cargarEstadisticas() {
    db.collection("productos").orderBy("vistas", "desc").limit(5).onSnapshot((snapshot) => {
        listaTopVistas.innerHTML = "";
        snapshot.forEach((doc) => {
            const p = doc.data();
            listaTopVistas.innerHTML += `
                <tr>
                    <td>${p.nombre}</td>
                    <td>${p.vendedor}</td>
                    <td><span class="badge" style="background:var(--azul); color:white; padding:2px 8px; border-radius:10px">${p.vistas}</span></td>
                </tr>
            `;
        });
    });
}

// Inicializar datos al cargar la página
window.onload = () => {
    cargarProductosAdmin();
    cargarEstadisticas();
};