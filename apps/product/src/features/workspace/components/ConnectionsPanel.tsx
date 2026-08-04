export function ConnectionsPanel() {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#18181B] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Connections</p>
          <h2 className="mt-3 text-lg font-semibold text-white">Workspace relationships</h2>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/40">8 connected</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { title: "Projects → Documents", detail: "Strategic link active" },
          { title: "Data → Forecasts", detail: "Sync healthy" },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/8 bg-[#0F0F12] p-4">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-white/50">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
