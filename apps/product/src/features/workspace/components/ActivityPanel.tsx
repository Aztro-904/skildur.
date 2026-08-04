export function ActivityPanel() {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#18181B] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Activity</p>
          <h2 className="mt-3 text-lg font-semibold text-white">Recent workspace events</h2>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/40">5 updates</span>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { event: "Document updated", detail: "Strategy brief by Sarah" },
          { event: "Dataset refreshed", detail: "Inventory feed synced" },
        ].map((item) => (
          <div key={item.event} className="rounded-3xl border border-white/8 bg-[#0F0F12] p-4">
            <p className="text-sm font-semibold text-white">{item.event}</p>
            <p className="mt-2 text-sm text-white/50">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
