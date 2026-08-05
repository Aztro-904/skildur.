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
        flex-wrap
        h-20
        items-center
        justify-between
        gap-4

        border-b
        border-[color:var(--border)]

        bg-[var(--surface)]

        px-4
        sm:px-6
        lg:px-8
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

      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}

        <button
          className="
            flex
            min-w-0
            flex-1
            max-w-[360px]
            h-11
            items-center
            gap-3

            rounded-2xl

            border
            border-[var(--accent-soft)]

            bg-[var(--surface-strong)]

            px-4

            text-sm

            text-[color:var(--white-45)]

            transition
            hover:border-[var(--accent-muted)]
            hover:bg-[var(--surface-elevated)]
          "
        >
          <Search size={17} />

          <span className="flex-1 min-w-0 text-left">
            Search...
          </span>

          <div
            className="
              flex
              items-center
              gap-1

              rounded-lg

              border
              border-[var(--accent-soft)]

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
            border-[var(--accent-soft)]

            bg-[var(--surface-strong)]

            text-[color:var(--accent)]

            transition
            hover:bg-[var(--surface-elevated)]
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
            border-[var(--accent-soft)]

            bg-[var(--surface-strong)]

            px-3
            py-2.5

            hover:bg-[var(--surface-elevated)]
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
              Alex
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