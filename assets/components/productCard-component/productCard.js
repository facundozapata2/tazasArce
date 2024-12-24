class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      // Cargar HTML
      const response = await fetch('./assets/components/productCard-component/productCard.html');
      if (!response.ok) {
        throw new Error(`Error al cargar el HTML: ${response.statusText}`);
      }
      this.innerHTML = await response.text();

      // CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './assets/components/productCard-component/productCard.css';
      document.head.appendChild(link);

      // Asignar datos dinámicos
      this.setDataAttributes();

    } catch (error) {
      console.error('Error al cargar el componente ProductCard:', error);
    }
  }
  // Lógica para asignar datos dinámicos
  setDataAttributes() {
    // Leer atributos del componente
    const link = this.getAttribute('data-link') || '#';
    const image = this.getAttribute('data-image') || '';
    const title = this.getAttribute('data-title') || 'Sin título';

    // Actualizar contenido dinámicamente usando clases específicas
    const anchor = this.querySelector('.product_card-container');
    const img = this.querySelector('.product_card-image');
    const h2 = this.querySelector('.product_card-title');

    if (anchor) anchor.href = link;
    if (img) img.src = image;
    if (img) img.alt = title; // Usar el título como texto alternativo
    if (h2) h2.textContent = title;
  }
}

// Define el componente ProductCard
window.customElements.define('product-card', ProductCard);

