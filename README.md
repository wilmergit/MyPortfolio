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
- En GitHub, Pages debe estar configurado para publicar desde la raíz de la rama `gh-pages`. La existencia de la rama está comprobada localmente; la configuración remota debe comprobarse al publicar.
- La ruta tras `#` la interpreta React. GitHub Pages recibe siempre `/MyPortfolio/`, por lo que la recarga de la ficha no requiere redirecciones ni un servidor propio.
- El despliegue no es automático desde la rama de rediseño. No se ha publicado esta iteración.

Las decisiones y asuntos pendientes se registran en [decisiones-portfolio.md](decisiones-portfolio.md).
