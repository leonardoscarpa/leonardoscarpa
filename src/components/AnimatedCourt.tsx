import type { CourtActor, IllustrationSpec } from "../types/exercise";

const ROLE_STYLE: Record<
  CourtActor["role"],
  { fill: string; stroke: string; r: number; defaultLabel: string }
> = {
  playerA1: { fill: "#2563eb", stroke: "#1e3a8a", r: 3.4, defaultLabel: "A1" },
  playerA2: { fill: "#38bdf8", stroke: "#0369a1", r: 3.4, defaultLabel: "A2" },
  playerB1: { fill: "#f97316", stroke: "#9a3412", r: 3.4, defaultLabel: "B1" },
  playerB2: { fill: "#facc15", stroke: "#a16207", r: 3.4, defaultLabel: "B2" },
  ball: { fill: "#e7fa6a", stroke: "#3f6212", r: 1.7, defaultLabel: "" },
  coach: { fill: "#a855f7", stroke: "#581c87", r: 3.2, defaultLabel: "E" },
};

function toPathD(points: [number, number][]) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]},${p[1]}`)
    .join(" ");
}

export function AnimatedCourt({
  spec,
  className,
}: {
  spec: IllustrationSpec;
  className?: string;
}) {
  return (
    <figure className={className}>
      <svg
        viewBox="-6 -8 112 216"
        className="h-auto w-full rounded-xl bg-court"
        role="img"
        aria-label={spec.caption ?? "Diagrama animado de pista de pádel"}
      >
        <defs>
          <marker
            id="court-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="4.5"
            markerHeight="4.5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        <rect x="0" y="0" width="100" height="200" rx="2" fill="#1c6b4f" />

        {spec.zones?.map((z, i) => (
          <polygon
            key={i}
            points={z.points.map((p) => p.join(",")).join(" ")}
            fill="#facc15"
            fillOpacity="0.25"
            stroke="#facc15"
            strokeOpacity="0.75"
            strokeWidth="0.6"
            strokeDasharray="1.2 1"
          />
        ))}

        <g stroke="#f5f3ea" strokeWidth="1" fill="none">
          <rect x="0.5" y="0.5" width="99" height="199" />
          <line x1="0" y1="70" x2="100" y2="70" />
          <line x1="0" y1="130" x2="100" y2="130" />
          <line x1="50" y1="70" x2="50" y2="130" />
        </g>

        <line x1="0" y1="100" x2="100" y2="100" stroke="#0b1220" strokeWidth="2.4" />
        <line
          x1="0"
          y1="100"
          x2="100"
          y2="100"
          stroke="#f5f3ea"
          strokeWidth="0.6"
          strokeDasharray="1.6 1.6"
        />

        {spec.actors.map((actor) => {
          if (actor.path.length < 2) return null;
          const style = ROLE_STYLE[actor.role];
          return (
            <path
              key={`path-${actor.id}`}
              d={toPathD(actor.path)}
              fill="none"
              stroke={style.stroke}
              strokeWidth={actor.role === "ball" ? 0.5 : 0.55}
              strokeDasharray={actor.role === "ball" ? "0.4 1.8" : "1.3 1.3"}
              strokeLinecap="round"
              opacity={0.85}
              markerEnd="url(#court-arrow)"
              color={style.stroke}
            />
          );
        })}

        {spec.actors.map((actor) => {
          const style = ROLE_STYLE[actor.role];
          const label = actor.label ?? style.defaultLabel;
          return (
            <g key={`dot-${actor.id}`}>
              {actor.path.length > 1 && (
                <animateMotion
                  dur={`${actor.durationSec ?? 3.2}s`}
                  repeatCount="indefinite"
                  path={toPathD(actor.path)}
                  calcMode="linear"
                />
              )}
              <circle
                r={style.r}
                fill={style.fill}
                stroke={style.stroke}
                strokeWidth="0.5"
                cx={actor.path.length > 1 ? 0 : actor.path[0][0]}
                cy={actor.path.length > 1 ? 0 : actor.path[0][1]}
              />
              {label && (
                <text
                  x={actor.path.length > 1 ? 0 : actor.path[0][0]}
                  y={(actor.path.length > 1 ? 0 : actor.path[0][1]) + 1.1}
                  fontSize="2.8"
                  textAnchor="middle"
                  fill="#fff"
                  fontWeight="700"
                  pointerEvents="none"
                >
                  {label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {spec.caption && (
        <figcaption className="mt-2 text-center text-sm text-ink-500">
          {spec.caption}
        </figcaption>
      )}
    </figure>
  );
}
