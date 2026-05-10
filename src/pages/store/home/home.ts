import { PRODUCTS, categorias } from "../../../data/data";
import type { Product } from "../../../types/product";
import type { CartItem } from "../../../types/product";

const contenedorProductos = document.querySelector<HTMLDivElement>(
  "#contenedor-productos",
);
const inputBusqueda =
  document.querySelector<HTMLInputElement>("#input-busqueda");
const contenedorCategorias = document.querySelector<HTMLDivElement>(
  "#contenedor-categorias",
);
const btnIrCarrito =
  document.querySelector<HTMLButtonElement>("#btn-ir-carrito");

  
function renderProductos(lista: Product[]) {
  if (!contenedorProductos) return;
  contenedorProductos.innerHTML = "";

  if (lista.length === 0) {
    contenedorProductos.innerHTML =
      "<p style='color: gray; font-size: 1.2rem;'>No se encontraron productos.</p>";
    return;
  }

  lista.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "product-card"; //

   card.innerHTML = `
      <img src="/${producto.imagen}" alt="${producto.nombre}" class="product-img">
      <h4>${producto.nombre}</h4>
      <p class="product-desc">${producto.descripcion}</p> <div class="card-footer">
        <span class="card-price">$${producto.precio}</span>
        <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
      </div>
    `;
    contenedorProductos.appendChild(card);
  });

  const botonesAgregar = document.querySelectorAll(".btn-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      const idString = (evento.target as HTMLButtonElement).getAttribute(
        "data-id",
      );
      if (idString) {
        agregarAlCarrito(parseInt(idString));
      }
    });
  });
}

function renderCategorias() {
  if (!contenedorCategorias) return;
  contenedorCategorias.innerHTML = "";

  const btnTodas = document.createElement("button");
  btnTodas.textContent ="Todos los productos";
  btnTodas.className = "btn-categoria";

  btnTodas.addEventListener("click", () => {
    renderProductos(PRODUCTS);
    if (inputBusqueda) inputBusqueda.value = "";
  });
  contenedorCategorias.appendChild(btnTodas);

  categorias.forEach((categoria) => {
    const btn = document.createElement("button");
    btn.textContent = categoria.nombre;
    btn.className = "btn-categoria";

    btn.addEventListener("click", () => {
      const productosFiltrados = PRODUCTS.filter((producto) =>
        producto.categorias.some((cat) => cat.id === categoria.id),
      );
      renderProductos(productosFiltrados);
      if (inputBusqueda) inputBusqueda.value = "";
    });

    contenedorCategorias.appendChild(btn);
  });
}

if (inputBusqueda) {
  inputBusqueda.addEventListener("input", (evento: Event) => {
    const textoBuscado = (
      evento.target as HTMLInputElement
    ).value.toLowerCase();
    const productosFiltrados = PRODUCTS.filter((producto) =>
      producto.nombre.toLowerCase().includes(textoBuscado),
    );
    renderProductos(productosFiltrados);
  });
}

function agregarAlCarrito(idProducto: number) {
  const productoBuscado = PRODUCTS.find((p) => p.id === idProducto);
  if (!productoBuscado) return;

  const carritoString = localStorage.getItem("carrito");
  let carrito: CartItem[] = carritoString ? JSON.parse(carritoString) : [];

  const indiceExistente = carrito.findIndex(
    (item) => item.product.id === idProducto,
  );

  if (indiceExistente !== -1) {
    carrito[indiceExistente].cantidad += 1;
  } else {
    carrito.push({ product: productoBuscado, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`¡${productoBuscado.nombre} agregado al carrito!`);
}
btnIrCarrito?.addEventListener("click", () => {
  window.location.href = "../cart/cart.html";
});

renderProductos(PRODUCTS);
renderCategorias();
