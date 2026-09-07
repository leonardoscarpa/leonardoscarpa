import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EXERCISES } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  LEVELS,
  LEVEL_LABEL,
  PHASES,
  PHASE_LABEL,
  type Category,
  type Level,
  type Phase,
} from "../types/exercise";

function FilterPill<T extends string>({
  value,
  label,
  active,
  onClick,
}: {
  value: T;
  label: string;
  active: boolean;
  onClick: (value: T) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
        active
          ? "border-court bg-court text-white"
          : "border-ink-900/15 bg-white text-ink-700 hover:border-court/50"
      }`}
    >
      {label}
    </button>
  );
}

export function Library() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("categoria") as Category | null;
  const initialCategory: Category | "all" =
    categoryFromUrl && CATEGORIES.includes(categoryFromUrl) ? categoryFromUrl : "all";

  const [level, setLevel] = useState<Level | "all">("all");
  const [category, setCategory] = useState<Category | "all">(initialCategory);
  const [phase, setPhase] = useState<Phase | "all">("all");
  const [search, setSearch] = useState("");

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    return EXERCISES.filter((e) => {
      if (level !== "all" && !e.levels.includes(level)) return false;
      if (category !== "all" && e.category !== category) return false;
      if (phase !== "all" && e.phase !== phase) return false;
      if (
        q &&
        !e.title.toLowerCase().includes(q) &&
        !e.tags.some((t) => t.toLowerCase().includes(q)) &&
        !e.summary.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [level, category, phase, search]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink-900">Biblioteca de ejercicios</h1>
        <p className="mt-1 max-w-2xl text-ink-500">
          Consulta online de ejercicios de pádel basados en patrones reales de juego,
          filtrables por nivel, área de juego y tipo de trabajo dentro de la sesión.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-ink-900/10 bg-white p-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre, etiqueta o descripción…"
          className="w-full rounded-xl border border-ink-900/15 px-4 py-2 text-sm outline-none focus:border-court"
        />

        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Nivel
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterPill value="all" label="Todos" active={level === "all"} onClick={setLevel} />
            {LEVELS.map((lvl) => (
              <FilterPill
                key={lvl}
                value={lvl}
                label={LEVEL_LABEL[lvl]}
                active={level === lvl}
                onClick={setLevel}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Área de juego
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              value="all"
              label="Todas"
              active={category === "all"}
              onClick={setCategory}
            />
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat}
                value={cat}
                label={CATEGORY_LABEL[cat]}
                active={category === cat}
                onClick={setCategory}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Tipo de trabajo
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterPill value="all" label="Todos" active={phase === "all"} onClick={setPhase} />
            {PHASES.map((ph) => (
              <FilterPill
                key={ph}
                value={ph}
                label={PHASE_LABEL[ph]}
                active={phase === ph}
                onClick={setPhase}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-ink-500">
        {results.length} ejercicio{results.length === 1 ? "" : "s"} encontrado
        {results.length === 1 ? "" : "s"}
      </p>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink-900/20 p-10 text-center text-ink-500">
          No hay ejercicios que coincidan con estos filtros. Probá quitando alguno.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  );
}
