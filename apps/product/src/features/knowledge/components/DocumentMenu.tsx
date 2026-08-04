"use client";

import { Copy, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface DocumentMenuProps {
  onRename: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export function DocumentMenu({
  onRename,
  onDuplicate,
  onDelete,
}: DocumentMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex h-9 w-9 items-center justify-center
          rounded-lg text-white/40
          transition hover:bg-white/5 hover:text-white
        "
      >
        <MoreHorizontal size={18} />
      </button>

      {open && (
        <div
          className="
            absolute right-0 top-11 z-50
            w-48 rounded-xl
            border border-white/10
            bg-[#09090B]
            p-1 shadow-xl
          "
        >
          <button
            onClick={() => {
              onRename();
              setOpen(false);
            }}
            className="
              flex w-full items-center gap-3
              rounded-lg px-3 py-2
              text-sm text-white/70
              hover:bg-white/5 hover:text-white
            "
          >
            <Pencil size={15} />
            Rename
          </button>

          <button
            onClick={() => {
              onDuplicate();
              setOpen(false);
            }}
            className="
              flex w-full items-center gap-3
              rounded-lg px-3 py-2
              text-sm text-white/70
              hover:bg-white/5 hover:text-white
            "
          >
            <Copy size={15} />
            Duplicate
          </button>

          <div className="my-1 h-px bg-white/10" />

          <button
            onClick={() => {
              onDelete();
              setOpen(false);
            }}
            className="
              flex w-full items-center gap-3
              rounded-lg px-3 py-2
              text-sm text-red-400
              hover:bg-red-500/10
            "
          >
            <Trash2 size={15} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}