export function CreateWork() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-lg font-medium">
        What are you working on?
      </h2>

      <p className="mt-2 text-sm text-[var(--muted)]">
        Create your first connected workspace item.
      </p>

      <button className="mt-6 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white">
        Create work
      </button>
    </div>
  );
}