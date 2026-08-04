"use client";

import { Search, Bell, ChevronRight, Command } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/8 bg-[#0A0A0B] px-8">
      <div className="flex items-center gap-3">
        <span className="text-sm text-white/35">Workspace</span>

        <ChevronRight size={14} className="text-white/20" />

        <span className="text-sm font-medium text-white">Knowledge</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5"
        >
          <Search size={16} />
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5"
        >
          <Bell size={16} />
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5"
        >
          <Command size={16} />
        </button>
      </div>
    </header>
  );
}
