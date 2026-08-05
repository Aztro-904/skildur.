export function ConnectionsPanel() {
  return (
    <section className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Connections</p>
          <h2 className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Workspace relationships</h2>
        </div>
        <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">8 connected</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { title: "Projects → Documents", detail: "Strategic link active" },
          { title: "Data → Forecasts", detail: "Sync healthy" },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] p-4">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">{item.title}</p>
            <p className="mt-2 text-sm text-[color:var(--white-50)]">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
