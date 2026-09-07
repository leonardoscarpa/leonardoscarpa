import { useState } from "react";
import { Link } from "react-router-dom";
import {
  generateSession,
  regenerateBlock,
  SESSION_TOTAL_MINUTES,
  type TrainingSession,
} from "../lib/sessionGenerator";
import { AnimatedCourt } from "../components/AnimatedCourt";
import { CategoryBadge, LevelBadge, PhaseBadge } from "../components/Badges";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  LEVELS,
  LEVEL_LABEL,
  PHASE_DESCRIPTION,
  type Category,
  type Level,
} from "../types/exercise";

export function SessionGenerator() {
  const [level, setLevel] = useState<Level>("intermediate");
  const [focus, setFocus] = useState<Category | "none">("none");
  const [session, setSession] = useState<TrainingSession | null>(null);

  function handleGenerate() {
    setSession(generateSession(level, focus === "none" ? undefined : focus));
  }

  function handleRegenerateBlock(phase: TrainingSession["blocks"][number]["phase"]) {
    if (!session) return;
    setSession(regenerateBlock(session, phase));
  }

  return (
    <div>
      <div className="mb-8 print:hidden">
        <h1 className="text-3xl font-bold text-ink-900">Generador de sesión de 60 minutos</h1>
        <p className="mt-1 max-w-2xl text-ink-500">
          Elegí el nivel del grupo y, si querés, un área de juego a reforzar. La sesión
          combina desplazamiento, técnica, táctica, toma de decisión y pelota viva.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-ink-900/10 bg-white p-5 print:hidden">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
          Nivel de los jugadores
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevel(lvl)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                level === lvl
                  ? "border-court bg-court text-white"
                  : "border-ink-900/15 bg-white text-ink-700 hover:border-court/50"
              }`}
            >
              {LEVEL_LABEL[lvl]}
            </button>
          ))}
        </div>

        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
          Área a reforzar (opcional)
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFocus("none")}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
              focus === "none"
                ? "border-court bg-court text-white"
                : "border-ink-900/15 bg-white text-ink-700 hover:border-court/50"
            }`}
          >
            Sesión equilibrada
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFocus(cat)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                focus === cat
                  ? "border-court bg-court text-white"
                  : "border-ink-900/15 bg-white text-ink-700 hover:border-court/50"
              }`}
            >
              {CATEGORY_LABEL[cat]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          className="w-full rounded-xl bg-court px-5 py-3 text-base font-semibold text-white transition hover:bg-court-dark sm:w-auto"
        >
          {session ? "Generar otra sesión" : `Generar sesión de ${SESSION_TOTAL_MINUTES} minutos`}
        </button>
      </div>

      {session && (
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:mb-4">
            <div>
              <h2 className="text-xl font-bold text-ink-900">
                Sesión — {LEVEL_LABEL[session.level]}
                {session.focus ? ` · foco en ${CATEGORY_LABEL[session.focus]}` : ""}
              </h2>
              <p className="text-sm text-ink-500">
                {session.totalMinutes} minutos totales · {session.blocks.length} bloques
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-xl border border-ink-900/15 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-court/50 print:hidden"
            >
              Imprimir / exportar PDF
            </button>
          </div>

          <ol className="space-y-4">
            {session.blocks.map((block, i) => (
              <li
                key={block.phase}
                className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white print:break-inside-avoid"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto]">
                  <div className="flex items-center gap-3 border-b border-ink-900/10 bg-paper px-5 py-3 sm:w-16 sm:flex-col sm:justify-center sm:border-b-0 sm:border-r">
                    <span className="text-2xl font-bold text-ink-900/30">{i + 1}</span>
                    <span className="text-xs font-semibold text-ink-500">
                      {block.minutes} min
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                      <PhaseBadge phase={block.phase} />
                      <CategoryBadge category={block.exercise.category} />
                      <LevelBadge level={session.level} />
                    </div>
                    <p className="mb-1 text-xs text-ink-500">{PHASE_DESCRIPTION[block.phase]}</p>
                    <Link
                      to={`/biblioteca/${block.exercise.id}`}
                      className="text-lg font-semibold text-ink-900 hover:text-court"
                    >
                      {block.exercise.title}
                    </Link>
                    <p className="mt-1 text-sm text-ink-700">{block.exercise.summary}</p>
                    <button
                      type="button"
                      onClick={() => handleRegenerateBlock(block.phase)}
                      className="mt-3 text-sm font-medium text-court hover:underline print:hidden"
                    >
                      ↻ Cambiar este ejercicio
                    </button>
                  </div>

                  <div className="w-full border-t border-ink-900/10 p-3 sm:w-40 sm:border-l sm:border-t-0">
                    <AnimatedCourt spec={block.exercise.illustration} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
