export function ActivityPanel() {
  return (
    <section className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Activity</p>
          <h2 className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Recent workspace events</h2>
        </div>
        <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">5 updates</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { event: "Document updated", detail: "Strategy brief by Sarah" },
          { event: "Dataset refreshed", detail: "Inventory feed synced" },
        ].map((item) => (
          <div key={item.event} className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] p-4">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">{item.event}</p>
            <p className="mt-2 text-sm text-[color:var(--white-50)]">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
