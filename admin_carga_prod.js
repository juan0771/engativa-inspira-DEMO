async function subirProducto(e) {
    e.preventDefault();
    const file = document.getElementById('admin-p-img').files[0];
    
    // 1. Subir imagen a Firebase Storage
    const storageRef = firebase.storage().ref('productos/' + file.name);
    await storageRef.put(file);
    const urlImagen = await storageRef.getDownloadURL();

    // 2. Guardar datos en Firestore
    await db.collection("productos").add({
        nombre: document.getElementById('admin-p-nombre').value,
        precio: Number(document.getElementById('admin-p-precio').value),
        imagen_url: urlImagen,
        vistas: 0,
        fecha: new Date()
    });
    alert("Producto cargado correctamente");
}

// Actualizar número desde el Admin
function actualizarWhatsapp(nuevoNumero) {
    db.collection("configuracion").doc("contacto").set({
        numero: nuevoNumero
    });
}

//Productos más consumidos
function cargarEstadisticas() {
    db.collection("productos").orderBy("vistas", "desc").limit(5)
      .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(`${doc.data().nombre}: ${doc.data().vistas} clics`);
              // Aquí lo pintas en una tabla de tu admin.html
          });
      });
}