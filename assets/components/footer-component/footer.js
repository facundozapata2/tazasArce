// html custom element

class Mainfooter extends HTMLElement {
    constructor() {
    super();
}

    async connectedCallback() {
    try {
      // html
    const response = await fetch('/assets/components/footer-component/footer.html');
    if (!response.ok) {
        throw new Error(`Error al cargar el HTML: ${response.statusText}`);
    }
        this.innerHTML = await response.text();

      // css
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/components/footer-component/footer.css';
    document.head.appendChild(link);

        } catch (error) {
            console.error('Error al cargar el componente Footer:', error);
        }
    }
}
customElements.define('main-footer', Mainfooter);