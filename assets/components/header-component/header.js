class MainHeader extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      // html
      const response = await fetch('./assets/components/header-component/header.html');
      if (!response.ok) {
        throw new Error(`Error al cargar el HTML: ${response.statusText}`);
      }
      this.innerHTML = await response.text();

      // css
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './assets/components/header-component/header.css';
      document.head.appendChild(link);
      // js
      const script = document.createElement("script");
      script.src = './assets/js/headerNavBar.js';
      script.defer = true;
      document.body.appendChild(script);

    } catch (error) {
      console.error('Error al cargar el componente Header:', error);
    }
  }
}

window.customElements.define('main-header', MainHeader);

