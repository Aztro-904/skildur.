export function Sidebar() {
  return (
    <aside className="w-64 border-r border-[var(--border)] bg-[var(--surface)] px-4 py-5">
      <div className="mb-8 px-3 text-lg font-semibold">
        Skildur
      </div>

      <nav className="space-y-1 text-sm text-[var(--text-secondary)]">
        <div className="rounded-lg px-3 py-2 hover:bg-[var(--surface-hover)]">
          Home
        </div>

        <div className="rounded-lg px-3 py-2 hover:bg-[var(--surface-hover)]">
          Workspace
        </div>

        <div className="rounded-lg px-3 py-2 hover:bg-[var(--surface-hover)]">
          Search
        </div>
      </nav>
    </aside>
  );
}