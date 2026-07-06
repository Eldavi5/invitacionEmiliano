export type Locale = "es" | "en";

type Quote = {
  text: string;
};

export const invitationContent = {
  es: {
    babyName: "Santiago",
    hostName: "El Vuelo de Santiago",
    parents: {
      mom: "Monica Silva Bello",
      dad: "Omar Barreto Resendiz"
    },
    event: {
      date: "Sábado 1 de agosto de 2026",
      time: "4:00 PM",
      location: "Salón Nube Azul, Jardín Central",
      mapsQuery: "Salón Nube Azul, Jardín Central"
    },
    eventLabels: {
      date: "Fecha de Despegue",
      time: "Hora de Embarque",
      location: "Pista de Aterrizaje"
    },
    countdown: {
      title: "Tiempo para el Despegue",
      subtitle: "Vuelo con destino a Santiago",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos"
    },
    phrase: "¡Nuestra mayor aventura está por despegar! Con el corazón lleno de ilusión y listos para emprender el viaje más hermoso, esperamos la llegada de nuestro amado co-piloto, Santiago. ¡Acompáñanos a bordo!",
    phraseTwo: "Pintamos el cielo de azul y blanco para guiar el vuelo de Santiago hacia nuestras vidas. ¡Cada pase de abordar compartido con ustedes es un recuerdo invaluable en nuestra bitácora!",
    phraseThree: "¡El viaje es más hermoso cuando se comparte con una tripulación especial! Queremos volar alto, reír juntos y guardar en el corazón cada milla de este gran día.",
    quotes: [
      { text: "¡Santiago es nuestro pequeño cometa, que viene a pintar de estrellas y puras risas nuestro cielo!" },
      { text: "¡Contamos los días y calibramos los mandos para escuchar sus risitas y ver su carita por primera vez!" },
      { text: "¡Celebremos la vida, el amor y el despegue de la aventura más emocionante que el cielo nos ha regalado!" },
      { text: "¡Cada nube, cada avioncito de papel y cada detalle azul susurran lo mucho que ya te amamos, co-piloto Santiago!" }
    ] satisfies Quote[],
    message:
      "¡El Vuelo SANTIAGO-2026 está listo en la pista! Te invitamos a ser parte de nuestra tripulación en esta hermosa fiesta de bienvenida, donde compartiremos risas, juegos y momentos inolvidables a gran altura.",
    babySection:
      "¡Un hangar lleno de sueños! Preparamos con amor cada detalle del equipaje y de la cabina para darle la bienvenida más cómoda y segura al nuevo co-piloto de la familia.",
    babyStyle:
      "Un estilo aéreo Baby Bloom en tonos azul y blanco nube. Diseñamos un ambiente celestial, con avioncitos retro, nubes esponjosas y destellos de estrellas para que sientas la emoción de volar.",
    momentsTitle: "Escalas de Nuestra Celebración",
    moments: [
      {
        title: "Check-in y Bienvenida",
        description: "Daremos la bienvenida a toda nuestra tripulación en un aeropuerto celestial lleno de nubes azules para comenzar la aventura con el corazón alegre."
      },
      {
        title: "Vuelo a Gran Altura",
        description: "Disfrutaremos de un banquete inspirado en las alturas, con bocadillos dulces y bebidas refrescantes preparadas para endulzar el viaje."
      },
      {
        title: "Bitácora de Vuelo",
        description: "Abriremos un espacio para que escribas tus mejores deseos para Santiago y nos tomemos fotos aéreas memorables en nuestra cabina de recuerdos."
      },
      {
        title: "Aterrizaje Feliz",
        description: "Un brindis muy especial entre risas, juegos y la inmensa alegría de saber que el vuelo de Santiago estará acompañado de personas increíbles."
      }
    ],
    eventTitle: "Plan de Vuelo",
    eventSubtitle: "Todo listo para nuestro despegue",
    eventNote: "Preparamos un viaje suave y lleno de tranquilidad para que disfrutes cada milla sin prisas. ¡Prepara tu pase de abordar!",
    locationImageTitle: "Nuestra Pista de Aterrizaje",
    locationImageCaption: "El hermoso Salón Nube Azul nos recibirá en sus instalaciones listas para el aterrizaje del gran día.",
    mapsButton: "Ver Ruta en Google Maps",
    photosTitle: "Bitácora del Co-Piloto",
    photosIntro: "Galería del Viaje",
    photos: [
      {
        title: "El Radar de Amor",
        caption: "Nuestra primera mirada a Santiago en el ultrasonido. ¡Su pequeño motor latiendo con fuerza en la pantalla!",
        placeholder: "Primer Radar de Santiago"
      },
      {
        title: "Equipaje Listo",
        caption: "Zapatitos de piloto, juguetes de aviones y ropa suave listos en el hangar para su primer viaje en este mundo.",
        placeholder: "Preparación de Equipaje"
      },
      {
        title: "Estilo de Altura",
        caption: "Nuestra mesa de regalos y los detalles celestiales para consentir a Santiago en su despegue de vida.",
        placeholder: "Detalles del Despegue"
      },
      {
        title: "Los Comandantes",
        caption: "Mónica y Omar listos para tomar el control de los mandos en esta hermosa aventura que comienza.",
        placeholder: "Pilotos de Santiago"
      }
    ],
    parentsTitle: "Pilotos al Mando",
    parentsSubtitle: "Capitanes: Mónica & Omar",
    parentsPhotosTitle: "Nuestra Gran Aventura",
    parentsPhotosCaption: "El amor es nuestro combustible y la llegada de Santiago es nuestro destino más hermoso. Estamos felices de emprender este viaje contigo.",
    rsvp: {
      title: "Confirmar Pase de Abordar",
      heading: "Reserva tu asiento en la tripulación",
      description: "Confímanos tu asistencia completando el formulario. Al presionar el botón, se generará tu pase de abordar de confirmación para enviarlo por WhatsApp.",
      phone: "+52 56 1152 8080",
      familyLabel: "Tu Nombre o Familia",
      familyPlaceholder: "Ej. Familia Gómez o Sofía Pérez",
      peopleLabel: "¿Cuántos asientos reservarás?",
      peoplePlaceholder: "Selecciona los asientos",
      submit: "Confirmar Abordaje por WhatsApp",
      defaultFamily: "Tripulación Invitada"
    },
    music: {
      title: "Sinfonía en las Nubes",
      description: "Melodías celestiales para ambientar el viaje de Santiago.",
      buttonLabel: "Música"
    },
    language: {
      label: "ES / EN"
    },
    heroPill: "✈️ Vuelo de Santiago"
  },
  en: {
    babyName: "Santiago",
    hostName: "Santiago's Flight",
    parents: {
      mom: "Monica Silva Bello",
      dad: "Omar Barreto Resendiz"
    },
    event: {
      date: "Saturday, August 1, 2026",
      time: "4:00 PM",
      location: "Salón Nube Azul, Jardín Central",
      mapsQuery: "Salón Nube Azul, Jardín Central"
    },
    eventLabels: {
      date: "Departure Date",
      time: "Boarding Time",
      location: "Landing Runway"
    },
    countdown: {
      title: "Time to Takeoff",
      subtitle: "Flight bound for Santiago",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds"
    },
    phrase: "Our greatest adventure is about to take off! With hearts full of dreams and ready to embark on the most beautiful journey, we await the arrival of our beloved co-pilot, Santiago. Join us on board!",
    phraseTwo: "We paint the sky in blue and white to guide Santiago's flight into our lives. Every boarding pass shared with you is a priceless memory in our flight log!",
    phraseThree: "The journey is more beautiful when shared with a special crew! We want to fly high, laugh together, and keep every mile of this great day in our hearts.",
    quotes: [
      { text: "Santiago is our little comet, coming to paint our sky with stars and pure laughter!" },
      { text: "We count the days and calibrate the controls to hear his sweet giggles and see his face for the first time!" },
      { text: "Let's celebrate life, love, and the takeoff of the most exciting adventure heaven has given us!" },
      { text: "Every cloud, every paper plane, and every blue detail whispers how much we already love you, co-pilot Santiago!" }
    ] satisfies Quote[],
    message:
      "Flight SANTIAGO-2026 is ready on the runway! We invite you to be part of our crew in this beautiful welcoming party, where we will share laughter, games, and unforgettable high-flying moments.",
    babySection:
      "A hangar full of dreams! We prepare with love every detail of the luggage and the cabin to give the most comfortable and safe welcome to the family's new co-pilot.",
    babyStyle:
      "A Baby Bloom aerial style in blue and cloud white tones. We designed a celestial environment with retro airplanes, fluffy clouds, and sparkling stars so you feel the excitement of flying.",
    momentsTitle: "Our Celebration Flight Stops",
    moments: [
      {
        title: "Check-in & Welcome",
        description: "We will welcome our crew to a celestial airport filled with blue clouds to start our adventure with happy hearts."
      },
      {
        title: "High Altitude Flight",
        description: "We will enjoy a high-altitude-inspired feast with sweet snacks and refreshing drinks prepared to sweeten the journey."
      },
      {
        title: "Flight Logbook",
        description: "We will open a space for you to write your best wishes for Santiago and take memorable aerial photos in our memory cockpit."
      },
      {
        title: "Happy Landing",
        description: "A very special toast filled with laughter, games, and the immense joy of knowing Santiago's flight will be accompanied by amazing people."
      }
    ],
    eventTitle: "Flight Plan",
    eventSubtitle: "Everything ready for our takeoff",
    eventNote: "We have prepared a smooth and peaceful journey for you to enjoy every mile without rush. Get your boarding pass ready!",
    locationImageTitle: "Our Landing Runway",
    locationImageCaption: "The beautiful Salón Nube Azul will welcome us, with its facilities fully prepared for landing on our big day.",
    mapsButton: "View Route on Google Maps",
    photosTitle: "Co-Pilot's Logbook",
    photosIntro: "Journey Gallery",
    photos: [
      {
        title: "The Love Radar",
        caption: "Our first look at Santiago in the ultrasound. His tiny motor beating strong on the screen!",
        placeholder: "Santiago's First Radar"
      },
      {
        title: "Luggage Ready",
        caption: "Pilot shoes, airplane toys, and cozy outfits ready in the hangar for his first trip in this world.",
        placeholder: "Luggage Preparation"
      },
      {
        title: "High-Flying Style",
        caption: "Our gift registry and celestial details to pamper Santiago on his takeoff of life.",
        placeholder: "Takeoff Highlights"
      },
      {
        title: "The Commanders",
        caption: "Monica and Omar ready to take control of the cockpit in this beautiful adventure.",
        placeholder: "Santiago's Pilots"
      }
    ],
    parentsTitle: "Pilots in Command",
    parentsSubtitle: "Captains: Monica & Omar",
    parentsPhotosTitle: "Our Great Adventure",
    parentsPhotosCaption: "Love is our fuel and Santiago's arrival is our most beautiful destination. We are happy to embark on this journey with you.",
    rsvp: {
      title: "Confirm Boarding Pass",
      heading: "Reserve your seat in the crew",
      description: "Confirm your attendance by filling out the form. Pressing the button will generate your confirmation boarding pass to send over WhatsApp.",
      phone: "+52 56 1152 8080",
      familyLabel: "Your Name or Family Name",
      familyPlaceholder: "Ex. Gomez Family or Sofia Perez",
      peopleLabel: "How many seats will you reserve?",
      peoplePlaceholder: "Select the seats",
      submit: "Confirm Boarding via WhatsApp",
      defaultFamily: "Guest Crew"
    },
    music: {
      title: "Symphony in the Clouds",
      description: "Celestial melodies to set the mood for Santiago's flight.",
      buttonLabel: "Music"
    },
    language: {
      label: "EN / ES"
    },
    heroPill: "✈️ Santiago's Flight"
  }
} as const;
