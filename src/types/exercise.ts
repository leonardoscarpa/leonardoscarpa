export type Level = "beginner" | "intermediate" | "advanced";

export const LEVELS: Level[] = ["beginner", "intermediate", "advanced"];

export const LEVEL_LABEL: Record<Level, string> = {
  beginner: "Iniciación",
  intermediate: "Intermedio",
  advanced: "Avanzado",
};

/** Área de juego que trabaja el ejercicio. */
export type Category =
  | "defensa"
  | "ataque"
  | "tactica"
  | "transicion-fondo-red"
  | "transicion-red-fondo";

export const CATEGORIES: Category[] = [
  "defensa",
  "ataque",
  "tactica",
  "transicion-fondo-red",
  "transicion-red-fondo",
];

export const CATEGORY_LABEL: Record<Category, string> = {
  defensa: "Defensa",
  ataque: "Ataque",
  tactica: "Táctica",
  "transicion-fondo-red": "Transición fondo → red",
  "transicion-red-fondo": "Transición red → fondo",
};

/** Bloque pedagógico dentro de una sesión de entrenamiento. */
export type Phase =
  | "desplazamiento"
  | "tecnico"
  | "tactico"
  | "decision"
  | "pelota-viva";

export const PHASES: Phase[] = [
  "desplazamiento",
  "tecnico",
  "tactico",
  "decision",
  "pelota-viva",
];

export const PHASE_LABEL: Record<Phase, string> = {
  desplazamiento: "Desplazamiento",
  tecnico: "Técnico",
  tactico: "Táctico",
  decision: "Toma de decisión",
  "pelota-viva": "Pelota viva",
};

export const PHASE_DESCRIPTION: Record<Phase, string> = {
  desplazamiento:
    "Trabajo de pies y recorridos para llegar en buena posición a cualquier bola: cruzados, laterales, hacia atrás y salidas de pared.",
  tecnico:
    "Repetición guiada del gesto técnico (golpe, empuñadura, contacto) con alimentación controlada, sin presión de decisión.",
  tactico:
    "Ejercicios de pareja/situación con objetivo posicional claro: dónde colocarse y hacia dónde dirigir la bola según la jugada.",
  decision:
    "El jugador debe leer una variable (trayectoria, posición del rival, señal del entrenador) y elegir entre 2-3 opciones en tiempo real.",
  "pelota-viva":
    "Puntos o minipuntos con reglas condicionadas que reproducen una situación real de partido de principio a fin.",
};

export interface CourtActor {
  id: string;
  /** Color/rol del actor en el diagrama. */
  role: "playerA1" | "playerA2" | "playerB1" | "playerB2" | "ball" | "coach";
  /** Puntos del recorrido en coordenadas 0-100 (x) por 0-200 (y, red en 100). */
  path: [number, number][];
  label?: string;
  /** Duración del ciclo de animación en segundos. */
  durationSec?: number;
  /** Dibuja el recorrido como una curva (arco) en vez de tramos rectos — para globos/lobs. */
  curved?: boolean;
}

export interface CourtZone {
  points: [number, number][];
  label?: string;
}

export interface IllustrationSpec {
  actors: CourtActor[];
  zones?: CourtZone[];
  caption?: string;
}

export interface Exercise {
  id: string;
  title: string;
  levels: Level[];
  category: Category;
  phase: Phase;
  /** Duración sugerida al consultarlo suelto en la biblioteca (min). */
  suggestedMinutes: number;
  summary: string;
  objective: string;
  /** Referencia al patrón real de juego profesional en el que se basa. */
  basedOn: string;
  setup: string;
  steps: string[];
  coachingCues: string[];
  levelAdaptations: Partial<Record<Level, string>>;
  videoUrl?: string;
  illustration: IllustrationSpec;
  tags: string[];
}
