"use client";

import type { ReactNode } from "react";

interface KnowledgeWorkspaceProps {
  sidebar: ReactNode;
  children: ReactNode;
  context: ReactNode;
}

export function KnowledgeWorkspace({
  sidebar,
  children,
}: KnowledgeWorkspaceProps) {
  return (
    <div
      className="
        flex
        h-full
        w-full
        overflow-hidden
        bg-[#0A0A0B]
        text-white
      "
    >

      <aside
        className="
          w-72
          shrink-0
          border-r
          border-white/[0.08]
        "
      >
        {sidebar}
      </aside>


      <main
        className="
          flex-1
          min-w-0
          overflow-y-auto
        "
      >
        {children}
      </main>

    </div>
  );
}