 "use client";

import {
  FileText,
  Plus,
  Sparkles,
} from "lucide-react";


interface EmptyStateProps {
  onCreate: () => void;
}


export function EmptyState({
  onCreate,
}: EmptyStateProps) {

  return (
    <div
      className="
        flex

        h-full

        items-center

        justify-center

        px-8
      "
    >

      <div
        className="
          relative

          max-w-md

          text-center
        "
      >

        {/* Glow */}

        <div
          className="
            pointer-events-none

            absolute

            -inset-10

            -z-10

            rounded-full

            bg-[var(--accent-soft)]

            blur-3xl
          "
        />



        {/* Icon */}

        <div
          className="
            mx-auto

            flex

            h-16

            w-16

            items-center

            justify-center

            rounded-2xl

            border

            border-[var(--white-08)]

            bg-[var(--white-03)]

            text-[color:var(--accent-text)]
          "
        >

          <FileText
            size={28}
          />

        </div>



        <div
          className="
            mt-8

            flex

            items-center

            justify-center

            gap-2
          "
        >

          <Sparkles
            size={15}

            className="
              text-[color:var(--accent-text)]
            "
          />


          <span
            className="
              text-xs

              uppercase

              tracking-[0.18em]

              text-[color:var(--white-35)]
            "
          >
            Knowledge Layer
          </span>

        </div>



        <h2
          className="
            mt-4

            text-3xl

            font-semibold

            tracking-tight

            text-[color:var(--foreground)]
          "
        >
          Build your
          <span
            className="
              text-[color:var(--accent-text)]
            "
          >
            {" "}intelligence
          </span>
        </h2>



        <p
          className="
            mt-4

            text-sm

            leading-6

            text-[color:var(--white-45)]
          "
        >
          Capture ideas, documentation,
          decisions, and connected knowledge.
          Link every document to the objects
          and workflows that matter.
        </p>



        <button
          onClick={onCreate}

          className="
            mt-8

            inline-flex

            items-center

            gap-2

            rounded-xl

            bg-[var(--accent)]

            px-5

            py-2.5

            text-sm

            font-medium

            text-[color:var(--foreground)]

            transition

            hover:bg-[var(--accent-hover)]
          "
        >

          <Plus
            size={16}
          />

          New Document

        </button>


      </div>


    </div>
  );
}