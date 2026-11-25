# Portfolio de Wilmer Zeas Rodriguez

React 19, TypeScript, Vite y Sass. Portada original y ficha de Heaven, con una propuesta custom de recorrido vertical en una ruta independiente.

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
- El despliegue es manual. Versión de prueba publicada el 24 de noviembre de 2026 desde prueba-hallmark. Propuesta custom: https://wilmergit.github.io/MyPortfolio/#/custom

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

## Propuesta custom

La portada original permanece en `#/`. La nueva propuesta sin mosaicos se abre en [Portfolio custom](https://wilmergit.github.io/MyPortfolio/#/custom).

[CustomPortfolio.tsx](src/components/custom/CustomPortfolio.tsx) compone un recorrido vertical con tipografía grande, Heaven, presentación, experiencia y contacto. Reutiliza el objeto Project de Heaven. El parámetro `?desde=custom` permite que la ficha vuelva a esta propuesta; desde el original sigue volviendo a la portada.

Las seis alternativas descartadas, sus capturas, sus fuentes y el script de comparación se han retirado. Las rutas `#/disenos` y `#/disenos/<alternativa>` redirigen a `#/custom`; su implementación anterior permanece en el historial de Git.

Los archivos de fuente del custom y sus licencias OFL están en [public/fonts/custom](public/fonts/custom). Se usan nombres internos propios para preservar la configuración del original.

Para capturar o auditar esta ruta en PowerShell, con la previsualización iniciada:

```powershell
$env:PORTFOLIO_AUDIT_URL = 'http://127.0.0.1:4173/MyPortfolio/#/custom'
npm.cmd run capture:visual
npm.cmd run audit:visual
```

El comando general de auditoría incluye también archivos originales; no equivale al resultado focalizado del custom documentado en [decisiones-portfolio.md](decisiones-portfolio.md).

## Portada elegida: original compacto

Wilmer elige el original. El nombre pasa a la cabecera y las experiencias de Casamedia e IsardVDI comparten estructura, superficie y tecnologías en texto. El mosaico se compacta para escritorio; en ventanas anchas y bajas pasa a tres columnas. En móvil se conserva el scroll vertical. Se mantienen el flujo normal y la accesibilidad cuando una ventana o el zoom requieren más espacio.

Ajustes en la rama `ajustes-original-escritorio`, basada en `prueba-hallmark`. Las tres propuestas posteriores siguen guardadas en `exploracion-custom-portadas`. Los tamaños comprobados y las decisiones se detallan en [decisiones-portfolio.md](decisiones-portfolio.md).
