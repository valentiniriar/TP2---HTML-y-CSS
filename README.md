# Trabajo Práctico Integrador - Turismo Jujuy

Sitio web de turismo regional enfocado en la hermosa provincia de Jujuy, Argentina. Este proyecto fue desarrollado en grupo por nosotros como trabajo práctico para la materia **Programación y Servicios Web**. A lo largo del cuatrimestre fuimos iterando el proyecto, y lo que comenzó siendo puramente HTML y CSS, evolucionó para incorporar interactividad con JavaScript y el framework Bootstrap.

**Demo en vivo:** [https://tp2-turismo-jujuy.vercel.app](https://tp2-turismo-jujuy.vercel.app)

**Presentación grupal:** [Ver video y archivos en Google Drive](https://drive.google.com/drive/folders/15f6GIvKKqbzWKV7CsEOuexEAtk0NZviD?usp=sharing)

---

## Estructura del proyecto

```text
/
├── index.html          # Página principal con hero de video y bienvenida
├── destinos.html       # Galería de destinos interactiva
├── agencias.html       # Tarjetas de agencias de turismo
├── blog.html           # Sección tipo diario de viajes
├── precios.html        # Tabla de precios y paquetes turísticos
├── contacto.html       # Formulario de contacto y validaciones
├── phishing.html       # Página informativa sobre seguridad
├── css/
│   └── style.css       # Estilos globales personalizados
├── js/
│   └── main.js         # Scripts para la interactividad del sitio
└── assets/             # Imágenes, iconos y video de fondo
```

---

## Diseño visual

Nuestro objetivo como grupo fue lograr un diseño **altamente visual y atractivo**. La página principal te recibe con un **video de fondo** inmersivo, utilizando filtros para mantener la legibilidad de los textos principales.

**Nuestra paleta de colores:**
- **Azul** — color principal que elegimos para transmitir seriedad y confianza al turista.
- **Naranja** — utilizado estratégicamente en botones y CTAs (Call to Action), generando contraste para guiar la atención del usuario.

Nos aseguramos de que los contrastes de color respeten los criterios de accesibilidad para facilitar la lectura a todos los usuarios.

---

## Stack tecnológico

En esta versión del proyecto, nuestro grupo implementó las siguientes tecnologías:

- **HTML5** — Utilizamos etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para mejorar la estructura y la accesibilidad.
- **CSS3** — Mantenemos estilos personalizados y efectos visuales desarrollados por nosotros.
- **Bootstrap 5** — Lo incorporamos para agilizar la maquetación responsiva, utilizar su sistema de grillas y algunos de sus componentes interactivos.
- **JavaScript (Vanilla JS)** — Agregamos JS para dotar a la página de mayor dinamismo, realizar validaciones de formularios y manejar eventos del DOM que sobrepasan las limitaciones de CSS puro.

---

## Interactividad y Responsividad

### Diseño Responsivo
El sitio está completamente adaptado a diferentes tamaños de pantalla (Mobile First). Para esto combinamos el poder de **CSS Grid** y **Flexbox**, junto con las utilidades de **Bootstrap**, logrando que elementos como las galerías de destinos y los artículos del blog se reorganicen fluidamente.

### Funcionalidades destacadas
- **Galería dinámica:** Filtros de búsqueda y navegación mejorada.
- **Efectos visuales:** Implementamos tarjetas con efecto flip 3D en las agencias y transiciones suaves (`transform: scale`) en las fotos al hacer hover.
- **Validación de Formularios:** Uso de JavaScript para validar que los datos de contacto ingresados por el usuario sean correctos antes de enviarlos.
- **Animaciones:** Elementos dinámicos y modales interactivos para enriquecer la experiencia del usuario.

---

## Deploy

Decidimos utilizar **Vercel** para subir nuestro proyecto y que esté accesible para todos:
[https://tp2-turismo-jujuy.vercel.app](https://tp2-turismo-jujuy.vercel.app)

Para probar el proyecto de forma local, simplemente se debe clonar el repositorio y abrir el archivo `index.html` en cualquier navegador web. ¡No requiere de instalaciones extra ni de un servidor local!
