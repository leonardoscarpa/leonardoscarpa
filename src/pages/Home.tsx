import { Link } from "react-router-dom";
import { EXERCISES } from "../data/exercises";
import { AnimatedCourt } from "../components/AnimatedCourt";
import { CATEGORIES, CATEGORY_LABEL, PHASES, PHASE_LABEL } from "../types/exercise";

const FEATURE_EXERCISES = ["tec-bandeja", "dec-subir-o-esperar", "pv-minitiebreak"];

export function Home() {
  return (
    <div>
      <section className="grid grid-cols-1 items-center gap-8 py-6 lg:grid-cols-2 lg:py-12">
        <div>
          <span className="inline-block rounded-full bg-court/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-court">
            Biblioteca online de pádel
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
            Sesiones de entrenamiento de 60 minutos, listas en un clic
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Filtrá por nivel — iniciación, intermedio o avanzado — y generá una sesión
            completa combinando desplazamiento, técnica, táctica, toma de decisión y
            pelota viva, con ilustraciones animadas que explican cada ejercicio paso a
            paso.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/generador"
              className="rounded-xl bg-court px-5 py-3 text-base font-semibold text-white transition hover:bg-court-dark"
            >
              Generar una sesión
            </Link>
            <Link
              to="/biblioteca"
              className="rounded-xl border border-ink-900/15 bg-white px-5 py-3 text-base font-semibold text-ink-700 transition hover:border-court/50"
            >
              Explorar la biblioteca
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs">
          <AnimatedCourt spec={EXERCISES[0].illustration} />
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold text-ink-900">Ejercicios basados en casos reales</h2>
        <p className="mt-1 max-w-2xl text-ink-500">
          Cada ficha explica el patrón de juego profesional en el que se basa el
          ejercicio y cómo se adapta a cada nivel de aprendizaje.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {FEATURE_EXERCISES.map((id) => {
            const ex = EXERCISES.find((e) => e.id === id);
            if (!ex) return null;
            return (
              <Link
                key={ex.id}
                to={`/biblioteca/${ex.id}`}
                className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <AnimatedCourt spec={ex.illustration} />
                <h3 className="mt-3 px-1 font-semibold text-ink-900 group-hover:text-court">
                  {ex.title}
                </h3>
                <p className="px-1 pb-1 text-sm text-ink-500">{ex.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold text-ink-900">Cinco bloques, una sesión completa</h2>
        <p className="mt-1 max-w-2xl text-ink-500">
          El generador arma cada sesión de 60 minutos combinando estos cinco tipos de
          trabajo, en este orden.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PHASES.map((phase, i) => (
            <div
              key={phase}
              className="rounded-2xl border border-ink-900/10 bg-white p-4"
            >
              <span className="text-xs font-semibold text-court">Bloque {i + 1}</span>
              <h3 className="mt-1 font-semibold text-ink-900">{PHASE_LABEL[phase]}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold text-ink-900">Todas las áreas de juego</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to={`/biblioteca?categoria=${cat}`}
              className="rounded-full border border-ink-900/15 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-court/50"
            >
              {CATEGORY_LABEL[cat]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
