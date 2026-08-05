"use client";

import type { ReactNode } from "react";

import { Sidebar } from "@/components/shell/Sidebar";
import { Topbar } from "@/components/shell/Topbar";
import { WorkspaceSwitcher } from "@/components/shell/WorkspaceSwitcher";
import { UserMenu } from "@/components/shell/UserMenu";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <div
      className="
        flex
        h-screen
        overflow-hidden

        bg-[var(--background)]
        text-[color:var(--foreground)]
      "
    >
      {/* Sidebar */}

      <aside
        className="
          flex
          w-[280px]
          shrink-0
          flex-col

          border-r
          border-[color:var(--border)]

          bg-[var(--surface)]

          shadow-lg

          px-5
          py-5
        "
      >
        <WorkspaceSwitcher />

        <div
          className="
            mt-6
            flex-1
            overflow-y-auto
          "
        >
          <Sidebar />
        </div>

        <div className="mt-5">
          <UserMenu />
        </div>
      </aside>

      {/* Main */}

      <main
        className="
          flex
          min-w-0
          flex-1
          flex-col

          bg-[var(--background)]
        "
      >
        <Topbar />

        <div
          className="
            relative
            flex-1
            overflow-y-auto
          "
        >
          {/* Ambient lighting */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              opacity-70

              bg-[radial-gradient(circle_at_top,var(--accent-soft),transparent_45%)]
            "
          />

          {/* Secondary glow */}

          <div
            className="
              pointer-events-none
              absolute

              right-[-120px]
              top-[-120px]

              h-[380px]
              w-[380px]

              rounded-full

              bg-[var(--accent)]

              opacity-[0.04]

              blur-3xl
            "
          />

          <div
            className="
              relative

              min-h-full

              px-8
              py-8
            "
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}