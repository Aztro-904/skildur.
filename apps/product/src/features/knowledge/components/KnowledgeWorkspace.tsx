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
  context,
}: KnowledgeWorkspaceProps) {

  return (
    <div
      className="
        flex

        h-full
        w-full

        overflow-hidden

        bg-[var(--surface-slate)]

        text-[color:var(--foreground)]
      "
    >

      {/* Document navigation */}

      <aside
        className="
          flex

          w-[280px]

          shrink-0

          border-r
          border-[var(--white-06)]

          bg-[var(--surface-deeper)]

          backdrop-blur-xl
        "
      >

        {sidebar}

      </aside>





      {/* Editor */}

      <main
        className="
          relative

          min-w-0

          flex-1

          overflow-y-auto

          bg-[var(--surface-slate)]
        "
      >

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            top-0

            h-64

            bg-[radial-gradient(circle_at_top,var(--accent-soft),transparent_70%)]
          "
        />


        <div
          className="
            relative

            mx-auto

            min-h-full

            w-full

            max-w-[1100px]
          "
        >

          {children}

        </div>


      </main>





      {/* Context */}

      {context && (

        <aside
          className="
            hidden

            w-[320px]

            shrink-0

            border-l
            border-[var(--white-06)]

            bg-[var(--surface-deeper)]

            xl:block
          "
        >

          {context}

        </aside>

      )}


    </div>
  );
}