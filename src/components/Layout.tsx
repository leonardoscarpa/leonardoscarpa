import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/biblioteca", label: "Biblioteca" },
  { to: "/generador", label: "Generador de sesión" },
];

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-ink-900/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-court text-lg font-bold text-white">
              P
            </span>
            <span className="text-lg font-bold tracking-tight text-ink-900">
              PadelCoach<span className="text-court">Lab</span>
            </span>
          </NavLink>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
                    isActive
                      ? "bg-court text-white"
                      : "text-ink-700 hover:bg-ink-900/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>
      <footer className="border-t border-ink-900/10 py-6 text-center text-sm text-ink-500">
        PadelCoachLab — biblioteca de ejercicios y generador de sesiones de 60 minutos.
      </footer>
    </div>
  );
}
