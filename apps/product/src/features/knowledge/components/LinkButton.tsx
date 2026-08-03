"use client";

import { useState } from "react";
import { objects } from "@/features/objects/data";

export function LinkObjectButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white hover:bg-white/10"
      >
        + Link Object
      </button>

      {open && (
        <div className="absolute mt-2 w-64 rounded-xl border border-white/10 bg-[#09090B] p-2 shadow-xl">
          {objects.map((object) => (
            <button
              key={object.id}
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-white hover:bg-white/10"
            >
              <p>{object.title}</p>
              <p className="text-xs text-white/40">
                {object.type}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}