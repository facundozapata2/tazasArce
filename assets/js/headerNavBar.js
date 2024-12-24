// Referencias a elementos clave
const menuToggle = document.getElementById('menuToggle');
const navContainer = document.getElementById('navContainer');
const productosMenu = document.getElementById('productosMenu');
const subList = document.getElementById('subList');

// Estado inicial

let isMenuOpen = false;
let isSubMenuOpen = false;

// Función para abrir/cerrar el menú hamburguesa
menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navContainer.classList.toggle('open', isMenuOpen); // Aplica la clase 'open' para mostrar/ocultar el menú
    // console.log("hiciste click")
    // Cambiar el ícono entre hamburguesa y cerrar
    const icon = menuToggle.querySelector('i');  // Seleccionamos el ícono

    if (isMenuOpen) {
        icon.classList.remove('fa-bars');  // Eliminar el ícono de hamburguesa
        icon.classList.add('fa-times');  // Agregar el ícono de cerrar
    } else {
        icon.classList.remove('fa-times');  // Eliminar el ícono de cerrar
        icon.classList.add('fa-bars');  // Agregar el ícono de hamburguesa
    }
});

// Función para abrir/cerrar el submenú de "Productos"
productosMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el evento haga que otros elementos respondan
    isSubMenuOpen = !isSubMenuOpen;
    subList.classList.toggle('open', isSubMenuOpen); // Aplica la clase 'open' al submenú
});

// // Cerrar menú y submenú al hacer clic fuera del contenedor
// document.addEventListener('click', (event) => {
//     // Cerrar el menú si el clic es fuera del menú
//     if (!navContainer.contains(event.target) && isMenuOpen) {
//         isMenuOpen = false;
//         navContainer.classList.remove('open');
//         const icon = menuToggle.querySelector('i');
//         icon.classList.remove('fa-times');
//         icon.classList.add('fa-bars');
//     }

//     // Cerrar el submenú si el clic es fuera del submenú de productos
//     if (!productosMenu.contains(event.target) && isSubMenuOpen) {
//         isSubMenuOpen = false;
//         subList.classList.remove('open');
//     }
// });
