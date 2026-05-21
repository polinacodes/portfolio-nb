
# Portfolio Personal - Polinacodes

Sitio web institucional y portfolio profesional desarrollado con Astro, React y Tailwind CSS. El proyecto está diseñado bajo una estética neobrutalista, priorizando la optimización de rendimiento, la modularidad de los componentes y el soporte nativo multiidioma.

[![Sitio Web](https://img.shields.io/badge/SITIO_WEB-polinacodes.dev-black?style=for-the-badge)](https://polinacodes.dev)

## Características Técnicas

- Arquitectura Híbrida: Uso de Astro para un renderizado estático eficiente (SSG) combinado con componentes aislados de React mediante hidratación selectiva (client:load, client:visible) para mantener el mínimo JavaScript posible en el cliente.
- Internacionalización (i18n): Sistema de traducción integrado basado en rutas para cambiar dinámicamente entre español e inglés sin pérdida de rendimiento.
- Interfaz Neobrutalista: Estructura visual basada en layouts rígidos, bordes limpios de alto grosor y sombras planas tipificadas (shadow-brutal).
- Optimización de Web Vitals: Carga diferida de imágenes, uso de tipografías locales y optimización de componentes interactivos para asegurar tiempos de carga mínimos.

## Stack Tecnológico

- Framework Base: Astro
- Librería de Interfaz: React (utilizada en componentes interactivos específicos)
- Procesamiento de Estilos: Tailwind CSS
- Fuentes del Sistema: Montserrat, JetBrains Mono

## Estructura del Proyecto

El código fuente se organiza de manera modular dentro del directorio `/src`:

- `/src/components`: Componentes modulares reutilizables tanto en formato Astro como JSX para la UI.
- `/src/icons`: Catálogo de íconos vectoriales SVG limpios encapsulados en componentes de Astro y React.
- `/src/i18n`: Configuración, diccionarios de traducción y funciones utilitarias para la localización de la web.
- `/src/pages`: Estructura de enrutamiento estático basado en archivos nativos de Astro.

## Configuración y Desarrollo Local

Para clonar y ejecutar este proyecto localmente, asegúrese de tener instalado Node.js (versión 18 o superior).

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/polinacodes/portfolio.git 
   ```

2. Instalar las dependencias del proyecto:   
   ```bash
   npm install 
   ```


3. Levantar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

El sitio se compilará localmente y estará accesible en el puerto predeterminado:
 `http://localhost:4321`.

## Scripts Disponibles

- `npm run dev`: Inicia el entorno de desarrollo con recarga en tiempo real.
- `npm run build`: Compila el sitio optimizando assets para el despliegue en producción.
- `npm run preview`: Permite previsualizar localmente la build final de producción.