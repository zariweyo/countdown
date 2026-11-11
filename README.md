# ✈️ London Calling — guía del viaje

Web estática responsive para nuestra escapada a Londres del **2 al 6 de diciembre de 2026**. Sin nombres ni datos privados; repositorio y Pages son públicos.

## Vistas
- **Inicio:** cuenta atrás real hasta el vuelo FR5375, collage y resumen.
- **Calendario:** selector de días y cronología local con enlaces a Maps.
- **Reservas:** vuelos, Epsilon Hotel y excursión de Golden Tours a Warner Bros. Studio Tour.
- **Mapas:** transporte aeropuerto-hotel, hotel-King's Cross, hotel-Gatwick y lugares propuestos (no reservados).

Todos los horarios londinenses se expresan en GMT; la salida desde Sevilla y la llegada de regreso, en CET. La cuenta atrás parte del **2 de diciembre de 2026 a las 07:10 CET**. Tras la salida se muestra el estado del viaje. **11:45–18:45 del 3 de diciembre** son los horarios comunicados para la excursión con Golden Tours, no necesariamente la hora de acceso a los estudios.

## Desarrollo y publicación
Abre `index.html` directamente. No necesita compilación. El workflow existente `.github/workflows/pages.yml` despliega en GitHub Pages automáticamente al hacer push a `main` (Settings → Pages → Source: GitHub Actions).

Página: https://zariweyo.github.io/countdown/

El collage utiliza imágenes de Unsplash y requiere conexión a Internet. La fotografía de bosque es solo una ambientación mágica; **no representa los estudios Warner**.

## Próximos cambios
Añadir reservas confirmadas y repartir visitas pendientes en el calendario. No incluir nombres, pasaportes, localizadores de reserva ni otros datos personales.