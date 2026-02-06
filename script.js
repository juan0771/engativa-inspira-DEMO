

const productos = [
    { 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Engativá", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Asistec Soft", 
        v_img: "./img/2.jpg", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    },
    { 
        id: 2, 
        nombre: "DJI MINI 4K Dron", 
        precio: "$ 1.700.000", 
        localidad: "Suba", 
        img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500"],
        vendedor: "TechShop Suba", 
        v_img: "https://i.pravatar.cc/150?u=2", 
        dir: "Av. Suba #145",
        telefono: "573156165943",
        descripcion: "Dron DJI Mini 4K, ideal para principiantes y profesionales. Graba videos en 4K y toma fotos de alta calidad. Incluye control remoto, batería y estuche de viaje."
    },
    { 
        id: 3, 
        nombre: "Zapatillas Nike Air", 
        precio: "$ 215.000", 
        localidad: "Teusaquillo", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500"],
        vendedor: "Juan Sneaker", 
        v_img: "https://i.pravatar.cc/150?u=3", 
        dir: "Carrera 24 #45-10",
        telefono: "573156165943",
        descripcion: "Zapatillas Nike Air Max en color rojo, talla 42. Poco uso, como nuevas. Perfectas para correr o para uso diario. Comodidad y estilo garantizados."
    },
    { 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Suba", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Asistec Soft", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    },{ 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Engativá", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Carlos Ruiz", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    },
    { 
        id: 2, 
        nombre: "DJI MINI 4K Dron", 
        precio: "$ 1.700.000", 
        localidad: "Suba", 
        img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500"],
        vendedor: "TechShop Suba", 
        v_img: "https://i.pravatar.cc/150?u=2", 
        dir: "Av. Suba #145",
        telefono: "573156165943",
        descripcion: "Dron DJI Mini 4K, ideal para principiantes y profesionales. Graba videos en 4K y toma fotos de alta calidad. Incluye control remoto, batería y estuche de viaje."
    },
    { 
        id: 3, 
        nombre: "Zapatillas Nike Air", 
        precio: "$ 215.000", 
        localidad: "Teusaquillo", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500"],
        vendedor: "Juan Sneaker", 
        v_img: "https://i.pravatar.cc/150?u=3", 
        dir: "Carrera 24 #45-10",
        telefono: "573156165943",
        descripcion: "Zapatillas Nike Air Max en color rojo, talla 42. Poco uso, como nuevas. Perfectas para correr o para uso diario. Comodidad y estilo garantizados."
    },
    { 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Engativá", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Carlos Ruiz", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    }
];

const mainGrid = document.getElementById('main-grid');
const skeleton = document.getElementById('skeleton-container');
const errorMsg = document.getElementById('not-found');
const buscador = document.getElementById('buscador');

// --- SIMULACIÓN DE CARGA (SKELETON) ---
document.addEventListener('DOMContentLoaded', () => {
    if (skeleton && mainGrid) {
        setTimeout(() => {
            skeleton.style.display = 'none';
            mainGrid.style.display = 'grid';
            renderCards(productos);
        }, 1500);
    }
});

