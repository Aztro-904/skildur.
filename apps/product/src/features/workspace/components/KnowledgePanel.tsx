export function KnowledgePanel() {
  return (
    <section className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Knowledge</p>
          <h2 className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Connected documents</h2>
        </div>
        <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">12 items</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { title: "Strategy brief", subtitle: "Updated 12 minutes ago" },
          { title: "Inventory review", subtitle: "Linked to Product Atlas" },
          { title: "Customer insights", subtitle: "AI summary ready" },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] p-4 transition hover:border-[var(--white-20)]">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">{item.title}</p>
            <p className="mt-2 text-sm text-[color:var(--white-50)]">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
