export function DocumentsPanel() {
  return (
    <section className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Documents</p>
          <h2 className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Latest notes</h2>
        </div>
        <button className="rounded-2xl border border-[var(--white-10)] bg-[var(--white-05)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[color:var(--white-60)] transition hover:bg-[var(--white-08)]">
          New
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { title: "Launch planning", status: "Draft" },
          { title: "Meeting notes", status: "Saved" },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{item.title}</p>
              <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">{item.status}</span>
            </div>
            <p className="mt-2 text-sm text-[color:var(--white-50)]">Smart document object with links and AI context.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
