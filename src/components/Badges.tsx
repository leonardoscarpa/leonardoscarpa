import {
  CATEGORY_LABEL,
  LEVEL_LABEL,
  PHASE_LABEL,
  type Category,
  type Level,
  type Phase,
} from "../types/exercise";

const LEVEL_STYLE: Record<Level, string> = {
  beginner: "bg-emerald-100 text-emerald-800 border-emerald-300",
  intermediate: "bg-amber-100 text-amber-800 border-amber-300",
  advanced: "bg-rose-100 text-rose-800 border-rose-300",
};

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${LEVEL_STYLE[level]}`}
    >
      {LEVEL_LABEL[level]}
    </span>
  );
}

const CATEGORY_STYLE: Record<Category, string> = {
  defensa: "bg-sky-100 text-sky-800 border-sky-300",
  ataque: "bg-orange-100 text-orange-800 border-orange-300",
  tactica: "bg-violet-100 text-violet-800 border-violet-300",
  "transicion-fondo-red": "bg-teal-100 text-teal-800 border-teal-300",
  "transicion-red-fondo": "bg-cyan-100 text-cyan-800 border-cyan-300",
};

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${CATEGORY_STYLE[category]}`}
    >
      {CATEGORY_LABEL[category]}
    </span>
  );
}

export function PhaseBadge({ phase }: { phase: Phase }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink-500/30 bg-ink-900/5 px-2.5 py-0.5 text-xs font-semibold text-ink-700">
      {PHASE_LABEL[phase]}
    </span>
  );
}
