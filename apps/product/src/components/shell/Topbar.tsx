"use client";

import {
  Bell,
  Command,
  Search,
} from "lucide-react";

export function Topbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-40

        flex
        h-20
        items-center
        justify-between

        border-b
        border-[color:var(--border)]

        bg-[var(--surface)]

        px-8
      "
    >
      {/* Left */}

      <div className="flex flex-col">

        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.18em]

            text-[color:var(--text-muted)]
          "
        >
          Workspace
        </span>

        <h1
          className="
            mt-1

            text-2xl
            font-semibold
            tracking-tight

            text-[color:var(--foreground)]
          "
        >
          Overview
        </h1>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <button
          className="
            flex
            h-11
            w-[360px]
            items-center
            gap-3

            rounded-2xl

            border
            border-[color:var(--border)]

            bg-[var(--surface-elevated)]

            px-4

            text-sm

            text-[color:var(--text-muted)]

            hover:bg-[var(--surface-hover)]
          "
        >
          <Search size={17} />

          <span className="flex-1 text-left">
            Search...
          </span>

          <div
            className="
              flex
              items-center
              gap-1

              rounded-lg

              border
              border-[color:var(--border)]

              px-2
              py-1

              text-[10px]
            "
          >
            <Command size={10} />
            K
          </div>

        </button>

        {/* Notifications */}

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-2xl

            border
            border-[color:var(--border)]

            bg-[var(--surface-elevated)]

            text-[color:var(--text-secondary)]

            hover:bg-[var(--surface-hover)]
            hover:text-[color:var(--foreground)]
          "
        >
          <Bell size={18} />
        </button>

        {/* Profile */}

        <button
          className="
            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-[color:var(--border)]

            bg-[var(--surface-elevated)]

            px-3
            py-2.5

            hover:bg-[var(--surface-hover)]
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-xl

              bg-[var(--accent-soft)]

              text-sm
              font-semibold

              text-[color:var(--accent)]
            "
          >
            A
          </div>

          <div className="text-left">

            <p
              className="
                text-sm
                font-medium

                text-[color:var(--foreground)]
              "
            >
              Azlan
            </p>

            <p
              className="
                text-xs

                text-[color:var(--text-muted)]
              "
            >
              Personal Workspace
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}