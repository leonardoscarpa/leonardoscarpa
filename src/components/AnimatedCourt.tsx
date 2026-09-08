import type { CourtActor, IllustrationSpec } from "../types/exercise";

/**
 * Sistema de coordenadas: x 0-100 (ancho, 10 m) · y 0-200 (largo, 20 m).
 * Red en y=100. Paredes de fondo en y=0 e y=200.
 * Línea de servicio a 3 m de cada pared de fondo (reglamento FIP) → y=30 e y=170.
 */
const SERVICE_LINE_TOP = 30;
const SERVICE_LINE_BOTTOM = 170;
const NET_Y = 100;
const SIDE_GLASS_DEPTH = 40; // 4 m de cristal en cada esquina de los laterales

const ROLE_STYLE: Record<
  CourtActor["role"],
  { fill: string; stroke: string; r: number; defaultLabel: string; shape: "circle" | "diamond" }
> = {
  playerA1: { fill: "#2563eb", stroke: "#0f2b6b", r: 4.3, defaultLabel: "P", shape: "circle" },
  playerA2: { fill: "#38bdf8", stroke: "#075985", r: 4.3, defaultLabel: "P", shape: "circle" },
  playerB1: { fill: "#f97316", stroke: "#7c2d12", r: 4.3, defaultLabel: "P", shape: "circle" },
  playerB2: { fill: "#facc15", stroke: "#854d0e", r: 4.3, defaultLabel: "P", shape: "circle" },
  ball: { fill: "#e7fa6a", stroke: "#3f6212", r: 2, defaultLabel: "", shape: "circle" },
  coach: { fill: "#c084fc", stroke: "#581c87", r: 4, defaultLabel: "C", shape: "diamond" },
};

/** Trazado recto: útil para desplazamientos y golpes planos/rápidos. */
function straightPathD(points: [number, number][]) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]},${p[1]}`)
    .join(" ");
}

/**
 * Trazado en arco: usado para globos/lobs. Cada tramo se dibuja como una
 * curva cuadrática cuyo punto de control se desplaza hacia el centro de la
 * pista (x=50), para simbolizar la trayectoria elevada de la bola.
 */
function curvedPathD(points: [number, number][]) {
  if (points.length < 2) return "";
  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    const dx = x1 - x0;
    const dy = y1 - y0;
    const len = Math.hypot(dx, dy) || 1;
    const px = -dy / len;
    const py = dx / len;
    const bow = len * 0.22;
    const cA: [number, number] = [mx + px * bow, my + py * bow];
    const cB: [number, number] = [mx - px * bow, my - py * bow];
    const control = Math.abs(cA[0] - 50) <= Math.abs(cB[0] - 50) ? cA : cB;
    d += ` Q ${control[0]},${control[1]} ${x1},${y1}`;
  }
  return d;
}

function toPathD(points: [number, number][], curved?: boolean) {
  return curved ? curvedPathD(points) : straightPathD(points);
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
        viewBox="-5 -6 110 212"
        className="h-auto w-full rounded-xl"
        style={{ backgroundColor: "var(--color-court)" }}
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

        <rect x="0" y="0" width="100" height="200" rx="1.5" fill="var(--color-court)" />

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

        {/* líneas de juego */}
        <g stroke="#f5f3ea" strokeWidth="0.9" fill="none">
          <rect x="0.4" y="0.4" width="99.2" height="199.2" />
          <line x1="0" y1={SERVICE_LINE_TOP} x2="100" y2={SERVICE_LINE_TOP} />
          <line x1="0" y1={SERVICE_LINE_BOTTOM} x2="100" y2={SERVICE_LINE_BOTTOM} />
          <line x1="50" y1={SERVICE_LINE_TOP} x2="50" y2={NET_Y} />
          <line x1="50" y1={NET_Y} x2="50" y2={SERVICE_LINE_BOTTOM} />
        </g>

        {/* red */}
        <line x1="0" y1={NET_Y} x2="100" y2={NET_Y} stroke="#0b1220" strokeWidth="2.4" />
        <line
          x1="0"
          y1={NET_Y}
          x2="100"
          y2={NET_Y}
          stroke="#f5f3ea"
          strokeWidth="0.6"
          strokeDasharray="1.6 1.6"
        />

        {/* paredes de fondo: cristal (3 m) + malla (1 m superior), representadas en planta */}
        <line x1="0" y1="0.3" x2="100" y2="0.3" stroke="var(--color-glass)" strokeWidth="2.6" strokeOpacity="0.9" />
        <line x1="0" y1="0.3" x2="100" y2="0.3" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.8" />
        <line x1="0" y1="199.7" x2="100" y2="199.7" stroke="var(--color-glass)" strokeWidth="2.6" strokeOpacity="0.9" />
        <line x1="0" y1="199.7" x2="100" y2="199.7" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.8" />

        {/* paredes laterales: tramo de cristal junto a cada esquina de fondo + malla en el resto */}
        {[0, 100].map((x) => (
          <g key={`side-${x}`}>
            <line x1={x} y1="0" x2={x} y2={SIDE_GLASS_DEPTH} stroke="var(--color-glass)" strokeWidth="2.2" strokeOpacity="0.85" />
            <line x1={x} y1={200 - SIDE_GLASS_DEPTH} x2={x} y2="200" stroke="var(--color-glass)" strokeWidth="2.2" strokeOpacity="0.85" />
            <line
              x1={x}
              y1={SIDE_GLASS_DEPTH}
              x2={x}
              y2={200 - SIDE_GLASS_DEPTH}
              stroke="var(--color-mesh)"
              strokeWidth="1.4"
              strokeDasharray="1.4 1.4"
              strokeOpacity="0.85"
            />
          </g>
        ))}

        {spec.actors.map((actor) => {
          if (actor.path.length < 2) return null;
          const style = ROLE_STYLE[actor.role];
          const isBall = actor.role === "ball";
          return (
            <path
              key={`path-${actor.id}`}
              d={toPathD(actor.path, actor.curved)}
              fill="none"
              stroke={style.stroke}
              strokeWidth={isBall ? 0.55 : 0.6}
              strokeDasharray={isBall ? (actor.curved ? undefined : "0.4 1.8") : "1.3 1.3"}
              strokeLinecap="round"
              opacity={0.9}
              markerEnd="url(#court-arrow)"
              color={style.stroke}
            />
          );
        })}

        {spec.actors.map((actor) => {
          const style = ROLE_STYLE[actor.role];
          const label = actor.label ?? style.defaultLabel;
          const anchored = actor.path.length <= 1;
          const [ax, ay] = anchored ? actor.path[0] : [0, 0];
          return (
            <g key={`dot-${actor.id}`}>
              {!anchored && (
                <animateMotion
                  dur={`${actor.durationSec ?? 3.2}s`}
                  repeatCount="indefinite"
                  path={toPathD(actor.path, actor.curved)}
                  calcMode="linear"
                />
              )}
              {style.shape === "diamond" ? (
                <rect
                  x={ax - style.r * 0.82}
                  y={ay - style.r * 0.82}
                  width={style.r * 1.64}
                  height={style.r * 1.64}
                  fill={style.fill}
                  stroke={style.stroke}
                  strokeWidth="0.55"
                  transform={`rotate(45 ${ax} ${ay})`}
                />
              ) : (
                <circle r={style.r} fill={style.fill} stroke={style.stroke} strokeWidth="0.55" cx={ax} cy={ay} />
              )}
              {label && (
                <text
                  x={ax}
                  y={ay + 1.2}
                  fontSize="3.2"
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
