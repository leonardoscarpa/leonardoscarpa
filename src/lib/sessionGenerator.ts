import { EXERCISES } from "../data/exercises";
import type { Category, Exercise, Level, Phase } from "../types/exercise";
import { PHASES } from "../types/exercise";

/** Minutos asignados a cada bloque para completar una sesión de 60 minutos. */
export const PHASE_MINUTES: Record<Phase, number> = {
  desplazamiento: 10,
  tecnico: 15,
  tactico: 15,
  decision: 10,
  "pelota-viva": 10,
};

export const SESSION_TOTAL_MINUTES = PHASES.reduce(
  (sum, phase) => sum + PHASE_MINUTES[phase],
  0,
);

export interface SessionBlock {
  phase: Phase;
  minutes: number;
  exercise: Exercise;
}

export interface TrainingSession {
  level: Level;
  focus?: Category;
  totalMinutes: number;
  blocks: SessionBlock[];
}

function pickExercise(
  phase: Phase,
  level: Level,
  focus: Category | undefined,
  exclude: Set<string>,
): Exercise | undefined {
  const pool = EXERCISES.filter(
    (e) => e.phase === phase && e.levels.includes(level) && !exclude.has(e.id),
  );
  if (pool.length === 0) return undefined;

  const focused = focus ? pool.filter((e) => e.category === focus) : [];
  const finalPool = focused.length > 0 ? focused : pool;
  return finalPool[Math.floor(Math.random() * finalPool.length)];
}

/** Genera una sesión de 60 minutos combinando los cinco bloques pedagógicos. */
export function generateSession(
  level: Level,
  focus?: Category,
): TrainingSession {
  const exclude = new Set<string>();
  const blocks: SessionBlock[] = [];

  for (const phase of PHASES) {
    const exercise = pickExercise(phase, level, focus, exclude);
    if (!exercise) continue;
    exclude.add(exercise.id);
    blocks.push({ phase, minutes: PHASE_MINUTES[phase], exercise });
  }

  return {
    level,
    focus,
    totalMinutes: blocks.reduce((sum, b) => sum + b.minutes, 0),
    blocks,
  };
}

/** Sustituye el ejercicio de un único bloque, manteniendo el resto de la sesión. */
export function regenerateBlock(
  session: TrainingSession,
  phase: Phase,
): TrainingSession {
  const currentBlock = session.blocks.find((b) => b.phase === phase);
  const exclude = new Set(
    session.blocks
      .filter((b) => b.phase !== phase)
      .map((b) => b.exercise.id),
  );
  if (currentBlock) exclude.add(currentBlock.exercise.id);

  const replacement = pickExercise(phase, session.level, session.focus, exclude);
  if (!replacement) return session;

  return {
    ...session,
    blocks: session.blocks.map((b) =>
      b.phase === phase ? { ...b, exercise: replacement } : b,
    ),
  };
}