// --- RENDERIZAR TARJETAS ---
function renderCards(lista) {
    if (!mainGrid) return;
    mainGrid.innerHTML = "";
    if (lista.length === 0) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        lista.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${prod.img}" class="card-img" alt="${prod.nombre}">
                <div class="card-info">
                    <span class="price">${prod.precio}</span>
                    <p>${prod.nombre}</p>
                    <small>${prod.localidad}</small>
                    <small style="display: block; color: #b0b3b8; margin-top: 5px;">${prod.vendedor}</small>
                </div>
            `;
            card.onclick = () => abrirModal(prod);
            mainGrid.appendChild(card);
        });
    }
}

// --- BUSCADOR EN TIEMPO REAL ---
if (buscador) {
    buscador.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(term));
        renderCards(filtrados);
    });
}

// --- BUSCADOR WEB ---
const buscadorWeb = document.getElementById('buscador-web');
if (buscadorWeb) {
    buscadorWeb.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(term));
        renderCards(filtrados);
    });
}

// --- FILTRAR POR LOCALIDAD ---
function filtrarLocalidad(loc, el) {
    document.querySelectorAll('.nav-option').forEach(m => m.classList.remove('active'));
    el.classList.add('active');
    
    const filtrados = loc === 'todas' ? productos : productos.filter(p => p.localidad === loc);
    renderCards(filtrados);
    document.getElementById('section-title').innerText = loc === 'todas' ? "Sugerencias de hoy" : "Productos en " + loc;
}

// --- TOGGLE SUBMENU ---
function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

// --- TOGGLE SECTOR (ACORDEÓN) ---
function toggleSector(id) {
    const content = document.getElementById(id);
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

// --- MODAL Y FUNCIONES ---
const modal = document.getElementById('modal-producto');
let currentImgIndex = 0;
let currentProduct = null;
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function abrirModal(prod) {
    currentProduct = prod;
    currentImgIndex = 0;
    injectModalStyles();

    let thumbnailsHTML = '';
    if (prod.imagenes && prod.imagenes.length > 0) {
        thumbnailsHTML = '<div class="lightbox-thumbnails">';
        prod.imagenes.forEach((img, idx) => {
            thumbnailsHTML += `<img src="${img}" class="lightbox-thumb ${idx === 0 ? 'active' : ''}" onclick="seleccionarImagen(${idx}); event.stopPropagation();">`;
        });
        thumbnailsHTML += '</div>';
    }

    // Determinar si mostrar flechas de navegación (solo si hay más de 1 imagen)
    const showNav = (prod.imagenes && prod.imagenes.length > 1) ? '' : 'style="display:none"';

    modal.innerHTML = `
        <div class="modal-content-custom">
            <span class="close-modal-custom">&times;</span>
            <div class="modal-body-flex">
                <div class="modal-gallery" id="modal-gallery-container">
                    <button class="btn-expand" onclick="expandirImagen()"><i class="fas fa-expand"></i></button>
                    <button class="nav-btn prev" onclick="cambiarImagen(-1)" ${showNav}>&#10094;</button>
                    <img src="${prod.imagenes ? prod.imagenes[0] : prod.img}" id="modal-main-img" class="modal-img-main">
                    <button class="nav-btn next" onclick="cambiarImagen(1)" ${showNav}>&#10095;</button>
                </div>
                <div class="modal-info">
                    <h2>${prod.nombre}</h2>
                    <p class="modal-price-tag">${prod.precio}</p>
                    
                    <div class="modal-description">
                        <h4>Descripción</h4>
                        <p>${prod.descripcion || 'El vendedor no ha añadido una descripción.'}</p>
                    </div>

                    <div class="seller-info-box" onclick="irAlPerfil()">
                        <img src="${prod.v_img}" class="seller-avatar-small" onclick="event.stopPropagation(); verImagen('${prod.v_img}')">
                        <div>
                            <strong>${prod.vendedor}</strong>
                            <p>${prod.dir}</p>
                        </div>
                    </div>

                    <div class="modal-actions">
                        <button onclick="irAlPerfil()" class="btn-seller-details">Detalles del vendedor</button>
                        <button onclick="contactarWhatsapp()" class="btn-whatsapp">CONTACTAR <i class="fab fa-whatsapp"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox (Vista Ampliada) -->
        <div id="lightbox-modal" onclick="if(event.target === this || event.target.classList.contains('lightbox-thumbnails')) cerrarLightbox()">
            <span class="close-lightbox" onclick="cerrarLightbox()">&times;</span>
            <button class="lightbox-nav l-prev" onclick="cambiarImagen(-1)" ${showNav}>&#10094;</button>
            <img id="lightbox-img" src="${prod.imagenes ? prod.imagenes[0] : prod.img}">
            <button class="lightbox-nav l-next" onclick="cambiarImagen(1)" ${showNav}>&#10095;</button>
            ${thumbnailsHTML}
        </div>
    `;
    
    modal.style.display = 'flex';
    modal.querySelector('.close-modal-custom').onclick = () => modal.style.display = 'none';

    // Agregar eventos de deslizamiento (Swipe)
    const lightboxContainer = document.getElementById('lightbox-modal');
    const galleryContainer = document.getElementById('modal-gallery-container');
    
    addSwipeListener(lightboxContainer);
    addSwipeListener(galleryContainer);
}

function cambiarImagen(direction) {
    if (!currentProduct || !currentProduct.imagenes) return;
    currentImgIndex += direction;
    if (currentImgIndex < 0) currentImgIndex = currentProduct.imagenes.length - 1;
    if (currentImgIndex >= currentProduct.imagenes.length) currentImgIndex = 0;
    actualizarGaleriaVisual();
}

function seleccionarImagen(index) {
    currentImgIndex = index;
    actualizarGaleriaVisual();
}

function actualizarGaleriaVisual() {
    document.getElementById('modal-main-img').src = currentProduct.imagenes[currentImgIndex];
    
    // Actualizar también la imagen del lightbox si existe
    const lbImg = document.getElementById('lightbox-img');
    if(lbImg) lbImg.src = currentProduct.imagenes[currentImgIndex];

    // Actualizar miniaturas activas
    document.querySelectorAll('.lightbox-thumb').forEach((thumb, idx) => {
        if (idx === currentImgIndex) thumb.classList.add('active');
        else thumb.classList.remove('active');
    });
}

// --- FUNCIONES DE LIGHTBOX Y SWIPE ---
function expandirImagen() {
    document.getElementById('lightbox-modal').style.display = 'flex';
}

function cerrarLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}

function addSwipeListener(element) {
    if(!element) return;
    
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    element.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
        startY = e.changedTouches[0].screenY;
        isDragging = true;
        element.style.transition = 'none'; // Eliminar transición para movimiento en tiempo real
    }, {passive: true});
    
    element.addEventListener('touchmove', e => {
        if(!isDragging) return;
        const currentX = e.changedTouches[0].screenX;
        const currentY = e.changedTouches[0].screenY;
        const diffY = currentY - startY;
        const diffX = currentX - startX;

        // Si el movimiento es mayormente vertical, aplicamos transformación visual
        if (Math.abs(diffY) > Math.abs(diffX)) {
            if(e.cancelable) e.preventDefault(); // Evitar scroll mientras se arrastra
            element.style.transform = `translateY(${diffY}px)`;
            element.style.opacity = 1 - Math.abs(diffY) / 500;
        }
    }, {passive: false});

    element.addEventListener('touchend', e => {
        isDragging = false;
        const endX = e.changedTouches[0].screenX;
        const endY = e.changedTouches[0].screenY;
        const diffX = endX - startX;
        const diffY = endY - startY;
        
        // Restaurar transición suave para el rebote o cierre
        element.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Deslizamiento Horizontal (Cambio de imagen)
            element.style.transform = '';
            element.style.opacity = '';
            if (element.id !== 'generic-lightbox') {
                if (diffX < -50) cambiarImagen(1); 
                if (diffX > 50) cambiarImagen(-1); 
            }
        } else {
            // Deslizamiento Vertical (Cerrar visor)
            if (Math.abs(diffY) > 100) {
                element.style.opacity = '0'; // Terminar de desvanecer
                setTimeout(() => {
                    if (element.id === 'lightbox-modal') cerrarLightbox();
                    else if (element.id === 'generic-lightbox') element.style.display = 'none';
                    else modal.style.display = 'none';
                    
                    // Resetear estilos para la próxima vez
                    element.style.transform = '';
                    element.style.opacity = '';
                }, 300);
            } else {
                // Rebote (Snap back) si no se arrastró lo suficiente
                element.style.transform = '';
                element.style.opacity = '';
            }
        }
    }, {passive: true});
}

function contactarWhatsapp() {
    const msg = `Hola, estoy interesado en ${currentProduct.nombre} que vi en la plataforma.`;
    const url = `https://wa.me/${currentProduct.telefono || '573000000000'}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// Cerrar modal y menús al hacer clic fuera
window.onclick = (event) => {
    // Modal
    if (event.target === modal) {
        modal.style.display = "none";
    }

    // Submenú Principal (Engativá)
    if (!event.target.closest('.nav-item-wrapper')) {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(sub => {
            if (sub.style.display === 'block') sub.style.display = 'none';
        });
    }

    // Submenús de Sectores (Cierra los que no contienen el clic)
    const openSectors = document.querySelectorAll('.sector-content');
    openSectors.forEach(sec => {
        if (sec.style.display === 'block') {
            const wrapper = sec.closest('.sector-wrapper');
            if (wrapper && !wrapper.contains(event.target)) {
                sec.style.display = 'none';
            }
        }
    });
};

function irAlPerfil() {
    window.location.href = "perfil.html";
}

function injectModalStyles() {
    if (document.getElementById('modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.innerHTML = `
        #modal-producto { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; justify-content: center; align-items: center; }
        .modal-content-custom { background: rgba(255, 255, 255, 0.95); width: 90%; max-width: 800px; border-radius: 12px; padding: 5px 10px 10px 10px; position: relative; max-height: 90vh; overflow-y: auto; box-shadow: 0 5px 15px rgba(0,0,0,0.3); color: #050505; }

        .close-modal-custom { position: absolute; top: 15px; right: 20px; font-size: 28px; cursor: pointer; color: #65676b; z-index: 10; }
        .modal-body-flex { display: flex;  flex-wrap: nowrap; margin-top: 20px; }
        .modal-gallery { flex: 0 0 350px; width: 350px; position: relative; display: flex; align-items: center; justify-content: center; background: #f9f9f9; border-radius: 8px; height: 350px; }
        .modal-img-main { max-width: 100%; max-height: 100%; object-fit: contain; }
        .nav-btn { background: rgba(0,0,0,0.6); color: white; border: none; padding: 12px 15px; cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%); border-radius: 50%; font-size: 18px; transition: 0.3s; }
        .nav-btn:hover { background: rgba(0,0,0,0.8); }
        .prev { left: 10px; } .next { right: 10px; }
        .modal-info { flex: 1; min-width: 300px; display: flex; flex-direction: column; justify-content: center; padding: 15px;}
        .modal-info h2 { margin: 0 0 0 0; font-size: 24px; color: #050505; }
        .modal-price-tag { font-size: 22px; font-weight: bold; color: #2d88ff; margin-bottom: 20px; }
        .modal-description { margin-bottom: 20px; border-top: 1px solid #e4e6eb; }
        .modal-description h4 { margin: 0 0 10px 0; font-size: 16px; color: #050505; }
        .modal-description p { font-size: 14px; color: #65676b; line-height: 1.5; margin: 0; }
        .seller-info-box { display: flex; align-items: center; gap: 15px;  border: 1px solid #e4e6eb; border-radius: 8px; cursor: pointer; transition: 0.2s; padding: 10px;}
        .seller-info-box:hover { background: #f0f2f5; border-color: #ccc; }
        .seller-avatar-small { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        .modal-actions { display: flex; flex-direction: column; gap: 10px; }
        .btn-seller-details { padding: 12px; background: #e4e6eb; color: #050505; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
        .btn-whatsapp { padding: 12px; background: #25D366; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; }
        @media(max-width: 700px) { .modal-body-flex { flex-direction: column; } .modal-gallery { width: 100%; height: 250px; flex: auto; } }
        
        /* Notificación Swipe */
        .swipe-hint { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.8); color: white; padding: 15px 25px; border-radius: 30px; font-size: 16px; z-index: 2000; pointer-events: none; opacity: 0; animation: fadeInOut 2.5s ease 0.5s forwards; display: none; flex-direction: column; align-items: center; gap: 5px; }
        @keyframes fadeInOut { 0% { opacity: 0; transform: translate(-50%, -40%); } 20% { opacity: 1; transform: translate(-50%, -50%); } 80% { opacity: 1; transform: translate(-50%, -50%); } 100% { opacity: 0; transform: translate(-50%, -60%); } }
        @media(max-width: 700px) { .swipe-hint { display: flex; } }

        /* Estilos Lightbox y Botón Expandir */
        .btn-expand { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); color: white; border: none; border-radius: 50%; width: 35px; height: 35px; cursor: pointer; z-index: 5; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .btn-expand:hover { background: rgba(0,0,0,0.8); transform: scale(1.1); }
        #lightbox-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 5000; flex-direction: column; align-items: center; padding-bottom: 20px; box-sizing: border-box; }
        #lightbox-img { width: 100%; flex: 1; min-height: 0; object-fit: contain; user-select: none; margin-bottom: 15px; }
        .lightbox-thumbnails { display: flex; gap: 10px; overflow-x: auto; max-width: 90%; padding: 5px; z-index: 5002; flex-shrink: 0; }
        .lightbox-thumb { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; cursor: pointer; opacity: 0.5; transition: 0.2s; border: 2px solid transparent; }
        .lightbox-thumb:hover { opacity: 0.8; }
        .lightbox-thumb.active { opacity: 1; border-color: #2d88ff; transform: scale(1.05); }
        .lightbox-thumbnails::-webkit-scrollbar { height: 6px; }
        .lightbox-thumbnails::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 3px; }
        .close-lightbox { position: absolute; top: 20px; right: 20px; color: white; font-size: 35px; cursor: pointer; z-index: 5001; }
        .lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 12px 15px; cursor: pointer; font-size: 18px; border-radius: 50%; transition: 0.3s; z-index: 5001; }
        .lightbox-nav:hover { background: rgba(0,0,0,0.8); }
        .l-prev { left: 10px; } .l-next { right: 10px; }

        /* Estilos Modo Oscuro para Modal */
        body.dark-mode .modal-content-custom { background: rgba(36, 37, 38, 0.95); color: #e4e6eb; }
        body.dark-mode .close-modal-custom { color: #000000; }
        body.dark-mode .modal-info h2 { color: #e4e6eb; }
        body.dark-mode .modal-description { border-top-color: #3e4042; }
        body.dark-mode .modal-description h4 { color: #e4e6eb; }
        body.dark-mode .modal-description p { color: #b0b3b8; }
        body.dark-mode .seller-info-box { border-color: #3e4042; }
        body.dark-mode .seller-info-box:hover { background: #3a3b3c; }
        body.dark-mode .btn-seller-details { background: #3a3b3c; color: white; }
        @media(max-width: 700px) { 
            .btn-expand { right: auto; left: 10px; }
            
            /* Botones de navegación modernos para móvil */
            .nav-btn {
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                width: 45px; height: 45px; padding: 0;
                display: flex; align-items: center; justify-content: center;
            }
        }
    `;
    document.head.appendChild(style);
}

// Función genérica para ver imágenes ampliadas (Perfil, Banner, etc.)
function verImagen(imgSrc) {
    let lightbox = document.getElementById('generic-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'generic-lightbox';
        lightbox.style.cssText = "display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 10000; justify-content: center; align-items: center; cursor: zoom-out;";
        lightbox.onclick = (e) => {
            if (e.target === lightbox) lightbox.style.display = 'none';
        };
        lightbox.innerHTML = '<span style="position: absolute; top: 20px; right: 20px; color: white; font-size: 40px; cursor: pointer; z-index: 10001;" onclick="document.getElementById(\'generic-lightbox\').style.display=\'none\'">&times;</span><img id="generic-lightbox-img" style="max-width: 95%; max-height: 95%; object-fit: contain; border-radius: 4px;">';
        document.body.appendChild(lightbox);
    }
    document.getElementById('generic-lightbox-img').src = imgSrc;
    lightbox.style.display = 'flex';
}

// Inicializar eventos para imágenes de perfil y portada (header-container)
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.querySelector('.header-container');
    if (headerContainer) {
        const images = headerContainer.querySelectorAll('img');
        images.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.onclick = (e) => {
                e.stopPropagation();
                verImagen(img.src);
            };
        });
    }
});

// --- TOGGLE COLLAPSE (Categorías Nuevas) ---
document.addEventListener('click', function(e) {
    // Buscar el elemento toggle más cercano (flechas)
    const toggle = e.target.closest('[data-toggle="collapse"]');
    if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetSelector = toggle.getAttribute('data-target');
        const target = document.querySelector(targetSelector);
        
        if (target) {
            target.classList.toggle('show');
            toggle.classList.toggle('active');
        }
    }
});

// --- EFECTO SCROLL HEADER MÓVIL ---
window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar');
    // Solo aplicar en móvil (ancho <= 768px)
    if (window.innerWidth <= 768 && sidebar) {
        if (window.scrollY > 50) {
            sidebar.classList.add('scrolled');
        } else {
            sidebar.classList.remove('scrolled');
        }
    }
});