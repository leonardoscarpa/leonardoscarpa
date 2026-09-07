import { Link, Navigate, useParams } from "react-router-dom";
import { EXERCISES } from "../data/exercises";
import { AnimatedCourt } from "../components/AnimatedCourt";
import { CategoryBadge, LevelBadge, PhaseBadge } from "../components/Badges";
import { LEVEL_LABEL } from "../types/exercise";

export function ExerciseDetail() {
  const { id } = useParams();
  const exercise = EXERCISES.find((e) => e.id === id);

  if (!exercise) return <Navigate to="/biblioteca" replace />;

  return (
    <div>
      <Link
        to="/biblioteca"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-court"
      >
        ← Volver a la biblioteca
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-3">
            <AnimatedCourt spec={exercise.illustration} />
          </div>

          <div className="mt-4 rounded-2xl border border-dashed border-ink-900/20 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-ink-700">Video explicativo</p>
            <p className="mt-1 text-sm text-ink-500">
              Espacio reservado para el video del ejercicio. Conectá tu propio video
              (grabación propia o enlace) para completar la ficha.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            <CategoryBadge category={exercise.category} />
            <PhaseBadge phase={exercise.phase} />
            {exercise.levels.map((lvl) => (
              <LevelBadge key={lvl} level={lvl} />
            ))}
          </div>

          <h1 className="text-3xl font-bold text-ink-900">{exercise.title}</h1>
          <p className="mt-2 text-ink-700">{exercise.summary}</p>

          <dl className="mt-5 grid grid-cols-2 gap-4 rounded-2xl border border-ink-900/10 bg-white p-4 text-sm">
            <div>
              <dt className="font-semibold text-ink-500">Objetivo</dt>
              <dd className="mt-0.5 text-ink-900">{exercise.objective}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-500">Duración sugerida</dt>
              <dd className="mt-0.5 text-ink-900">{exercise.suggestedMinutes} minutos</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-semibold text-ink-500">Basado en</dt>
              <dd className="mt-0.5 text-ink-900">{exercise.basedOn}</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-semibold text-ink-500">Montaje</dt>
              <dd className="mt-0.5 text-ink-900">{exercise.setup}</dd>
            </div>
          </dl>

          <section className="mt-6">
            <h2 className="text-lg font-semibold text-ink-900">Cómo se ejecuta</h2>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-ink-700">
              {exercise.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold text-ink-900">Claves para el entrenador</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink-700">
              {exercise.coachingCues.map((cue, i) => (
                <li key={i}>{cue}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold text-ink-900">Adaptación por nivel</h2>
            <div className="mt-2 space-y-2">
              {exercise.levels.map((lvl) => (
                <div
                  key={lvl}
                  className="rounded-xl border border-ink-900/10 bg-white p-3"
                >
                  <div className="mb-1">
                    <LevelBadge level={lvl} />
                  </div>
                  <p className="text-sm text-ink-700">
                    {exercise.levelAdaptations[lvl] ??
                      `Adaptación estándar para nivel ${LEVEL_LABEL[lvl].toLowerCase()}.`}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {exercise.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-ink-900/5 px-2.5 py-1 text-xs text-ink-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
