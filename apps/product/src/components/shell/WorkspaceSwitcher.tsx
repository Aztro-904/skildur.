"use client";

import {
  ChevronDown,
  Building2,
} from "lucide-react";


export function WorkspaceSwitcher() {

  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-between

        rounded-xl

        border
        border-[var(--white-08)]

        bg-[var(--white-03)]

        px-3
        py-2.5

        transition

        hover:bg-[var(--white-06)]
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-lg

            bg-[var(--accent-soft)]

            text-[color:var(--accent-text)]
          "
        >

          <Building2
            size={15}
            strokeWidth={1.8}
          />

        </div>



        <div
          className="
            text-left
          "
        >

          <p
            className="
              text-sm
              font-medium
              text-[color:var(--foreground)]
            "
          >
            Skildur
          </p>


          <p
            className="
              text-[11px]
              text-[color:var(--white-35)]
            "
          >
            Personal Workspace
          </p>

        </div>

      </div>



      <ChevronDown
        size={15}
        className="
          text-[color:var(--white-40)]
        "
      />

    </button>
  );
}