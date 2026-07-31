"use client";

import { useState } from "react";
import { Settings, LogOut, User } from "lucide-react";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
          A
        </div>

        <div className="flex-1 text-left">
          <p className="text-sm font-medium">
            Azlan Khan
          </p>
          <p className="text-xs text-white/50">
            Personal
          </p>
        </div>
      </button>

      {open && (
        <div className="absolute bottom-full left-0 mb-2 w-full rounded-xl border border-white/10 bg-[#111111] p-2 shadow-xl">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">
            <User size={16} />
            Profile
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">
            <Settings size={16} />
            Settings
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}