export function DocumentsPanel() {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#18181B] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">Documents</p>
          <h2 className="mt-3 text-lg font-semibold text-white">Latest notes</h2>
        </div>
        <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60 transition hover:bg-white/[0.08]">
          New
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {[
          { title: "Launch planning", status: "Draft" },
          { title: "Meeting notes", status: "Saved" },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/8 bg-[#0F0F12] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/40">{item.status}</span>
            </div>
            <p className="mt-2 text-sm text-white/50">Smart document object with links and AI context.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
