// // html custom element

// class ProductContainer extends HTMLElement {
//   constructor() {
//       super();
//   }

//   async connectedCallback() {
//       try {
//           // Fetch HTML content
//           const response = await fetch('/assets/components/productPage-component/product.html');
//           if (!response.ok) {
//               throw new Error(`Error loading HTML: ${response.statusText}`);
//           }
//           this.innerHTML = await response.text();

//           // Load CSS
//           const link = document.createElement('link');
//           link.rel = 'stylesheet';
//           link.href = '/assets/components/productPage-component/product.css';
//           document.head.appendChild(link);

//           // Set product attributes
//           this.setProductAttributes();

//       } catch (error) {
//           console.error('Error loading Product component:', error);
//       }
//   }

//   setProductAttributes() {
//       // Get the product attribute
//       const product = this.getAttribute('data-product') || 'defaultProduct';

//       // Update product name
//       const productNameElement = this.querySelector('.product-name');
//       if (productNameElement) {
//           productNameElement.textContent = product;
//       }

//       // Update background image
//       const bgImgElement = this.querySelector('.product-bg-img');
//       if (bgImgElement) {
//           bgImgElement.src = `/assets/img/webp/${product}-header.webp`;
//           bgImgElement.alt = `${product} header image`;
//       }

//       // Update product images
//       const productGrill = this.querySelector('.product-grill');
//       productGrill.innerHTML = ''; // Clear existing images

//       // Assuming you have a predefined number of images for each product
//       const numberOfImages = 9; // Change this as needed    
//       for (let i = 1; i <= numberOfImages; i++) {
//           const imgContainer = document.createElement('div');
//           imgContainer.className = 'product-img-container product-cell';

//           const img = document.createElement('img');
//           img.className = 'product-img';
//           img.src = `/assets/img/jpg/${product}/${product}-${i}.png`;
//           img.alt = `${product} image ${i}`;

//           const h2 = document.createElement('h2');
//           h2.className = 'product-title';
//           h2.textContent = `${product} ${i}`;

//           imgContainer.appendChild(img);
//           imgContainer.appendChild(h2);
//           productGrill.appendChild(imgContainer);
//       }
//   }
// }

// customElements.define('product-container', ProductContainer);


