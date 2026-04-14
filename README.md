# TP2 - Turismo Jujuy | HTML & CSS

Sitio web de turismo regional enfocado en Jujuy, Argentina. Desarrollado como trabajo práctico de la materia Programación y Servicios Web.

**Demo en vivo:** [https://tp2-turismo-jujuy.vercel.app](https://tp2-turismo-jujuy.vercel.app)

**Presentacion grupal:** [Ver video en Google Drive](https://drive.google.com/file/d/1bJKhCz67CwsMUnVGUnU6DMZJv0GNXO3R/view?usp=drive_link)

---

## Estructura del proyecto

```
TP2 - HTML y CSS/
├── index.html          # Página principal con hero de video
├── destinos.html       # Galería de destinos con filtros CSS
├── agencias.html       # Tarjetas de agencias con efecto flip
├── blog.html           # Sección tipo diario de viajes
├── precios.html        # Tabla de precios y paquetes
├── contacto.html       # Formulario con modal de confirmación
├── css/
│   └── style.css       # Estilos globales
└── assets/             # Imágenes y video de fondo
```

---

## Diseño visual

El foco del diseño es ser **altamente visual**. La página principal incluye un **video de fondo** con un filtro oscuro superpuesto para garantizar legibilidad del texto.

**Paleta de colores:**
- **Azul** — color principal, transmite seriedad y confianza
- **Naranja** — usado en botones y CTAs, genera contraste y guía la atención del usuario

Los contrastes de color fueron pensados respetando criterios de accesibilidad para facilitar la lectura.

---

## Stack tecnológico

- **HTML5** — uso semántico de etiquetas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **CSS3** — estilos sin dependencias externas ni frameworks

---

## Diseño responsivo

La maquetación responsiva combina dos enfoques de CSS:

- **Flexbox** — navegación, encabezados y alineación de elementos en fila
- **CSS Grid** — galerías de destinos y grilla del blog, que se reorganizan automáticamente según el ancho de pantalla

---

## Interactividad solo con CSS3

Prácticamente toda la interactividad del sitio se implementó **sin JavaScript**, aprovechando selectores y pseudoclases de CSS3:

### Filtros en galería de destinos
Sistema de filtrado implementado con **radio buttons ocultos** y el selector `:checked`. Al seleccionar una categoría, se muestran u ocultan las tarjetas correspondientes sin necesidad de JS.

### Efecto flip en tarjetas de agencias
Las tarjetas de agencias tienen un **efecto de rotación 3D** activado con `:hover`. El frente muestra la imagen y el reverso muestra información de contacto.

### Zoom en fotos
Las imágenes de la galería aplican un **efecto de zoom** (`transform: scale`) al hacer hover, dando profundidad y retroalimentación visual.

### Modal de confirmación en el formulario
El formulario de contacto incluye un **modal de confirmación** que se activa usando el selector `:target` de CSS al navegar a un anchor `#modal`, sin ninguna línea de JavaScript.

### Animaciones con `@keyframes`
- **Contador de visitas** — animación numérica al entrar en pantalla
- **Spinner de carga** — animación circular en el formulario al enviar

---

## Deploy

El sitio está deployado en **Vercel**: [https://tp2-turismo-jujuy.vercel.app](https://tp2-turismo-jujuy.vercel.app)

Para correr el proyecto localmente, simplemente abrí `index.html` en el navegador — no requiere servidor ni dependencias.
