# ✈ London Calling — Countdown

Una web estática y responsive para contar los días, horas, minutos y segundos hasta nuestro viaje a Londres, del **2 al 6 de diciembre de 2026**.

## Uso

Abre `index.html` directamente en un navegador. No necesita dependencias ni compilación.

## Hora de salida

De momento la cuenta atrás termina **el 2 de diciembre de 2026 a las 00:00 en Sevilla**, porque no se ha confirmado la hora de despegue. Para usar la hora real, cambia `DEPARTURE` en `script.js`:

```js
const DEPARTURE = new Date("2026-12-02T10:30:00+01:00").getTime();
```

Sustituye las 10:30 del ejemplo por la hora local real de salida del vuelo FR5375.

## Imágenes

El collage muestra fotografías remotas de Unsplash y una ambientación de bosque mágico relacionada con el mundo cinematográfico. **No es una fotografía real de los estudios Warner.** Las fotos necesitan conexión a Internet y pueden sustituirse por imágenes locales. No se utilizan logotipos comerciales ni fotografías oficiales de la visita a Warner Bros.

## Publicación

El workflow `.github/workflows/pages.yml` despliega el contenido automáticamente en GitHub Pages al hacer push a `main` y permite ejecutar el deploy manualmente. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions** para habilitarlo.

Sitio esperado cuando Pages esté habilitado: https://zariweyo.github.io/countdown/
