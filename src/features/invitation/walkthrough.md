# Walkthrough de la Invitación (Baby Shower de Santiago - Temática de Aviones)

Hemos completado la transformación total de la invitación, migrando de la temática de "Ositos de Peluche" a un **Espectáculo de Aviones y Vuelo de Gran Porte**. Toda la arquitectura es responsiva, moderna (glassmorphic) y libre de errores.

---

## Cambios Realizados

### 1. Cambio de Hora de Embarque a las 5:00 PM (¡Nuevo!)
- **Archivos modificados:**
  - [invitation.ts](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/data/invitation.ts)
  - [countdown-card.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/countdown-card.tsx)
- **Cambios:**
  - **Textos de la Invitación:** Actualizamos la propiedad de hora a **"5:00 PM"** tanto para la sección en español como para la sección en inglés.
  - **Sincronización del Temporizador:** Actualizamos la fecha y hora objetivo del contador en `countdown-card.tsx` a **`2026-08-02T17:00:00`** para sincronizar el contador de cuenta regresiva exactamente a las 5 de la tarde.

### 2. Integración de Fotos de los Papás
- **Archivos modificados:**
  - [parents-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/parents-section.tsx)
  - [memory-carousel.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/components/memory-carousel.tsx)
  - [invitation.ts](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/data/invitation.ts)
- **Cambios:**
  - **Pilotos al Mando (Sección de Padres):**
    - Reemplazamos la ilustración animada por tu foto real `omarymona.jpeg` renderizada en un marco pulido, redondeado y con efecto hover.
    - Cambiamos el subtítulo informativo de *"Capitanes: Mónica & Omar"* a **"Omar y Monica"** (para español) y **"Omar and Monica"** (para inglés) según tu petición.
  - **Diapositiva "Los Comandantes" (Galería de Viajes):**
    - Cargamos la foto real `papas.jpeg` en la cuarta diapositiva de la Bitácora del Co-Piloto.
    - Adaptamos la estructura del carrusel para estirar esta imagen a pantalla completa (*full-bleed*) dentro del pase de abordar simulado, tal como lo hicimos con las fotos del bebé y del oso.

### 3. Cambio de Fecha al 2 de Agosto de 2026
- **Archivos modificados:**
  - [invitation.ts](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/data/invitation.ts)
  - [countdown-card.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/countdown-card.tsx)
- **Cambios:**
  - **Textos Visuales:** Modificamos la fecha del evento a **"Domingo 2 de agosto de 2026"** en español y **"Sunday, August 2, 2026"** en inglés.
  - **Sincronización del Contador:** Desplazamos la fecha objetivo del temporizador de cuenta regresiva en `countdown-card.tsx` al **2026-08-02T17:00:00**, asegurando que los días, horas y minutos restantes se calculen en base al nuevo día del despegue.

### 4. Reset Off-Screen Sincronizado (Entrada Siempre por la Izquierda)
- **Archivos modificados:**
  - [reveal.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/reveal.tsx)
  - [globals.css](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/app/globals.css)
- **Cambios:**
  - **Máquina de Estados con Reset:** Diseñamos una máquina de estados en React (`idle` -> `entering` -> `visible` -> `leaving` -> `idle`) coordinada con temporizadores:
    1. **Entrada y Estancia:** La tarjeta ingresa desde la izquierda (`is-visible`) y se queda en el centro.
    2. **Salida:** Cuando se desplaza fuera de pantalla, vuela y se va hacia la derecha (`is-leaving`).
    3. **Reset Instantáneo (Off-Screen):** Al transcurrir **1150 ms** (tiempo en que la tarjeta ya salió de la pantalla y tiene opacidad 0), el estado cambia automáticamente a `is-idle`.
    4. En el archivo CSS, la clase `.is-idle` aplica una propiedad crítica: `transition: none !important;` y reubica la tarjeta instantáneamente a `-100vw`. Al no tener animación de regreso, el salto a la izquierda ocurre en 0 milisegundos de forma 100% invisible para el usuario.
  - Al regresar scroll, todas las tarjetas vuelven a entrar impecablemente **siempre desde la izquierda** y salen **siempre hacia la derecha**.

