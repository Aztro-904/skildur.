export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[var(--border)] px-6">
      <span className="text-sm text-[var(--text-secondary)]">
        Workspace
      </span>

      <button
        className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)]"
      >
        <span>Search</span>
        <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5">
          ⌘ K
        </kbd>
      </button>
    </header>
  );
}