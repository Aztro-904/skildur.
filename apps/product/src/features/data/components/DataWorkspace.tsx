"use client";

import type { ReactNode } from "react";

interface DataWorkspaceProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function DataWorkspace({
  sidebar,
  children,
}: DataWorkspaceProps) {
  return (
    <div
      className="
        flex
        h-full
        w-full
        overflow-hidden
        bg-[var(--surface-deepest)]
        text-[color:var(--foreground)]
      "
    >
      {/* Sidebar */}

      <aside
        className="
          w-72
          shrink-0
          border-r
          border-[var(--white-08)]
          bg-[var(--surface-deepest)]
        "
      >
        {sidebar}
      </aside>

      {/* Main */}

      <main
        className="
          min-w-0
          flex-1
          overflow-y-auto
        "
      >
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}