### 5. Corrección del Detección de Intersección por Scroll
- **Archivo modificado:** [reveal.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/reveal.tsx)
- **Cambios:**
  - **La Solución (Ancla Estática):** Dividimos la estructura de `<Reveal />` en un contenedor exterior de anclaje estático (`div ref={ref}`) que marca el espacio real de cada tarjeta, y un contenedor animado interior (`div className="scroll-reveal"`) que realiza el planeo.

### 6. Animación de Pancarta Remolcada de Izquierda a Derecha
- **Archivos modificados:**
  - [reveal.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/reveal.tsx)
  - [globals.css](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/app/globals.css)
- **Cambios:**
  - **Efecto de Arrastre o Remolque:** El avión va remolcando toda la tarjeta de la sección.
  - **Llegada (de Izquierda a Centro):** Entran planeando desde el extremo izquierdo de la pantalla (`translateX(-100vw)`), asentándose en el centro.
  - **Despegue (de Centro a Derecha):** Al salir, se van volando hacia el extremo derecho de la pantalla (`translateX(100vw)`).

### 7. Aviones de Fondo Más Reales
- **Archivo modificado:** [sky-background.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/sky-background.tsx)
- **Cambios:**
  - Rediseñamos por completo el avión de fondo (`RealisticAirliner`). Cambiamos el vector sencillo por un **avión comercial de pasajeros moderno y altamente detallado**, el cual incluye turbinas, ventanillas y alas en flecha estilizadas.

### 8. Ocultamiento de Punto Rojo y Tarjeta de Google Maps
- **Archivo modificado:** [event-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/event-section.tsx)
- **Cambios:**
  - **Recorte de Tarjeta ("Maps"):** Aplicamos un marco de recorte al iframe de Google Maps usando posicionamiento absoluto negativo.
  - **Ocultamiento del Punto Rojo:** Para ocultar el pin rojo genérico de Google, superpusimos un **Punto de Aterrizaje de Radar (Landing Pad)** blanco y azul en el centro exacto del mapa.

### 9. Integración de Mapa Real de Google Maps con Pin de Avión
- **Archivos modificados:**
  - [event-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/event-section.tsx)
  - [invitation.ts](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/data/invitation.ts)
- **Cambios:**
  - **Ubicación Real:** Actualizamos la dirección a la del mapa compartido: `"1034 Lorlyn Cir, Batavia, IL 60510"`.

### 10. Reproductor de Latidos del Bebé
- **Archivo creado:** [heartbeat-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/heartbeat-section.tsx)
- **Cambios:**
  - Creamos el apartado **¿Quieres escuchar mi corazón? / El Latido de Mi Vida**.
  - **Modo Audio ("Solo Escucha"):** Permite reproducir las dos grabaciones reales del bebé (`corazon.opus` y `corazon2.opus`).
  - **Modo Video ("Mira cómo vivo"):** Un radar de amor simulado que reproduce el video del ultrasonido latiente (`videocorazon.mp4`).

### 11. Integración de Fotos Reales en la Bitácora
- **Archivo modificado:** [memory-carousel.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/components/memory-carousel.tsx)
- **Cambios:**
  - **Despegue / Radar de Amor (Diapositiva 1):** Cargamos la foto real de tu bebé (`fotodelbebe.jpeg`).
  - **Equipaje Listo (Diapositiva 2):** Cargamos la foto real de tu oso sorpresa (`OsoSorpresa.jpeg`).

---

## Verificación de Compilación

Hemos compilado el proyecto localmente mediante `npm run build`:
```bash
▲ Next.js 16.2.10 (Turbopack)
Creating an optimized production build ...
✓ Compiled successfully in 923ms
Running TypeScript ...
Finished TypeScript in 1191ms ...
Generating static pages (3/3) ...
✓ Generating static pages in 133ms
Finalizing page optimization ...
Route (app)             Size
┌ ○ /                   92.4 kB
└ ○ /_not-found         875 B
```

La compilación y la verificación de tipos TypeScript se realizaron de manera exitosa y sin advertencias, garantizando una base de código limpia.
