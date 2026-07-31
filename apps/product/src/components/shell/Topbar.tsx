import { Search, Command } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/[0.08] px-6">
      <button
        className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-white/60 transition-all hover:bg-white/[0.08]"
      >
        <Search size={16} />
        Search

        <span className="ml-4 flex items-center gap-1 rounded border border-white/[0.08] px-2 py-0.5 text-xs">
          <Command size={12} />
          K
        </span>
      </button>

      <div className="text-sm text-white/50">
        Workspace
      </div>
    </header>
  );
}