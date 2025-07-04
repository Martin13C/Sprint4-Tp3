# Tienda Online

## 📄 Descripción

Tienda Online es una aplicación web desarrollada con React y Vite que ofrece un catálogo de productos con carrito de compras. La app cuenta con un diseño responsivo y soporte para modo oscuro, brindando una experiencia de usuario moderna y amigable.

## 🛠 Tecnologías utilizadas

- **React**: Para la construcción de la interfaz y componentes reutilizables.  
- **Vite**: Herramienta de build y desarrollo rápido.  
- **Tailwind CSS**: Framework CSS para estilos utilitarios y soporte avanzado de modo oscuro[1].  
- **Context API + Hooks personalizados**: Para la gestión global del estado del carrito y el modo oscuro[2][3].  
- **Netlify**: Plataforma para despliegue y hosting.

## 🚀 Funcionamiento principal

- Catálogo dinámico de productos con imagen, título, precio y descripción.
- Carrito de compras con funcionalidades avanzadas:
  - Agregar productos al carrito.
  - Sumar cantidades para productos iguales.
  - Botones para aumentar o disminuir la cantidad de cada producto.
  - Cálculo dinámico del total de productos y precio total.
- Modo oscuro gestionado mediante un Context específico y hooks personalizados, que permite cambiar estilos y recursos (como imágenes de logo y carrito) según el tema activo.
- Organización modular del código:
  - Contexts separados para carrito y modo oscuro.
  - Hooks personalizados para encapsular lógica y pasar funciones/variables a los componentes que lo requieren.
- Manejo centralizado de imágenes (logo, carrito) desde el hook de contexto para facilitar el cambio dinámico según el modo oscuro.

## 🌐 Demo en línea

Puedes ver y probar la aplicación desplegada en Netlify en:  
[https://tienda-online13.netlify.app/](https://tienda-online13.netlify.app/)

## 📁 Estructura del proyecto

- `/src/components`: Componentes React como `ProductList`, `Cart`, etc.
- `/src/context`: Contextos para carrito y modo oscuro.
- `/src/hooks`: Hooks personalizados que exponen funciones y estados de los contextos.
- `/src/api`: Datos simulados de productos.
- `/src/assets`: Recursos estáticos usados en desarrollo.
- `/public`: Archivos estáticos públicos accesibles en producción (imágenes, favicon, etc.).



¡Gracias por visitar el proyecto! Para cualquier duda o sugerencia, no dudes en contactarme.

