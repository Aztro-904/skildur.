"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const workspaces = [
  "Skildur",
  "Personal",
  "Acme Inc.",
];

export function WorkspaceSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Skildur");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
      >
        <div className="text-left">
          <p className="text-sm font-medium">{current}</p>
          <p className="text-xs text-white/50">
            Workspace
          </p>
        </div>

        <ChevronDown
          size={16}
          className="text-white/50"
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-xl border border-white/10 bg-[#111111] p-2 shadow-xl">
          {workspaces.map((workspace) => (
            <button
              key={workspace}
              onClick={() => {
                setCurrent(workspace);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
            >
              {workspace}

              {current === workspace && (
                <Check size={14} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}