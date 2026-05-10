# 🍔 Proyecto: Food Store - E-commerce de Comida

## ✍️ Descripción

Este proyecto es una aplicación de catálogo y carrito de compras para una tienda de alimentos, desarrollada con **Vite** y **TypeScript**. La aplicación permite navegar por diferentes categorías de productos, realizar búsquedas en tiempo real y gestionar un carrito de compras interactivo.

---
### Funcionalidades principales:
- **Catálogo Dinámico**: Listado de productos renderizados a partir de una base de datos local predefinida (`src/data/data.ts`).
- **Filtrado por Categorías**: Navegación intuitiva mediante botones laterales que filtran los productos según su categoria (Pizzas, Hamburguesas, Bebidas, etc.).
- **Buscador en Tiempo Real**: Filtrado dinámico de productos por nombre mediante una barra de búsqueda que ignora mayúsculas y minúsculas.
- **Carrito de Compras**: Gestión de pedidos con cálculo automático de subtotales por producto y suma del total general.
- **Persistencia de Datos**: Los productos agregados al carrito se mantienen guardados utilizando `localStorage`, evitando que se pierdan al recargar la página o navegar entre el catálogo y el carrito.

## ⚠️ ¡Importante! Nivel de Seguridad

La protección de rutas implementada en este proyecto **NO ES SEGURA** y no debe utilizarse en un entorno de producción.

- **Razón**: La lógica de autenticación se basa en datos guardados en `localStorage` en el navegador del usuario.
- **Riesgo**: Cualquier usuario con conocimientos técnicos básicos puede abrir las herramientas de desarrollador del navegador para inspeccionar, modificar o eliminar los datos de `localStorage`, obteniendo así acceso no autorizado a rutas protegidas.

Este enfoque es útil únicamente para fines de aprendizaje y para prototipos de bajo riesgo. La seguridad real debe implementarse en el **backend**.

---

## 🚀 Instalación y Uso

Se recomienda usar `pnpm` como gestor de paquetes para mayor eficiencia en el manejo de dependencias.

### 1. Instalar pnpm

Si no tienes `pnpm` instalado, puedes hacerlo fácilmente a través de `npm` (que viene con Node.js) ejecutando el siguiente comando en tu terminal:

```bash
npm install -g pnpm
```

### 2. Instalar Dependencias del Proyecto

Una vez en la carpeta raíz del proyecto, instala las dependencias necesarias con `pnpm`:

```bash
pnpm install
```

### 3. Ejecutar el Proyecto

Para iniciar el servidor de desarrollo de Vite, ejecuta:

```bash
pnpm dev
```

La aplicación estará disponible en la URL que aparezca en la terminal (generalmente `http://localhost:5173`).


## 📁 Estructura del Proyecto

```
/
├── public/                     # Imágenes estáticas de los productos (ej: pizza.jpg)
├── src/
│   ├── data/
│   │   └── data.ts             # Archivo principal de datos (PRODUCTS y getCategories())
│   ├── pages/
│   │   └── store/              # Vistas de la aplicación
│   │       ├── home/           
│   │       │   ├── home.html   # Catálogo de productos
│   │       │   └── home.ts     # Lógica: render, búsqueda, filtros
│   │       └── cart/           
│   │           ├── cart.html   # Vista del carrito
│   │           └── cart.ts     # Lógica: render, cantidades, total
│   ├── types/
│   │   ├── product.ts          # Interfaces Product y CartItem
│   │   └── categoria.ts        # Interface Icategoria   # Definiciones e interfaces de TypeScript
│   ├── utils/                  # Funciones de utilidad general
│   ├── style.css               # Hoja de estilos global de la tienda
│   └── main.ts                 # Punto de entrada de scripts
├── index.html                  # Punto de entrada principal HTML
├── package.json                # Dependencias y configuración de scripts
└── README.md                   # Este archivo
```
