"use client";

import { useState } from "react";

export function CreateObject() {
  const [name, setName] = useState("");

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Describe your work..."
        className="h-16 w-full bg-transparent px-5 text-lg outline-none placeholder:text-[var(--muted)]"
      />
    </div>
  );
}