# Portfolio de Wilmer Zeas Rodriguez

React 19, TypeScript, Vite y Sass. Primera iteración del rediseño: portada en mosaico y ficha de Heaven.

## Desarrollo

```sh
npm ci
npm run dev
```

Abrir la URL que muestra Vite con la base `/MyPortfolio/`.

## Comprobaciones

```sh
npm run lint
npm run build
npm run preview
```

Revisar portada, tarjeta, ficha, volver, atrás/adelante, recarga directa de `/MyPortfolio/#/proyectos/heaven`, ruta desconocida, teclado y móvil.

## Datos y componentes

[projects.ts](src/data/projects.ts) define el contrato `Project` y el contenido. [Body](src/components/body/body.tsx) recorre `projects` y pasa cada objeto a [ProjectCard](src/components/projects/ProjectCard.tsx). La tarjeta construye el enlace con `project.slug`. [App](src/App.tsx) escucha `hashchange`, busca el objeto por el slug y lo pasa a [ProjectDetail](src/components/projects/ProjectDetail.tsx). No hay petición API ni backend: los datos se incluyen en la compilación. TypeScript comprueba su forma durante el desarrollo; no valida respuestas externas en ejecución.

La captura original de Heaven procede de [su repositorio](https://github.com/wilmergit/Heaven/blob/main/Exposicion/public/images/SCR_HEAVEN.png); Vite la procesa como recurso importado. Los enlaces y el contenido del proyecto se mantienen en el mismo objeto.

## GitHub Pages

- Base Vite: `/MyPortfolio/`.
- URL de portada: https://wilmergit.github.io/MyPortfolio/
- URL de ficha: https://wilmergit.github.io/MyPortfolio/#/proyectos/heaven
- `npm run deploy` ejecuta primero la compilación y publica `dist` en `gh-pages`.
- En GitHub, Pages debe estar configurado para publicar desde la raíz de la rama `gh-pages`. Configuración confirmada mediante la API de GitHub: rama gh-pages, directorio raíz.
- La ruta tras `#` la interpreta React. GitHub Pages recibe siempre `/MyPortfolio/`, por lo que la recarga de la ficha no requiere redirecciones ni un servidor propio.
- El despliegue es manual. Versión de prueba publicada el 24 de noviembre de 2026 desde prueba-hallmark. Comparación pública: https://wilmergit.github.io/MyPortfolio/#/disenos

Las decisiones y asuntos pendientes se registran en [decisiones-portfolio.md](decisiones-portfolio.md).

## Capturas y auditoría visual

`puppeteer-core` está instalado como dependencia de desarrollo. Usa el navegador Chromium disponible; no descarga uno adicional. El lanzador detecta Chrome o Edge en Windows y acepta `CHROME_PATH` para otra ubicación.

Con la previsualización en marcha (`npm run preview`), ejecuta:

```sh
npm run capture:visual
npm run audit:visual
```

Se requiere la skill Hallmark instalada en `~/.agents/skills/hallmark`, `~/.codex/skills/hallmark` o la ubicación indicada en `HALLMARK_HOME`. `PORTFOLIO_AUDIT_URL` permite cambiar la URL por defecto. Las capturas se guardan en `.hallmark/previews` y `.hallmark/shots`, excluidas de Git.

La auditoría comunica hallazgos de las reglas de diseño de Hallmark y puede devolver un código distinto de cero aunque la web compile y navegue correctamente. Un informe con hallazgos no debe interpretarse como una auditoría aprobada.

## Comparar diseños

Abrir `/MyPortfolio/#/disenos` para comparar la portada actual con las propuestas Editorial, Técnica y Producto. El selector cambia las capturas entre escritorio y móvil; los enlaces abren cada versión interactiva.

Las propuestas usan los mismos componentes y datos del portfolio y conservan la ficha de Heaven. Sus fuentes adicionales y licencias están en [public/fonts/designs](public/fonts/designs).

Para regenerar las ocho capturas incluidas en la galería, con `npm run preview` en marcha:

```sh
npm run build
npm run capture:designs
npm run build
```

La última compilación copia las capturas de [public/design-previews](public/design-previews) al resultado publicable. La galería no guarda una elección ni sustituye la portada principal.
