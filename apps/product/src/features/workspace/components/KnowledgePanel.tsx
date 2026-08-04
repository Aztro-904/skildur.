export function KnowledgePanel() {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#18181B] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Knowledge</p>
          <h2 className="mt-3 text-lg font-semibold text-white">Connected documents</h2>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/40">12 items</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { title: "Strategy brief", subtitle: "Updated 12 minutes ago" },
          { title: "Inventory review", subtitle: "Linked to Product Atlas" },
          { title: "Customer insights", subtitle: "AI summary ready" },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/8 bg-[#0F0F12] p-4 transition hover:border-white/20">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-white/50">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
