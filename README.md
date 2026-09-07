# PadelCoachLab

Aplicación web para diseñar sesiones de entrenamiento de pádel: una biblioteca de
ejercicios online, filtrable por nivel y área de juego, y un generador que arma
sesiones de 60 minutos combinando desplazamiento, técnica, táctica, toma de decisión
y pelota viva.

## Funcionalidades

- **Biblioteca de ejercicios**: ~28 ejercicios reales de pádel (defensa, ataque,
  táctica, transición fondo→red y red→fondo), filtrables por nivel (iniciación,
  intermedio, avanzado), área de juego y tipo de trabajo.
- **Ficha de ejercicio**: objetivo, referencia al patrón de juego profesional en el
  que se basa, montaje, pasos de ejecución, claves para el entrenador, adaptación por
  nivel y una **ilustración animada** (diagrama de pista SVG animado) que muestra
  desplazamientos y trayectorias de bola. Incluye un espacio reservado para conectar
  video explicativo propio.
- **Generador de sesión de 60 minutos**: elegís nivel y, opcionalmente, un área a
  reforzar, y arma automáticamente 5 bloques (10+15+15+10+10 min) combinando todos los
  tipos de trabajo. Cada bloque se puede regenerar individualmente, y la sesión es
  imprimible/exportable a PDF.

## Stack

React + TypeScript + Vite + Tailwind CSS v4 + React Router. Sin backend: los datos de
ejercicios viven en `src/data/exercises.ts`, lo que permite ampliarlos fácilmente o
conectarlos más adelante a una fuente online real.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
```

## Estructura

- `src/types/exercise.ts` — modelo de datos (niveles, categorías, fases).
- `src/data/exercises.ts` — biblioteca de ejercicios.
- `src/lib/sessionGenerator.ts` — lógica de generación de sesiones de 60 minutos.
- `src/components/AnimatedCourt.tsx` — diagrama animado de pista reutilizable.
- `src/pages/` — Home, Biblioteca, Detalle de ejercicio, Generador de sesión.
