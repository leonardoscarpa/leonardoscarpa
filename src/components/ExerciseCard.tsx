import { Link } from "react-router-dom";
import type { Exercise } from "../types/exercise";
import { CategoryBadge, LevelBadge, PhaseBadge } from "./Badges";
import { AnimatedCourt } from "./AnimatedCourt";

export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Link
      to={`/biblioteca/${exercise.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="p-3 pb-0">
        <AnimatedCourt spec={exercise.illustration} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          <CategoryBadge category={exercise.category} />
          <PhaseBadge phase={exercise.phase} />
        </div>
        <h3 className="text-lg font-semibold text-ink-900 group-hover:text-court">
          {exercise.title}
        </h3>
        <p className="line-clamp-2 text-sm text-ink-500">{exercise.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-1">
            {exercise.levels.map((lvl) => (
              <LevelBadge key={lvl} level={lvl} />
            ))}
          </div>
          <span className="whitespace-nowrap text-xs font-medium text-ink-500">
            {exercise.suggestedMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
