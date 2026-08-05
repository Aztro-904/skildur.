"use client";

import { useEffect, useState } from "react";
import { CommandMenu } from "./CommandMenu";

export function CommandProvider() {
  const [open, setOpen] = useState(false);

function close() {
  setOpen(false);
}

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!open) return null;

  return (
  <div
    className="fixed inset-0 z-50 flex justify-center pt-20 bg-[var(--black-40)] backdrop-blur-sm"
    onClick={() => setOpen(false)}
  >
    <div onClick={(e) => e.stopPropagation()}>
      <CommandMenu onClose={close} />
    </div>
  </div>
);
}