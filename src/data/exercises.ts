import type { Exercise } from "../types/exercise";

export const EXERCISES: Exercise[] = [
  // ───────────────────────── DESPLAZAMIENTO ─────────────────────────
  {
    id: "despl-cruce-basico",
    title: "Cruce de derecha y revés",
    levels: ["beginner", "intermediate", "advanced"],
    category: "defensa",
    phase: "desplazamiento",
    suggestedMinutes: 10,
    summary:
      "Patrón de pies en cruce para llegar de lado a lado de la pista sin perder la orientación hacia la red.",
    objective:
      "Automatizar el primer paso (paso cruzado) y llegar a golpear con el cuerpo perfilado, no de frente.",
    basedOn:
      "Rutina de calentamiento de pies que usan las parejas profesionales antes de cualquier sesión: recorrido en cruce sin bola, luego con bola, para fijar el patrón antes de meter presión de juego.",
    setup:
      "Un jugador en el centro de fondo. El entrenador o compañero alimenta bolas alternas a la banda de derecha y a la de revés.",
    steps: [
      "Posición inicial en el centro, raqueta arriba y peso en los apoyos.",
      "Primer paso cruzado hacia el lado de la bola alimentada (nunca el paso lateral primero).",
      "Golpe con el cuerpo perfilado hacia la banda correspondiente.",
      "Recuperación rápida al centro con pasos cortos (no un solo salto largo).",
      "Repetir alternando lados durante series de 8-10 bolas.",
    ],
    coachingCues: [
      "El primer paso marca la diferencia: siempre cruzado, nunca lateral puro.",
      "Mirar la bola por encima del hombro al recuperar el centro.",
      "Pasos cortos y rápidos de recuperación, no una zancada única.",
    ],
    levelAdaptations: {
      beginner: "Alimentación lenta y anunciada verbalmente antes de cada bola. Sin límite de tiempo de reacción.",
      intermediate: "Alimentación sin aviso verbal, ritmo medio, series de 10 bolas cronometradas.",
      advanced: "Alimentación aleatoria y rápida, incluyendo bolas a los pies para exigir ajuste fino del último paso.",
    },
    tags: ["pies", "calentamiento", "cruce", "recuperación"],
    illustration: {
      caption: "Recorrido en cruce: del centro a la banda de derecha y de revés, con recuperación al centro.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3.4,
          path: [
            [50, 170],
            [78, 155],
            [50, 170],
            [22, 155],
            [50, 170],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3.4,
          path: [
            [50, 30],
            [80, 150],
            [50, 30],
            [20, 150],
            [50, 30],
          ],
        },
      ],
    },
  },
  {
    id: "despl-atras-lob",
    title: "Recuperación de posición tras globo",
    levels: ["intermediate", "advanced"],
    category: "defensa",
    phase: "desplazamiento",
    suggestedMinutes: 10,
    summary:
      "Paso cruzado hacia atrás para leer y colocarse debajo de un globo que pasa por encima de la pareja.",
    objective:
      "Evitar el error típico de correr de espaldas: aprender a girar la cadera y cruzar el paso hacia atrás.",
    basedOn:
      "Mecánica de retroceso que se trabaja a nivel profesional para defender la bandeja u globo rival sin perder el equilibrio ni golpear tarde.",
    setup: "Jugador en posición de red. El entrenador lanza globos por encima de su cabeza hacia el fondo.",
    steps: [
      "Desde la red, identificar la trayectoria del globo apenas sale de la raqueta contraria.",
      "Girar la cadera 45° hacia el lado por donde se va a retroceder.",
      "Ejecutar el primer paso cruzado hacia atrás (nunca correr de espaldas sin girar).",
      "Recorrer el resto del camino con pasos laterales/cruzados hasta situarse debajo de la bola.",
      "Golpear (globo defensivo o contrapared) y volver a subir a la red.",
    ],
    coachingCues: [
      "El giro de cadera antes del primer paso es lo que evita perder el equilibrio.",
      "No mirar solo la bola: usar visión periférica para ubicar la pared.",
      "Llegar con tiempo para golpear cómodo, no en emergencia.",
    ],
    levelAdaptations: {
      intermediate: "Globos altos y predecibles, tiempo de reacción amplio.",
      advanced: "Globos más rápidos y con dirección variable (a los dos lados), exigiendo decisión de lado en milisegundos.",
    },
    tags: ["pies", "globo", "retroceso", "equilibrio"],
    illustration: {
      caption: "Giro de cadera y paso cruzado hacia atrás para defender el globo.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3,
          path: [
            [50, 85],
            [65, 130],
            [50, 85],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [30, 20],
            [65, 135],
            [30, 20],
          ],
        },
      ],
    },
  },
  {
    id: "despl-salida-pared-lateral",
    title: "Salida de pared lateral",
    levels: ["beginner", "intermediate", "advanced"],
    category: "defensa",
    phase: "desplazamiento",
    suggestedMinutes: 10,
    summary: "Lectura del rebote en la pared lateral de fondo para colocarse a tiempo y devolver con control.",
    objective: "Anticipar dónde va a rebotar la bola en la pared para no llegar tarde ni pegado a ella.",
    basedOn:
      "Trabajo de lectura de rebotes que se entrena de forma sistemática en el circuito profesional, porque una mala lectura de pared regala el punto.",
    setup: "El entrenador envía bolas que primero botan en la pista y luego rebotan en la pared lateral de fondo.",
    steps: [
      "Observar el bote en pista para calcular el ángulo de salida hacia la pared.",
      "Desplazarse hacia el punto donde la bola va a separarse de la pared, no hacia la pared misma.",
      "Dejar espacio entre el cuerpo y la pared para tener recorrido de swing.",
      "Golpear cuando la bola se despega, con un swing corto y controlado.",
      "Recuperar el centro de la pista inmediatamente después del golpe.",
    ],
    coachingCues: [
      "Nunca pegarse a la pared: dejar 1-2 metros de margen para golpear.",
      "El punto de referencia es dónde se separa la bola de la pared, no dónde rebota.",
      "Swing corto: la pared ya le dio velocidad a la bola.",
    ],
    levelAdaptations: {
      beginner: "Bote de pared exagerado y lento, con pausa antes del golpe para corregir la posición.",
      intermediate: "Ritmo de juego normal, alternando lado derecho e izquierdo de la pista.",
      advanced: "Combinar con bolas que cambian de efecto (liftadas y cortadas) para variar el rebote.",
    },
    tags: ["pared", "pies", "lectura de bote"],
    illustration: {
      caption: "Lectura del bote y desplazamiento hacia el punto donde la bola se separa de la pared.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3,
          path: [
            [50, 160],
            [78, 175],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [40, 40],
            [95, 178],
            [78, 175],
          ],
        },
      ],
    },
  },
  {
    id: "despl-aproximacion-red",
    title: "Paso de aproximación hacia la red",
    levels: ["intermediate", "advanced"],
    category: "ataque",
    phase: "desplazamiento",
    suggestedMinutes: 10,
    summary: "Avanzar hacia la red en pasos cortos y sincronizados con el golpe del compañero, no de una sola vez.",
    objective: "Ganar la red de forma progresiva y segura, sin quedar a mitad de pista (\"tierra de nadie\").",
    basedOn:
      "Mecánica de avance escalonado ligado al golpe de la pareja, característica del juego de ataque profesional: se sube en el momento en que el rival está en dificultad, no antes.",
    setup: "Pareja en el fondo. Uno de los dos golpea una bola ofensiva y ambos avanzan.",
    steps: [
      "Esperar a que el compañero golpee una bola con ventaja (alta o profunda al rival).",
      "Avanzar 2-3 pasos cortos, no un sprint, manteniendo la raqueta preparada.",
      "Detenerse (split-step) justo antes de que el rival golpee.",
      "Según la respuesta del rival, completar el avance a la red o frenar la subida.",
      "Repetir el patrón en varias bolas seguidas hasta llegar a posición de volea.",
    ],
    coachingCues: [
      "Nunca avanzar mientras el rival está golpeando: hacerlo cuando la bola ya salió.",
      "El split-step se hace en el momento del golpe rival, no antes ni después.",
      "Avanzar en pasos cortos mantiene el equilibrio para reaccionar a una volea rápida.",
    ],
    levelAdaptations: {
      intermediate: "Se marca verbalmente el momento de avanzar hasta interiorizar el patrón.",
      advanced: "El avance debe leerse solo por la calidad del golpe propio, sin ayuda verbal, e incluye simulacro de passing rival.",
    },
    tags: ["ataque", "red", "split-step", "coordinación"],
    illustration: {
      caption: "Avance escalonado hacia la red tras un golpe de ventaja, con split-step antes de la respuesta rival.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3.2,
          path: [
            [40, 175],
            [40, 140],
            [40, 108],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "C",
          durationSec: 3.2,
          path: [
            [70, 175],
            [70, 140],
            [70, 108],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3.2,
          path: [
            [70, 175],
            [30, 20],
          ],
        },
      ],
    },
  },
  {
    id: "despl-ocho-combinado",
    title: 'Circuito "ocho" de desplazamientos combinados',
    levels: ["beginner", "intermediate", "advanced"],
    category: "tactica",
    phase: "desplazamiento",
    suggestedMinutes: 10,
    summary: "Circuito de calentamiento que combina avance, retroceso y cruces laterales dibujando un ocho en la pista.",
    objective: "Activar todos los patrones de movimiento de la sesión antes de introducir presión de juego.",
    basedOn:
      "Rutina de activación previa al entrenamiento específico, habitual en las sesiones estructuradas de academias profesionales.",
    setup: "Pista libre, sin bola. Conos opcionales marcando las cuatro esquinas de trabajo.",
    steps: [
      "Salir desde el centro de fondo hacia la red en diagonal.",
      "Tocar la zona de volea y retroceder cruzado hacia el fondo contrario.",
      "Repetir la diagonal opuesta, dibujando un ocho continuo.",
      "Mantener la raqueta preparada y el tronco activo durante todo el recorrido.",
      "Realizar 3-4 vueltas completas al ocho antes de pasar al trabajo técnico.",
    ],
    coachingCues: [
      "El objetivo es activar, no llegar exhausto: ritmo alto pero controlado.",
      "Mantener siempre el pecho orientado hacia la red, no hacia el suelo.",
    ],
    levelAdaptations: {
      beginner: "Ritmo caminado/trotado, marcando cada cambio de dirección en voz alta.",
      intermediate: "Ritmo de trote medio con cambios de dirección más explosivos.",
      advanced: "Ritmo alto con sprint corto en cada segmento y tiempo cronometrado por vuelta.",
    },
    tags: ["calentamiento", "activación", "pies"],
    illustration: {
      caption: 'Recorrido en forma de "ocho" combinando avance a la red y retroceso cruzado.',
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 4,
          path: [
            [50, 175],
            [25, 130],
            [50, 100],
            [75, 130],
            [50, 175],
          ],
        },
      ],
    },
  },

  // ───────────────────────── TÉCNICO ─────────────────────────
  {
    id: "tec-bandeja",
    title: "Bandeja: contacto y trayectoria",
    levels: ["intermediate", "advanced"],
    category: "ataque",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Repetición guiada del golpe de bandeja para fijar el punto de contacto alto-adelantado y la trayectoria de control.",
    objective: "Golpear siempre por encima de la altura de la red, priorizando profundidad y colocación sobre potencia.",
    basedOn:
      "Mecánica de bandeja usada en el circuito profesional: golpe de contención en red que prioriza mantener la posición antes que definir el punto.",
    setup: "Jugador en posición de red. El entrenador alimenta globos cortos desde el fondo.",
    steps: [
      "Preparación con la raqueta arriba desde antes de que llegue la bola.",
      "Pequeño salto o paso hacia atrás para no perder el punto de contacto.",
      "Contacto por encima y por delante de la cabeza, con la cara de la raqueta ligeramente abierta.",
      "Acompañar el golpe hacia el objetivo (pared de fondo rival o pasillo), sin latigazo excesivo.",
      "Recuperar de inmediato la posición de red tras el golpe.",
    ],
    coachingCues: [
      "El objetivo de la bandeja es mantener la red, no ganar el punto directo.",
      "Contacto siempre por delante del cuerpo, nunca dejar caer la bola.",
      "Dirigir el golpe a las zonas 3 o 4 (centro o pared) según la formación rival.",
    ],
    levelAdaptations: {
      intermediate: "Globos altos y cómodos, foco solo en el gesto técnico sin exigencia de colocación.",
      advanced: "Globos más bajos y rápidos, exigiendo elegir entre bandeja ofensiva o defensiva según la altura real.",
    },
    tags: ["bandeja", "red", "técnica", "contención"],
    illustration: {
      caption: "Punto de contacto alto-adelantado en la bandeja, con acompañamiento hacia la pared de fondo rival.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.6,
          path: [
            [50, 90],
            [50, 80],
            [50, 90],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.6,
          path: [
            [50, 175],
            [50, 80],
            [25, 15],
          ],
        },
      ],
    },
  },
  {
    id: "tec-vibora",
    title: "Víbora: variante rápida y plana",
    levels: ["advanced"],
    category: "ataque",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Golpe intermedio entre bandeja y remate, con trayectoria plana y rápida dirigida al cuerpo del rival.",
    objective: "Ejecutar un golpe de red agresivo pero con margen de error bajo, reservado para bolas medias-altas.",
    basedOn:
      "Recurso técnico muy usado en el nivel profesional para romper el ritmo cuando la bandeja clásica ya es previsible para el rival.",
    setup: "Jugador en red. Alimentación de bolas a media altura (entre pecho y cabeza).",
    steps: [
      "Identificar que la bola llega a media altura, no apta para bandeja clásica ni remate.",
      "Preparación similar a la bandeja pero con la cara de la raqueta más cerrada.",
      "Golpe rápido y plano, con poco recorrido de swing.",
      "Dirigir la trayectoria al cuerpo o al pie del rival en la red contraria.",
      "Recuperación inmediata a posición de defensa de la red.",
    ],
    coachingCues: [
      "Es un golpe de precisión, no de potencia máxima: priorizar control.",
      "Reservarlo para bolas medias; con bolas muy altas, mejor bandeja o remate.",
    ],
    levelAdaptations: {
      advanced: "Alimentación variable en altura para exigir la decisión de cuándo usar víbora frente a bandeja o remate.",
    },
    tags: ["víbora", "red", "técnica", "velocidad"],
    illustration: {
      caption: "Trayectoria plana y rápida de la víbora dirigida al cuerpo del rival en la red.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.4,
          path: [
            [45, 85],
            [45, 78],
            [45, 85],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.4,
          path: [
            [45, 175],
            [45, 78],
            [55, 25],
          ],
        },
      ],
    },
  },
  {
    id: "tec-globo-defensivo",
    title: "Globo defensivo profundo",
    levels: ["beginner", "intermediate", "advanced"],
    category: "defensa",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Golpe de defensa alto y profundo que obliga al rival a retroceder desde la red.",
    objective: "Ganar tiempo y espacio cuando la pareja está en apuros, devolviendo la iniciativa al fondo.",
    basedOn:
      "Recurso defensivo fundamental en todos los niveles: el globo bien ejecutado es el golpe que más puntos evita perder bajo presión.",
    setup: "Jugador en el fondo. El entrenador ataca con voleas o bandejas desde la red.",
    steps: [
      "Reconocer rápidamente que no hay opción de ataque, solo defensa.",
      "Preparar la raqueta por debajo de la altura de la bola con tiempo.",
      "Golpear con trayectoria muy alta y acompañamiento largo hacia arriba.",
      "Dirigir el globo a la pareja rival que está peor colocada o al cristal de fondo.",
      "Recuperar posición de defensa central inmediatamente después.",
    ],
    coachingCues: [
      "Un globo corto es peor que no golpear: la altura y profundidad son la prioridad.",
      "Buscar siempre el lado más débil o peor posicionado del rival.",
    ],
    levelAdaptations: {
      beginner: "Trabajo sin presión de tiempo, con pausa para colocar bien el cuerpo antes de golpear.",
      intermediate: "Alimentación con volea de ataque real, exigiendo reacción rápida.",
      advanced: "Se exige además dirigir el globo a un lado concreto señalado por el entrenador en el último segundo.",
    },
    tags: ["globo", "defensa", "técnica"],
    illustration: {
      caption: "Globo alto y profundo dirigido a la pareja rival peor posicionada.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.6,
          path: [
            [50, 175],
            [50, 168],
            [50, 175],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.6,
          path: [
            [50, 90],
            [50, 168],
            [30, 15],
          ],
        },
      ],
    },
  },
  {
    id: "tec-contrapared",
    title: "Golpe de contrapared de fondo",
    levels: ["beginner", "intermediate", "advanced"],
    category: "defensa",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Golpe de defensa tras el rebote de la bola en la pared de fondo, con swing corto y trayectoria alta.",
    objective: "Aprovechar el rebote de la pared para devolver con seguridad en lugar de atacarla a la carrera.",
    basedOn:
      "Fundamento técnico específico del pádel (a diferencia del tenis): usar la pared como aliada exige un swing distinto al golpe de aire.",
    setup: "El entrenador envía bolas que rebotan en la pared de fondo antes de llegar al jugador.",
    steps: [
      "Dejar que la bola rebote completamente en la pared antes de moverse a por ella.",
      "Colocarse con espacio suficiente para un swing corto y cómodo.",
      "Golpear con trayectoria alta, priorizando seguridad sobre potencia.",
      "Evitar golpear la bola muy pegada al cuerpo o de espaldas a la red.",
      "Recuperar el centro de la pista tras el golpe.",
    ],
    coachingCues: [
      "Confiar en la pared: no hay que correr a interceptar la bola antes del rebote.",
      "Swing corto porque la pared ya aportó velocidad extra a la bola.",
    ],
    levelAdaptations: {
      beginner: "Bote de pared lento y aislado, sin combinar con otros golpes.",
      intermediate: "Se combina con desplazamiento previo desde el centro de la pista.",
      advanced: "Bolas con efecto que modifican el rebote, exigiendo ajuste fino del punto de contacto.",
    },
    tags: ["pared", "contrapared", "técnica", "defensa"],
    illustration: {
      caption: "Swing corto tras el rebote completo en la pared de fondo.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.8,
          path: [
            [50, 165],
            [50, 165],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.8,
          path: [
            [50, 30],
            [50, 197],
            [50, 165],
            [40, 20],
          ],
        },
      ],
    },
  },
  {
    id: "tec-remate",
    title: "Remate por tres (smash)",
    levels: ["intermediate", "advanced"],
    category: "ataque",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Definición del punto con un globo corto del rival, buscando que la bola salga por la pared lateral (\"por tres\").",
    objective: "Rematar con margen de seguridad, priorizando que la bola supere la pared antes que la potencia pura.",
    basedOn:
      "Recurso de definición estándar en el circuito profesional: rematar buscando el 3 reduce drásticamente el error comparado con buscar la línea.",
    setup: "El entrenador lanza globos cortos y altos. Jugador en posición de red.",
    steps: [
      "Identificar con tiempo que el globo es corto (dentro de la zona de remate).",
      "Colocarse detrás y debajo de la trayectoria de la bola, no debajo directamente.",
      "Golpear por encima de la cabeza con la cara de la raqueta orientada hacia la pared lateral.",
      "Buscar que la bola bote en pista y salga por la pared antes de llegar al rival.",
      "Prepararse para una posible bola de vuelta antes de dar el punto por finalizado.",
    ],
    coachingCues: [
      "Rematar por tres reduce el error frente a buscar la línea directamente.",
      "No hay que rematar con toda la potencia: control y colocación primero.",
      "El punto no termina hasta que la bola no puede volver: no relajarse tras el golpe.",
    ],
    levelAdaptations: {
      intermediate: "Globos muy cortos y cómodos, priorizando el gesto técnico sobre la dirección exacta.",
      advanced: "Globos con distintas alturas y profundidades, incluyendo la variante de dejar botar dos veces si conviene.",
    },
    tags: ["remate", "ataque", "definición", "técnica"],
    illustration: {
      caption: "Remate buscando la salida de la bola por la pared lateral.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.6,
          path: [
            [45, 130],
            [45, 130],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.6,
          path: [
            [45, 40],
            [45, 118],
            [95, 165],
          ],
        },
      ],
    },
  },
  {
    id: "tec-volea-bloqueo",
    title: "Volea de bloqueo en red",
    levels: ["beginner", "intermediate", "advanced"],
    category: "ataque",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Volea corta y firme, sin swing, para defender la posición de red ante bolas rápidas al cuerpo.",
    objective: "Sostener la red con seguridad frente a passing shots o bolas rápidas, sin necesidad de golpe potente.",
    basedOn:
      "Fundamento técnico de la volea de bloqueo profesional: cuanto más rápida llega la bola, menos swing se necesita.",
    setup: "Jugador en red. El entrenador golpea bolas rápidas y a media altura desde media pista.",
    steps: [
      "Raqueta siempre preparada delante del cuerpo, nunca abajo.",
      "Ante una bola rápida, mover solo la muñeca y el antebrazo, sin swing completo.",
      "Bloquear el impacto usando la propia velocidad de la bola.",
      "Dirigir la volea a un espacio abierto o al cuerpo del rival que ataca.",
      "Volver de inmediato a la posición de preparación.",
    ],
    coachingCues: [
      "Cuanta más velocidad trae la bola, menos swing se necesita: solo bloquear.",
      "La raqueta nunca debe bajar por debajo de la cintura en posición de espera.",
    ],
    levelAdaptations: {
      beginner: "Bolas a velocidad media y siempre dirigidas al centro del cuerpo.",
      intermediate: "Bolas más rápidas y alternando lado derecho/izquierdo.",
      advanced: "Se añade una bola de ataque real del entrenador para simular presión de partido.",
    },
    tags: ["volea", "red", "bloqueo", "técnica"],
    illustration: {
      caption: "Bloqueo de volea sin swing ante una bola rápida al cuerpo.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2,
          path: [
            [50, 90],
            [50, 90],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2,
          path: [
            [50, 150],
            [50, 92],
            [30, 30],
          ],
        },
      ],
    },
  },
  {
    id: "tec-chiquita",
    title: 'La "chiquita": dejada corta a los pies',
    levels: ["intermediate", "advanced"],
    category: "ataque",
    phase: "tecnico",
    suggestedMinutes: 15,
    summary: "Golpe corto y suave dirigido a los pies de la pareja rival que está subiendo a la red.",
    objective: "Dificultar la volea del rival forzándolo a golpear la bola por debajo de la altura de la red.",
    basedOn:
      "Recurso táctico-técnico esencial en el pádel profesional para frenar la subida a la red de la pareja contraria.",
    setup: "El entrenador simula una pareja subiendo a la red. Jugador en fondo con bola cómoda.",
    steps: [
      "Identificar el momento en que el rival está avanzando hacia la red, no ya instalado.",
      "Reducir la velocidad del swing y abrir ligeramente la cara de la raqueta.",
      "Golpear con suavidad, buscando que la bola caiga a los pies del rival en movimiento.",
      "Evitar que la bola bote más de una vez antes de llegar (ni muy corta ni muy larga).",
      "Prepararse para subir a la red si el rival responde alto.",
    ],
    coachingCues: [
      "El objetivo no es ganar el punto directo, sino incomodar la volea rival.",
      "El mejor momento es cuando el rival todavía está en movimiento, no parado.",
    ],
    levelAdaptations: {
      intermediate: "Se trabaja sin desplazamiento rival real, solo con la señal del entrenador indicando el momento.",
      advanced: "Se combina con desplazamiento real de un rival avanzando, exigiendo lectura del timing exacto.",
    },
    tags: ["chiquita", "ataque", "dejada", "red"],
    illustration: {
      caption: "Dejada corta dirigida a los pies del rival que está subiendo a la red.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.6,
          path: [
            [50, 165],
            [50, 165],
          ],
        },
        {
          id: "b1",
          role: "playerB1",
          label: "R",
          durationSec: 2.6,
          path: [
            [50, 60],
            [50, 82],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.6,
          path: [
            [50, 165],
            [50, 82],
          ],
        },
      ],
    },
  },

  // ───────────────────────── TÁCTICO ─────────────────────────
  {
    id: "tac-cruzado-2x1",
    title: "Juego cruzado 2x1 de fondo",
    levels: ["beginner", "intermediate", "advanced"],
    category: "tactica",
    phase: "tactico",
    suggestedMinutes: 15,
    summary: "Peloteo de fondo manteniendo la bola cruzada, con un jugador fijo devolviendo siempre en paralelo.",
    objective: "Interiorizar por qué el juego cruzado da más margen de error y control del punto que el paralelo.",
    basedOn:
      "Principio táctico central del pádel de fondo a nivel profesional: la diagonal cruzada da más distancia útil de pista y reduce el ángulo del rival.",
    setup: "Dos jugadores de fondo cruzados entre sí; un tercero en paralelo solo recibe, no ataca.",
    steps: [
      "Los dos jugadores de fondo cruzados pelotean manteniendo siempre la diagonal.",
      "El tercer jugador, en paralelo, sólo puede devolver hacia el mismo lugar de donde recibió.",
      "Se cuenta cuántos golpes cruzados consecutivos logra hacer la pareja principal.",
      "Si la bola se va al jugador en paralelo, se reinicia el conteo.",
      "Rotar los roles cada 2-3 minutos.",
    ],
    coachingCues: [
      "El cruzado da más metros de pista: por eso es la base del juego seguro.",
      "Jugar en paralelo sin necesidad es de las causas más comunes de error no forzado.",
    ],
    levelAdaptations: {
      beginner: "Sin conteo de errores, solo foco en mantener la diagonal el mayor tiempo posible.",
      intermediate: "Conteo de golpes consecutivos con objetivo mínimo (por ejemplo, 15 cruzados seguidos).",
      advanced: "Se añade un cuarto jugador que puede robar la bola en paralelo si detecta un cruzado corto.",
    },
    tags: ["cruzado", "táctica", "fondo", "consistencia"],
    illustration: {
      caption: "Peloteo cruzado de fondo a fondo manteniendo la diagonal.",
      actors: [
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [25, 175],
            [75, 25],
            [25, 175],
          ],
        },
      ],
      zones: [
        { points: [[55, 5], [100, 5], [100, 45], [95, 50]], label: "Zona cruzada rival" },
        { points: [[5, 155], [45, 195], [5, 195]], label: "Zona cruzada propia" },
      ],
    },
  },
  {
    id: "tac-formacion-paralela-red",
    title: "Formación en paralelo en la red",
    levels: ["intermediate", "advanced"],
    category: "tactica",
    phase: "tactico",
    suggestedMinutes: 15,
    summary: "Coordinación de la pareja en red para cubrir el mismo lado de la pista según hacia dónde se dirige el golpe propio.",
    objective: "Que ambos jugadores se muevan como un bloque, cubriendo juntos el mismo lado de la pista.",
    basedOn:
      "Formación básica de coordinación en red del pádel profesional: cuando un jugador golpea hacia un lado, la pareja se desplaza en bloque hacia ese mismo lado.",
    setup: "Pareja en red frente al entrenador, que golpea alternando lados.",
    steps: [
      "Cuando el jugador de la derecha golpea hacia la derecha, ambos se desplazan hacia la derecha.",
      "Cuando el jugador de la izquierda golpea hacia la izquierda, ambos se desplazan hacia la izquierda.",
      "Mantener siempre una distancia similar entre ambos compañeros (ni muy juntos ni muy separados).",
      "Repetir el patrón con golpes alternos del entrenador.",
      "Incorporar bolas al centro para practicar quién decide golpear (el de la derecha, salvo aviso).",
    ],
    coachingCues: [
      "La pareja se mueve como un bloque, nunca uno se queda fijo mientras el otro se desplaza.",
      "La distancia entre ambos debe mantenerse constante para no dejar huecos.",
    ],
    levelAdaptations: {
      intermediate: "Movimientos anunciados en voz alta por el entrenador antes de cada golpe.",
      advanced: "Sin aviso verbal: la pareja debe leer sola la dirección del golpe propio y desplazarse.",
    },
    tags: ["formación", "red", "coordinación", "táctica"],
    illustration: {
      caption: "La pareja se desplaza en bloque hacia el lado donde se dirige el golpe propio.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A1",
          durationSec: 3,
          path: [
            [30, 90],
            [65, 90],
            [30, 90],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "A2",
          durationSec: 3,
          path: [
            [70, 90],
            [95, 90],
            [70, 90],
          ],
        },
      ],
    },
  },
  {
    id: "tac-defensa-3-1",
    title: 'Defensa "3 contra 1" tras bajada a fondo',
    levels: ["intermediate", "advanced"],
    category: "defensa",
    phase: "tactico",
    suggestedMinutes: 15,
    summary: "Rotación de la pareja cuando uno de los dos baja a defender un globo, dejando al compañero cubriendo temporalmente.",
    objective: "Coordinar la vuelta a la formación equilibrada tras una bajada forzada de un jugador desde la red.",
    basedOn:
      "Patrón de rotación defensiva estándar en el pádel de competición: al bajar un jugador, el compañero cubre el centro hasta que la pareja se reequilibra.",
    setup: "Pareja en red. El entrenador lanza un globo forzando la bajada de uno de los dos.",
    steps: [
      "El jugador más cercano al globo baja a defenderlo, avisando en voz alta.",
      "El compañero se desplaza hacia el centro de la red para cubrir el máximo espacio posible.",
      "Tras el golpe de defensa, ambos jugadores buscan recomponer la formación pareja en fondo o subir juntos de nuevo.",
      "Se evita que ambos queden en la misma línea de forma descoordinada.",
      "Repetir alternando qué jugador baja a defender.",
    ],
    coachingCues: [
      "Avisar siempre en voz alta quién baja: evita choques y huecos.",
      "El compañero que queda en red no se queda quieto: cubre el centro.",
    ],
    levelAdaptations: {
      intermediate: "Globo lento y anunciado, con tiempo para coordinar la rotación hablando.",
      advanced: "Globo rápido y sin aviso, exigiendo coordinación silenciosa ya automatizada.",
    },
    tags: ["rotación", "defensa", "táctica", "coordinación"],
    illustration: {
      caption: "Rotación de la pareja: uno baja a defender el globo, el otro cubre el centro de la red.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A1",
          durationSec: 3.2,
          path: [
            [30, 90],
            [30, 160],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "A2",
          durationSec: 3.2,
          path: [
            [70, 90],
            [50, 88],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3.2,
          path: [
            [30, 20],
            [30, 160],
          ],
        },
      ],
    },
  },
  {
    id: "tac-ataque-centro",
    title: "Ataque dirigido al jugador central",
    levels: ["intermediate", "advanced"],
    category: "ataque",
    phase: "tactico",
    suggestedMinutes: 15,
    summary: "Dirigir los golpes de ataque a la zona central entre los dos rivales para generar dudas sobre quién golpea.",
    objective: "Explotar la indecisión rival (\"la bola del medio\") como recurso táctico de ataque repetible.",
    basedOn:
      "Principio de ataque muy usado a nivel profesional: la bola dirigida al centro reduce el ángulo de respuesta y genera dudas entre los dos rivales.",
    setup: "Dos parejas en pista completa o una pareja frente al entrenador defendiendo en red.",
    steps: [
      "Identificar una bola con ventaja (alta o cómoda) para atacar.",
      "En lugar de buscar la línea o el ángulo abierto, dirigir el golpe al centro, entre los dos rivales.",
      "Observar la reacción: quién decide golpear y con qué duda.",
      "Aprovechar la respuesta débil para definir el punto en el siguiente golpe.",
      "Repetir variando entre bandeja, víbora o remate según la altura de la bola de ataque.",
    ],
    coachingCues: [
      "La bola al centro no busca ganar el punto directo, sino generar una respuesta débil.",
      "Es especialmente efectiva contra parejas con poca comunicación.",
    ],
    levelAdaptations: {
      intermediate: "Se practica solo con bandeja, sin variar el golpe de ataque.",
      advanced: "Se exige elegir el golpe de ataque adecuado (bandeja/víbora/remate) según la altura real de la bola.",
    },
    tags: ["ataque", "centro", "táctica", "definición"],
    illustration: {
      caption: "Golpe de ataque dirigido a la zona central entre los dos rivales.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A",
          durationSec: 2.8,
          path: [
            [40, 165],
            [40, 165],
          ],
        },
        {
          id: "b1",
          role: "playerB1",
          label: "B1",
          durationSec: 2.8,
          path: [
            [30, 85],
            [30, 85],
          ],
        },
        {
          id: "b2",
          role: "playerB2",
          label: "B2",
          durationSec: 2.8,
          path: [
            [70, 85],
            [70, 85],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.8,
          path: [
            [40, 165],
            [50, 88],
          ],
        },
      ],
    },
  },
  {
    id: "tac-cobertura-remate",
    title: "Cobertura cruzada tras remate del compañero",
    levels: ["intermediate", "advanced"],
    category: "tactica",
    phase: "tactico",
    suggestedMinutes: 15,
    summary: "Movimiento del jugador que no remata para cubrir la posible bola de vuelta cruzada al lado contrario.",
    objective: "Evitar que un remate del compañero se convierta en punto perdido por dejar la pista abierta.",
    basedOn:
      "Coordinación defensiva de red usada en el circuito profesional: el jugador que no remata protege la diagonal contraria mientras su pareja define.",
    setup: "Pareja en red. Uno de los dos recibe un globo corto para rematar.",
    steps: [
      "El jugador que remata se enfoca únicamente en la ejecución del golpe.",
      "El compañero se desplaza ligeramente hacia el lado contrario y hacia atrás, cubriendo la diagonal.",
      "Ambos se mantienen atentos a una posible bola de vuelta tras el remate.",
      "Si llega la bola de vuelta, el compañero que cubrió está en posición de responder.",
      "Recomponer la formación de red tras la jugada.",
    ],
    coachingCues: [
      "Rematar no significa relajarse: el punto no ha terminado hasta que no puede volver.",
      "La cobertura cruzada es responsabilidad del jugador que no remata.",
    ],
    levelAdaptations: {
      intermediate: "Se trabaja sin bola de vuelta real, solo el movimiento de cobertura.",
      advanced: "El entrenador devuelve una bola real tras el remate para exigir la reacción completa.",
    },
    tags: ["remate", "cobertura", "táctica", "red"],
    illustration: {
      caption: "El compañero cubre la diagonal contraria mientras el otro remata.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A1",
          durationSec: 2.8,
          path: [
            [30, 90],
            [30, 90],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "A2",
          durationSec: 2.8,
          path: [
            [70, 90],
            [55, 100],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.8,
          path: [
            [30, 40],
            [30, 90],
            [85, 30],
          ],
        },
      ],
    },
  },
  {
    id: "tac-triangulo-basico",
    title: "Triángulo básico de posicionamiento en pareja",
    levels: ["beginner", "intermediate", "advanced"],
    category: "tactica",
    phase: "tactico",
    suggestedMinutes: 15,
    summary: "Ejercicio introductorio para entender las tres posiciones básicas de la pareja: ambos en fondo, ambos en red, o uno en cada línea.",
    objective: "Reconocer visualmente las formaciones válidas de pareja y evitar quedar los dos a mitad de pista.",
    basedOn:
      "Base conceptual de posicionamiento que se enseña desde los primeros niveles hasta el alto rendimiento: la pista se piensa en líneas, no en puntos sueltos.",
    setup: "Pareja en pista. El entrenador alimenta bolas variadas y pide identificar la formación correcta tras cada golpe.",
    steps: [
      "Explicar las tres formaciones válidas: los dos en fondo, los dos en red, o uno en cada línea de forma temporal.",
      "El entrenador alimenta una bola y la pareja juega el punto.",
      "Tras cada golpe, ambos deben verbalizar en qué formación están.",
      "Corregir cuando ambos quedan a mitad de pista (formación no válida).",
      "Aumentar el ritmo de juego una vez interiorizado el concepto.",
    ],
    coachingCues: [
      "Mitad de pista es la peor posición posible: siempre elegir fondo o red.",
      "Verbalizar la formación ayuda a interiorizarla más rápido.",
    ],
    levelAdaptations: {
      beginner: "Se juega a ritmo muy bajo, deteniendo el punto para corregir la formación en cada golpe si hace falta.",
      intermediate: "Ritmo de juego normal, corrigiendo solo al final de cada punto.",
      advanced: "Se añade la exigencia de subir o bajar juntos en el menor número de golpes posible.",
    },
    tags: ["formación", "posicionamiento", "táctica", "básico"],
    illustration: {
      caption: "Las tres formaciones válidas de pareja: fondo-fondo, red-red o una línea cada uno.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A1",
          durationSec: 4,
          path: [
            [35, 175],
            [35, 90],
            [35, 175],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "A2",
          durationSec: 4,
          path: [
            [65, 175],
            [65, 90],
            [65, 175],
          ],
        },
      ],
    },
  },

  // ───────────────────────── TOMA DE DECISIÓN ─────────────────────────
  {
    id: "dec-lob-o-passing",
    title: "¿Globo o passing por tres?",
    levels: ["intermediate", "advanced"],
    category: "defensa",
    phase: "decision",
    suggestedMinutes: 10,
    summary: "El jugador debe leer si el rival en red está preparado para bandeja y elegir entre globo o passing por la pared.",
    objective: "Entrenar la lectura de la postura rival para decidir el recurso defensivo con mayor probabilidad de éxito.",
    basedOn:
      "Situación de decisión constante en el juego profesional: no todos los globos son la mejor opción si el rival ya está retrasado esperando la bandeja.",
    setup: "El entrenador ocupa la red, a veces adelantado (listo para bandeja) y a veces retrasado. Jugador en fondo.",
    steps: [
      "El jugador observa la posición del entrenador antes de decidir el golpe.",
      "Si el rival está adelantado y listo para bandeja, se opta por passing por la pared (bola rápida y baja).",
      "Si el rival está retrasado o descolocado, se opta por el globo profundo.",
      "Tras el golpe, el entrenador da feedback inmediato sobre si la lectura fue correcta.",
      "Repetir alternando la posición del entrenador sin patrón fijo.",
    ],
    coachingCues: [
      "La decisión se toma antes del golpe, observando al rival, no después.",
      "No existe una opción \"siempre correcta\": depende de la lectura de cada punto.",
    ],
    levelAdaptations: {
      intermediate: "Posiciones del entrenador claramente diferenciadas y con pausa para decidir.",
      advanced: "Posiciones sutiles y tiempo de reacción reducido, simulando ritmo real de partido.",
    },
    tags: ["decisión", "globo", "passing", "lectura"],
    illustration: {
      caption: "Lectura de la posición rival para elegir entre globo profundo o passing por la pared.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3,
          path: [
            [45, 170],
            [45, 170],
          ],
        },
        {
          id: "b1",
          role: "playerB1",
          label: "R",
          durationSec: 3,
          path: [
            [45, 85],
            [45, 85],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [45, 170],
            [90, 60],
          ],
        },
      ],
    },
  },
  {
    id: "dec-subir-o-esperar",
    title: "¿Subir a la red o esperar?",
    levels: ["beginner", "intermediate", "advanced"],
    category: "transicion-fondo-red",
    phase: "decision",
    suggestedMinutes: 10,
    summary: "Tras el golpe del compañero, decidir en una fracción de segundo si conviene avanzar a la red o mantenerse en el fondo.",
    objective: "Aprender a leer la calidad del propio golpe (o del compañero) como señal para iniciar la transición a la red.",
    basedOn:
      "Decisión constante del pádel de ataque profesional: subir con una bola sin ventaja regala la red al rival.",
    setup: "Pareja en fondo. Uno golpea con distinta calidad de bola (a veces con ventaja, a veces sin ella) y ambos deciden.",
    steps: [
      "El compañero golpea una bola: puede ser ofensiva (alta al rival) o neutra/defensiva.",
      "El jugador debe decidir en el instante: si fue ofensiva, iniciar el avance; si fue neutra, mantenerse.",
      "El entrenador confirma en voz alta si la decisión fue correcta según el tipo de bola.",
      "Repetir variando aleatoriamente el tipo de golpe del compañero.",
      "Progresar a decidirlo sin confirmación verbal del entrenador.",
    ],
    coachingCues: [
      "La regla simple: bola con ventaja para mí = subo. Bola neutra o mala = espero.",
      "Subir sin ventaja dejando la red libre es de los errores tácticos más comunes.",
    ],
    levelAdaptations: {
      beginner: "Diferencia muy marcada entre bola ofensiva y neutra, con confirmación verbal constante.",
      intermediate: "Diferencia más sutil entre tipos de bola, reduciendo la ayuda verbal.",
      advanced: "Se juega el punto completo, integrando la decisión dentro del ritmo real de juego.",
    },
    tags: ["decisión", "transición", "subida", "red"],
    illustration: {
      caption: "Decisión de subir a la red solo cuando el golpe propio o del compañero genera ventaja real.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3,
          path: [
            [45, 175],
            [45, 110],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "C",
          durationSec: 3,
          path: [
            [65, 175],
            [65, 175],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [65, 175],
            [30, 20],
          ],
        },
      ],
    },
  },
  {
    id: "dec-bajar-o-mantener",
    title: "¿Bajar a defender o mantener la red?",
    levels: ["intermediate", "advanced"],
    category: "transicion-red-fondo",
    phase: "decision",
    suggestedMinutes: 10,
    summary: "Ante un globo rival, decidir si es necesario bajar a defender o si se puede resolver con bandeja/remate desde la red.",
    objective: "Evitar bajadas innecesarias que ceden la red sin motivo, reservándolas solo para globos realmente profundos.",
    basedOn:
      "Criterio táctico profesional: solo se abandona la red cuando el globo supera claramente la altura de golpeo cómodo; de lo contrario, se resuelve sin bajar.",
    setup: "Pareja en red. El entrenador lanza globos de distinta profundidad.",
    steps: [
      "El jugador evalúa en el aire si el globo es alcanzable con bandeja/remate o es demasiado profundo.",
      "Si es alcanzable, se queda y resuelve con el golpe de red correspondiente.",
      "Si es demasiado profundo, inicia la bajada con el patrón de retroceso trabajado en desplazamiento.",
      "El entrenador da feedback inmediato sobre si la lectura fue acertada.",
      "Repetir con profundidades variadas y sin patrón predecible.",
    ],
    coachingCues: [
      "Bajar sin necesidad regala la red: hay que ganarse el derecho a quedarse.",
      "La decisión se toma en el aire, apenas sale la bola de la raqueta rival.",
    ],
    levelAdaptations: {
      intermediate: "Diferencia clara entre globo corto y profundo, con tiempo de reacción amplio.",
      advanced: "Globos límite (difíciles de clasificar), exigiendo una lectura fina y rápida.",
    },
    tags: ["decisión", "transición", "globo", "red"],
    illustration: {
      caption: "Lectura del globo rival para decidir entre resolver desde la red o iniciar la bajada.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 3,
          path: [
            [50, 90],
            [50, 90],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [50, 20],
            [50, 100],
          ],
        },
      ],
    },
  },
  {
    id: "dec-red-basica",
    title: "¿Volear o dejar picar?",
    levels: ["beginner", "intermediate", "advanced"],
    category: "ataque",
    phase: "decision",
    suggestedMinutes: 10,
    summary: "Decisión básica en la red: volear directamente o dejar botar la bola cuando llega baja o muy rápida.",
    objective: "Reconocer cuándo la volea es la opción segura y cuándo es mejor esperar el bote para golpear con más control.",
    basedOn:
      "Criterio elemental de decisión en red que se trabaja desde los primeros niveles y se mantiene en el alto rendimiento adaptado a la velocidad del juego.",
    setup: "Jugador en red. El entrenador alterna bolas altas y cómodas con bolas bajas o muy rápidas.",
    steps: [
      "Si la bola llega por encima de la red y con comodidad, se volea directamente.",
      "Si la bola llega muy baja o muy rápida al cuerpo, se dejar botar antes de golpear.",
      "El jugador verbaliza su decisión (\"voleo\" o \"dejo picar\") antes del golpe.",
      "El entrenador confirma si la elección fue la más segura para esa bola.",
      "Repetir aumentando gradualmente la velocidad y variedad de las bolas.",
    ],
    coachingCues: [
      "No todo se volea: dejar picar es una decisión válida y a veces más segura.",
      "Verbalizar la decisión ayuda a hacerla consciente hasta automatizarla.",
    ],
    levelAdaptations: {
      beginner: "Diferencia muy marcada entre bola de volea clara y bola de bote claro.",
      intermediate: "Bolas más ambiguas, exigiendo una lectura más fina.",
      advanced: "Se integra dentro de un punto jugado a ritmo real.",
    },
    tags: ["decisión", "volea", "red", "básico"],
    illustration: {
      caption: "Decisión entre volear directamente o dejar botar la bola según su altura y velocidad.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.6,
          path: [
            [50, 90],
            [50, 90],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.6,
          path: [
            [50, 30],
            [50, 88],
          ],
        },
      ],
    },
  },
  {
    id: "dec-eleccion-ataque",
    title: "Elección de golpe de ataque según altura de bola",
    levels: ["advanced"],
    category: "ataque",
    phase: "decision",
    suggestedMinutes: 10,
    summary: "Ante un globo corto, decidir en tiempo real entre bandeja, víbora o remate según la altura exacta de la bola.",
    objective: "Automatizar el criterio de selección de golpe de ataque para no rematar bolas incómodas ni desperdiciar bolas fáciles con bandeja.",
    basedOn:
      "Criterio de decisión de definición usado en el circuito profesional: la altura del globo determina el golpe óptimo, no la preferencia del jugador.",
    setup: "El entrenador lanza globos de altura muy variable (bajos, medios y muy altos) sin patrón fijo.",
    steps: [
      "El jugador identifica la altura de la bola en el aire, antes de llegar a su zona de golpeo.",
      "Bola muy alta y cómoda: se opta por remate.",
      "Bola media: se opta por víbora.",
      "Bola justa por encima de la red: se opta por bandeja de control.",
      "El entrenador da feedback inmediato sobre si el golpe elegido fue el óptimo para esa altura.",
    ],
    coachingCues: [
      "El golpe lo elige la bola, no la preferencia del jugador.",
      "Forzar un remate en una bola incómoda genera más errores que puntos ganados.",
    ],
    levelAdaptations: {
      advanced: "Se incrementa el ritmo de lanzamiento hasta simular la velocidad de decisión de un punto real.",
    },
    tags: ["decisión", "ataque", "bandeja", "víbora", "remate"],
    illustration: {
      caption: "La altura del globo determina la elección entre bandeja, víbora o remate.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "J",
          durationSec: 2.6,
          path: [
            [50, 88],
            [50, 88],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 2.6,
          path: [
            [50, 25],
            [50, 88],
          ],
        },
      ],
    },
  },

  // ───────────────────────── PELOTA VIVA ─────────────────────────
  {
    id: "pv-condicionado-cruzados",
    title: "Punto condicionado: 4 cruzados antes de atacar",
    levels: ["beginner", "intermediate", "advanced"],
    category: "tactica",
    phase: "pelota-viva",
    suggestedMinutes: 10,
    summary: "Punto real donde ninguna pareja puede atacar hasta completar al menos cuatro golpes cruzados de fondo.",
    objective: "Trasladar a un punto real la paciencia táctica del juego cruzado trabajada en el bloque técnico-táctico.",
    basedOn:
      "Formato de punto condicionado habitual en sesiones de club y de alto rendimiento para forzar comportamientos tácticos concretos dentro de un punto real.",
    setup: "Dos parejas en pista completa, ambas en fondo al inicio del punto.",
    steps: [
      "Se inicia el punto con un golpe de puesta en juego (bote o mano baja).",
      "Ambas parejas deben jugar cruzado durante al menos cuatro golpes cada una antes de poder subir o atacar.",
      "Pasado ese mínimo, el punto se juega libremente hasta el final.",
      "Se anota el resultado y se repite alternando quién pone la bola en juego.",
      "Se juegan series de 6-8 puntos condicionados.",
    ],
    coachingCues: [
      "El objetivo es sentir en un punto real el valor de la paciencia cruzada.",
      "No vale \"hacer trampa\" atacando antes: reinicia el punto si ocurre.",
    ],
    levelAdaptations: {
      beginner: "Se reduce la exigencia a 2-3 golpes cruzados mínimos, priorizando que se complete el punto.",
      intermediate: "Cuatro golpes cruzados mínimos tal como está descrito.",
      advanced: "Se eleva a seis golpes cruzados mínimos y se juega con marcador real dentro del set de entrenamiento.",
    },
    tags: ["punto condicionado", "cruzado", "pelota viva", "táctica"],
    illustration: {
      caption: "Punto real con la condición de jugar cruzado antes de poder atacar.",
      actors: [
        {
          id: "ball",
          role: "ball",
          durationSec: 3.4,
          path: [
            [25, 175],
            [75, 25],
            [25, 175],
            [75, 25],
          ],
        },
      ],
    },
  },
  {
    id: "pv-punto-salida-pared",
    title: "Punto real desde salida de pared",
    levels: ["beginner", "intermediate", "advanced"],
    category: "defensa",
    phase: "pelota-viva",
    suggestedMinutes: 10,
    summary: "El punto siempre arranca con una bola que sale de la pared de fondo, integrando la lectura de bote en una situación real.",
    objective: "Comprobar si el patrón de desplazamiento y lectura de pared trabajado se sostiene bajo presión de punto real.",
    basedOn:
      "Método de puesta en juego condicionada que reproduce una de las situaciones más frecuentes en un partido real de pádel.",
    setup: "El entrenador o un jugador pone en juego la bola haciéndola rebotar primero en la pared de fondo propia.",
    steps: [
      "Se pone la bola en juego rebotándola primero contra la pared de fondo.",
      "El jugador que recibe debe leer el rebote y devolver siguiendo el patrón trabajado en el bloque de desplazamiento.",
      "A partir de esa primera bola, el punto se juega con normalidad hasta el final.",
      "Se anota el ganador del punto y se repite alternando el lado de la pared de salida.",
      "Se juegan series de 6-8 puntos.",
    ],
    coachingCues: [
      "La primera bola de pared marca el resto del punto: una mala lectura suele condenarlo.",
      "Aplicar exactamente el patrón técnico trabajado antes, sin improvisar bajo presión.",
    ],
    levelAdaptations: {
      beginner: "Puesta en juego lenta y siempre por el mismo lado hasta afianzar la lectura.",
      intermediate: "Alternando lados de salida sin patrón fijo.",
      advanced: "Se combina con distintos efectos en la puesta en juego (liftada o cortada).",
    },
    tags: ["pared", "punto condicionado", "pelota viva", "defensa"],
    illustration: {
      caption: "El punto arranca con una bola que sale de la pared de fondo antes de jugarse con normalidad.",
      actors: [
        {
          id: "ball",
          role: "ball",
          durationSec: 3,
          path: [
            [40, 30],
            [90, 178],
            [70, 165],
            [30, 30],
          ],
        },
      ],
    },
  },
  {
    id: "pv-subida-obligada",
    title: "Punto condicionado: subir tras dos golpes de fondo",
    levels: ["intermediate", "advanced"],
    category: "transicion-fondo-red",
    phase: "pelota-viva",
    suggestedMinutes: 10,
    summary: "El punto obliga a ambos integrantes de una pareja a intentar subir a la red como máximo en el tercer golpe.",
    objective: "Forzar la práctica de la transición de fondo a red dentro de un punto real, evitando quedarse cómodo en el fondo.",
    basedOn:
      "Formato de entrenamiento por condición usado para desarrollar el juego de ataque, forzando la transición que en partido libre muchos jugadores evitan por comodidad.",
    setup: "Dos parejas en pista completa. Una de ellas tiene la condición de subir; la otra juega libre.",
    steps: [
      "La pareja condicionada empieza el punto en el fondo.",
      "Debe intentar iniciar la subida a la red como máximo en su tercer golpe del punto.",
      "La pareja rival juega con total libertad, incluyendo intentar evitar esa subida con globos o passing.",
      "Se juega el punto hasta el final con normalidad tras cumplir la condición.",
      "Se rota la condición entre ambas parejas cada serie de puntos.",
    ],
    coachingCues: [
      "Subir no significa a cualquier precio: se sube en el golpe con más ventaja posible dentro del margen permitido.",
      "El objetivo es perder la comodidad de quedarse en el fondo, no forzar un error.",
    ],
    levelAdaptations: {
      intermediate: "Margen de hasta el cuarto golpe para iniciar la subida.",
      advanced: "Margen estricto de tercer golpe, con marcador real y consecuencia (por ejemplo, punto perdido si no se cumple).",
    },
    tags: ["punto condicionado", "transición", "subida", "pelota viva"],
    illustration: {
      caption: "La pareja condicionada debe iniciar la subida a la red antes del tercer golpe del punto.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A1",
          durationSec: 3.2,
          path: [
            [35, 175],
            [35, 100],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "A2",
          durationSec: 3.2,
          path: [
            [65, 175],
            [65, 100],
          ],
        },
      ],
    },
  },
  {
    id: "pv-doble-bajada",
    title: "Punto condicionado: doble bajada a defender",
    levels: ["intermediate", "advanced"],
    category: "transicion-red-fondo",
    phase: "pelota-viva",
    suggestedMinutes: 10,
    summary: "El punto obliga a la pareja en red a bajar juntos a defender ante cualquier globo profundo, sin dividir la cobertura.",
    objective: "Practicar en situación real la coordinación de la bajada conjunta trabajada en el bloque táctico.",
    basedOn:
      "Situación de presión típica en partidos de nivel competitivo: una bajada descoordinada suele costar el punto directamente.",
    setup: "Pareja en red con la condición de bajar juntos ante cualquier globo profundo. Rival en fondo, libre.",
    steps: [
      "El rival juega libremente, incluyendo globos para forzar la bajada.",
      "Ante un globo profundo, ambos jugadores de la pareja condicionada deben bajar juntos, no solo el que recibe.",
      "Se juega el resto del punto con normalidad tras la bajada.",
      "El entrenador observa si la bajada fue coordinada o si uno de los dos se quedó a mitad de pista.",
      "Se juegan series de 6-8 puntos rotando la pareja condicionada.",
    ],
    coachingCues: [
      "Bajar juntos evita dejar a uno solo defendiendo mientras el otro queda expuesto en tierra de nadie.",
      "La comunicación verbal en el momento de la bajada es tan importante como el desplazamiento en sí.",
    ],
    levelAdaptations: {
      intermediate: "Se permite parar el punto brevemente para corregir la coordinación si falla.",
      advanced: "Se juega sin interrupciones, con marcador real dentro de la serie de entrenamiento.",
    },
    tags: ["punto condicionado", "transición", "bajada", "pelota viva"],
    illustration: {
      caption: "La pareja en red debe bajar junta y coordinada ante cualquier globo profundo.",
      actors: [
        {
          id: "a1",
          role: "playerA1",
          label: "A1",
          durationSec: 3.2,
          path: [
            [35, 90],
            [35, 160],
          ],
        },
        {
          id: "a2",
          role: "playerA2",
          label: "A2",
          durationSec: 3.2,
          path: [
            [65, 90],
            [65, 160],
          ],
        },
        {
          id: "ball",
          role: "ball",
          durationSec: 3.2,
          path: [
            [50, 20],
            [50, 160],
          ],
        },
      ],
    },
  },
  {
    id: "pv-minitiebreak",
    title: "Mini tie-break con presión de marcador",
    levels: ["intermediate", "advanced"],
    category: "tactica",
    phase: "pelota-viva",
    suggestedMinutes: 10,
    summary: "Set corto (a 7 puntos) que reproduce la presión competitiva real, cerrando la sesión con juego libre de partido.",
    objective: "Integrar todo lo trabajado en la sesión (desplazamiento, técnica, táctica y decisión) en una situación de presión real de marcador.",
    basedOn:
      "Cierre habitual de sesión en el entrenamiento de competición: llevar lo trabajado a una situación con presión de resultado, no solo repetición sin consecuencias.",
    setup: "Dos parejas en pista completa. Se juega un mini set a 7 puntos con diferencia de 2.",
    steps: [
      "Se sortea quién pone la primera bola en juego.",
      "Se juega libremente, sin condiciones añadidas, hasta llegar a 7 puntos con 2 de diferencia.",
      "El entrenador observa si los patrones trabajados en la sesión (cruzados, globo defensivo, transición) aparecen bajo presión.",
      "Al finalizar, breve feedback grupal sobre qué patrones se mantuvieron y cuáles se perdieron con la presión del marcador.",
      "Opcional: repetir un segundo mini set invirtiendo las parejas.",
    ],
    coachingCues: [
      "El marcador cambia el comportamiento: es normal que bajo presión se pierdan automatismos, para eso se entrena.",
      "El feedback debe ser específico, ligado a los bloques trabajados antes en la sesión.",
    ],
    levelAdaptations: {
      intermediate: "Mini set a 7 puntos sin diferencia de 2 obligatoria, para no alargar demasiado el cierre.",
      advanced: "Mini set a 7 con diferencia de 2, incluyendo cambio de lado y rutinas reales de saque.",
    },
    tags: ["competición", "marcador", "pelota viva", "cierre de sesión"],
    illustration: {
      caption: "Cierre de sesión con juego libre de presión competitiva real.",
      actors: [
        {
          id: "ball",
          role: "ball",
          durationSec: 3.6,
          path: [
            [30, 175],
            [70, 25],
            [30, 175],
            [70, 25],
            [30, 175],
          ],
        },
      ],
    },
  },
];
