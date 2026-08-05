export function DataPanel() {
  return (
    <section className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--white-40)]">Data</p>
          <h2 className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Intelligent datasets</h2>
        </div>
        <span className="rounded-full bg-[var(--white-05)] px-3 py-1 text-xs text-[color:var(--white-40)]">4 sources</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { label: "Inventory", value: "1,248 items" },
          { label: "Sales forecast", value: "+12% trend" },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-[var(--border-faint)] bg-[var(--surface-card-strong)] p-4">
            <p className="text-sm text-[color:var(--white-50)]">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
