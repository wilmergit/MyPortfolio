# Decisiones del portfolio de Wilmer Zeas Rodriguez

Actualizado el 24 de noviembre de 2026.

Este archivo reúne las decisiones de diseño, contenido y desarrollo. Al cambiar una decisión, se actualiza el apartado correspondiente y se anota el motivo en el historial.

## Decisiones confirmadas

| Tema | Decisión |
| --- | --- |
| Proyecto | Portfolio personal. |
| Dirección visual | Mosaico futurista con tarjetas de distintos tamaños. |
| Portada | Clara. El tono exacto del fondo se probará en la primera maqueta. |
| Proyecto destacado | [Heaven](https://github.com/wilmergit/Heaven), una web concebida para la compraventa de videojuegos según [su README](https://github.com/wilmergit/Heaven/blob/main/README.md). Wilmer desarrolló el proyecto completo e indica que no tiene base de datos. |
| Repositorio del portfolio | [wilmergit/MyPortfolio](https://github.com/wilmergit/MyPortfolio). Es la base propuesta para el rediseño. |
| Forma de trabajar | Planear el diseño y el alcance en el chat e implementar con Codex en VS Code, usando este documento y las referencias visuales como contexto. |
| Aprendizaje | Wilmer participa sobre todo en el diseño y el frontend. Codex selecciona los puntos de aprendizaje y los explica con ejemplos del proyecto, con especial atención al backend y al recorrido de los datos hasta la interfaz cuando corresponda. |

## Paleta y tipografía

| Elemento | Valor | Uso previsto y estado |
| --- | --- | --- |
| Rojo | `#FA081B` | Color inicial elegido por Wilmer. Probar en el nombre, acentos y algún bloque destacado. |
| Gris oscuro | `#282A2E` | Color inicial elegido por Wilmer. Probar en texto, marcos y una tarjeta oscura. |
| Blanco cálido | `#F5F4F0` | Propuesta para el fondo y las tarjetas claras. Pendiente de revisión. |
| Titulares | Archivo Narrow en negrita | Propuesta para el nombre en portada. Pendiente de revisión. |
| Fichas | IBM Plex Mono | Propuesta para roles, fechas y tecnologías. Pendiente de revisión. |
| Texto de lectura | Sans serif | Familia por elegir. |

## Composición propuesta

- **Cabecera.** Nombre en rojo y a gran tamaño, con «Desarrollador Web Full Stack» debajo en un tamaño legible.
- **Mosaico.** Heaven ocupa la tarjeta principal, con un recorte del hero como primera opción visual, una descripción breve y un enlace a su ficha. Casamedia conserva el formato de credencial del boceto. Los bloques pequeños pueden servir para la presentación, el CV y el contacto.
- **Móvil.** Una columna con el proyecto destacado primero. El nombre puede partirse en dos líneas.
- **Referencias.** El boceto propio marca la cabecera y la ficha de Casamedia. Dsgners aporta la composición asimétrica. Las referencias de credencial y producto inspiran la presentación de los datos, y los carteles futuristas orientan el uso puntual del contraste.

## Desarrollo y primer hito

- **Base técnica recomendada.** Conservar React, TypeScript y Vite, ya presentes en el repositorio con Sass. Usar CSS Grid para el mosaico y un archivo de datos tipado para los proyectos. `App.tsx` monta `Header`, `Intro` y `Body` en una sola entrada. Revisar componentes, enlaces y recursos reutilizables antes de cambiar la portada.
- **Despliegue y navegación.** El proyecto ya tiene scripts para GitHub Pages y una base Vite `/MyPortfolio`. Para las páginas de proyecto, comprobar que un enlace directo y una recarga funcionan bajo esa base. Astro queda como alternativa si más adelante el portfolio se orienta a muchas páginas estáticas y a contenido en Markdown.
- **Backend.** Un formulario de contacto o un panel de edición serían motivos para valorar un servicio o un backend, según los requisitos.
- **Primer hito.** Crear el recorrido de Heaven desde la tarjeta de portada hasta su página de detalle. La ficha incluirá qué problema aborda, cuál fue la aportación de Wilmer, una captura y el enlace al repositorio. La [demo pública](https://heaven-2df58.web.app/) abrió, aunque el aviso de cookies siguió visible al pulsar «Rechazar» durante la revisión. Comprobar ese flujo antes de colocar el enlace como demo destacada.
- **Aprendizaje durante el hito.** Seguir los datos de Heaven desde el archivo de proyectos hasta la tarjeta y su página de detalle. Si el portfolio acaba usando una API, revisar después una petición completa y cómo React muestra la respuesta o el error.
- **Verificación de entrega.** Probar la navegación y los enlaces, revisar el diseño en móvil y ordenador, comprobar el uso con teclado y probar la versión publicada si se incluye el despliegue.

## Material visual de Heaven

- **Imagen principal recomendada.** Recortar el hero alrededor del cartucho morado para que la imagen conserve su fuerza en una tarjeta pequeña. Ver el [hero completo](https://github.com/wilmergit/Heaven/blob/main/Exposicion/public/images/SCR_HEAVEN.png).
- **Contenido secundario.** Usar el hero completo en la ficha y valorar el RSS como ejemplo técnico. Si se muestra la pizarra, indicar que es una adaptación del componente Drag II de Visx, tal como recoge el [README](https://github.com/wilmergit/Heaven/blob/main/README.md).

## Continuar en VS Code

1. Abrir la copia local de `MyPortfolio` y poner este Markdown en la raíz del repositorio. Añadir las cuatro referencias originales al contexto del chat de Codex.
2. Opcionalmente, instalar [Hallmark](https://github.com/Nutlope/hallmark) desde la terminal, en la raíz del repositorio y con Node 18 o posterior según su README.

   ```bash
   npx skills add nutlope/hallmark --agent codex
   ```

   Invocarlo con `$hallmark` en Codex. Usarlo para una revisión visual en modo personalizado con la dirección de diseño de este documento.
3. Mensaje inicial para Codex.

   > Lee `decisiones-portfolio.md` y las referencias visuales adjuntas. Revisa primero el portfolio actual, sus componentes reutilizables y el despliegue de GitHub Pages. Trabaja en una rama de rediseño. El primer hito es una portada clara con mosaico y una tarjeta de Heaven conectada a su ficha de detalle. Explícame paso a paso cómo los datos tipados de Heaven llegan a los dos componentes. Actualiza este Markdown al cerrar decisiones.

## Pendiente de decidir

- Público principal del portfolio y qué aspectos técnicos de Heaven conviene desarrollar en la ficha.
- Tono final del fondo, tipografías y distribución del mosaico tras ver la primera maqueta.
- Proyectos secundarios, disponibilidad del CV y forma de contacto.


## Primer hito implementado — 24 de noviembre de 2026

### Revisión de partida

- El portfolio era una página React con Header, Intro, Body y Experience. Se conserva esa división y la información de experiencia de Casamedia e IsardVDI × ITB; se sustituyen estilos, enlaces vacíos y rutas relativas de imágenes por imports que Vite procesa.
- No había tarjeta ni ficha de proyectos, ni router. El directorio dist estaba versionado; esta entrega conserva ese criterio y lo regenera con la compilación.
- GitHub Pages dispone de una rama remota gh-pages. Los scripts predeploy y deploy compilan y publican dist. La configuración de Pages en GitHub no se ha confirmado mediante la API y esta iteración no se ha publicado.
- Las cuatro referencias originales no estaban adjuntas al contexto recibido ni disponibles como archivos locales. La primera maqueta sigue su descripción en este documento; el contraste visual con los originales sigue pendiente.

### Decisiones de implementación

- Rama: `redesign/heaven-mosaic`.
- Portada de esta iteración: fondo #F5F4F0, nombre y tarjeta de contacto en #FA081B y credencial en #282A2E. Archivo Narrow para titulares, IBM Plex Mono para metadatos e Inter para lectura, con fuentes alternativas del sistema. Estas elecciones se implementan como primera maqueta, pendientes de validación visual de Wilmer.
- CSS Grid de doce columnas: Heaven ocupa ocho, experiencia cuatro; debajo se sitúan presentación y contacto. En móvil se usa una columna y Heaven aparece primero.
- Se usa la captura original descargada del repositorio de Heaven. La tarjeta encuadra el cartucho mediante CSS y la ficha muestra la captura completa. No se modificó el archivo original.
- Una sola colección tipada contiene los proyectos; los componentes reciben un objeto Project mediante props. Solo se atribuye React a Heaven, confirmado en su README. TypeScript pertenece al stack del portfolio.
- Navegación con hash: `/MyPortfolio/#/proyectos/heaven`. Pages sirve siempre la entrada de la aplicación; React interpreta el fragmento. Se conservan atrás, adelante, vuelta a portada y una vista para rutas desconocidas.
- La ficha incluye idea, aportación, alcance sin base de datos, captura y repositorio. El detalle técnico de funcionalidades puede ampliarse tras revisar el código de Heaven.
- Se enlaza GitHub y LinkedIn ya existentes. No se añade un CV sin archivo disponible. La demo no se destaca hasta comprobar el flujo de cookies.
- Accesibilidad de esta iteración: enlaces nativos, foco visible, salto al contenido, foco en el contenido al cambiar la ruta, textos alternativos y reducción de movimiento.

### Recorrido de los datos de Heaven, paso a paso

1. [projects.ts](src/data/projects.ts) declara la interfaz `Project`: establece los campos que cada proyecto debe proporcionar y sus tipos. Por ejemplo, `slug` es texto, `technologies` es una lista de textos e `image` contiene `src` y `alt`.
2. En ese mismo archivo, `projects: readonly Project[]` contiene el objeto de Heaven. TypeScript detecta campos obligatorios ausentes o valores de un tipo incorrecto. `readonly` evita modificar la colección mediante métodos como push en el código tipado; no congela los objetos en ejecución.
3. [Body](src/components/body/body.tsx) importa la colección y ejecuta `projects.map(...)`. Por cada elemento renderiza `<ProjectCard project={project} />`: la prop transporta el objeto desde el padre al hijo.
4. [ProjectCard](src/components/projects/ProjectCard.tsx) exige una prop de tipo `Project`. Lee nombre, resumen e imagen para la tarjeta, y construye `#/proyectos/heaven` con `project.slug`. La tarjeta completa es un enlace, utilizable con teclado.
5. Al activar el enlace, cambia el hash del navegador. [App](src/App.tsx) recibe el evento `hashchange`, actualiza su estado con `setRoute`, extrae el slug y busca el proyecto mediante `projects.find`. El nuevo estado provoca un render de React.
6. Si encuentra Heaven, App renderiza `<ProjectDetail project={project} />`. [ProjectDetail](src/components/projects/ProjectDetail.tsx) recibe el mismo objeto tipado y muestra sus campos ampliados: idea, aportación, alcance, tecnologías y repositorio. Si no encuentra el slug, App muestra una página no encontrada.
7. La imagen se importa como módulo. Vite la copia a assets con un nombre que incluye una huella y genera su URL con la base `/MyPortfolio/`; tarjeta y ficha usan esa misma URL.
8. No interviene una API ni un backend. Los datos se empaquetan con la aplicación durante el build. Los tipos se comprueban al compilar y no validan datos externos en ejecución. Si se incorpora una API, hará falta validar su respuesta y gestionar carga y errores.

### Verificación

- Compilación de TypeScript y Vite, y ESLint: correctos.
- Previsualización local del build bajo /MyPortfolio/: tarjeta a ficha, recarga directa, imágenes, atrás y adelante comprobados.
- Escritorio revisado visualmente; a 320 y 390 px se comprueba una sola columna y ausencia de desbordamiento horizontal. Foco de teclado y salto al contenido comprobados.
- Publicación y prueba remota: pendientes, fuera de esta entrega local.

## Historial

- **24 de noviembre de 2026.** Wilmer eligió Heaven como proyecto destacado y confirmó su preferencia por una portada clara. Se registraron la paleta inicial, las propuestas de tipografía y composición y la forma de trabajo.
- **24 de noviembre de 2026.** Wilmer confirmó la autoría de Heaven, propuso su hero y compartió el repositorio MyPortfolio y Hallmark. Se documentaron la recomendación de mantener el stack existente y el traspaso a VS Code.

- **24 de noviembre de 2026.** Implementada la primera maqueta de portada y ficha de Heaven en la rama de rediseño. Documentados el flujo tipado, la navegación con hash para Pages, las comprobaciones locales y la ausencia de las referencias originales en el contexto recibido.
