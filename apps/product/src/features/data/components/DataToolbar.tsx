"use client";

import {
  Search,
  Filter,
  SlidersHorizontal,
  Upload,
  Plus,
} from "lucide-react";


interface DataToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;

  onImport?: () => void;
  onAddRow?: () => void;
  onFilter?: () => void;
}


export function DataToolbar({
  query,
  onQueryChange,
  onImport,
  onAddRow,
  onFilter,
}: DataToolbarProps) {

  return (
    <div
      className="
        flex

        flex-col

        gap-3

        border-b

        border-[var(--white-06)]

        px-8

        py-4

        lg:flex-row

        lg:items-center

        lg:justify-between
      "
    >

      {/* Search */}

      <div
        className="
          flex

          h-10

          flex-1

          max-w-md

          items-center

          gap-3

          rounded-xl

          border

          border-[var(--white-08)]

          bg-[var(--white-03)]

          px-3

          text-[color:var(--white-40)]
        "
      >

        <Search
          size={16}
        />


        <input
          value={query}

          onChange={(e) =>
            onQueryChange(e.target.value)
          }

          placeholder="Search rows..."

          className="
            w-full

            bg-transparent

            text-sm

            text-[color:var(--foreground)]

            outline-none

            placeholder:text-[color:var(--white-30)]
          "
        />


      </div>



      {/* Actions */}

      <div
        className="
          flex

          items-center

          gap-2
        "
      >

        <button
          onClick={onFilter}

          className="
            flex

            items-center

            gap-2

            rounded-xl

            border

            border-[var(--white-08)]

            bg-[var(--white-03)]

            px-3

            py-2

            text-sm

            text-[color:var(--white-60)]

            hover:bg-[var(--white-06)]

            hover:text-[color:var(--foreground)]
          "
        >

          <Filter
            size={15}
          />

          Filter

        </button>



        <button
          className="
            flex

            items-center

            gap-2

            rounded-xl

            border

            border-[var(--white-08)]

            bg-[var(--white-03)]

            px-3

            py-2

            text-sm

            text-[color:var(--white-60)]

            hover:bg-[var(--white-06)]

            hover:text-[color:var(--foreground)]
          "
        >

          <SlidersHorizontal
            size={15}
          />

          View

        </button>



        <button
          onClick={onImport}

          className="
            hidden

            items-center

            gap-2

            rounded-xl

            border

            border-[var(--white-08)]

            bg-[var(--white-03)]

            px-3

            py-2

            text-sm

            text-[color:var(--white-60)]

            hover:bg-[var(--white-06)]

            hover:text-[color:var(--foreground)]

            md:flex
          "
        >

          <Upload
            size={15}
          />

          Import

        </button>



        <button
          onClick={onAddRow}

          className="
            flex

            items-center

            gap-2

            rounded-xl

            bg-[var(--accent)]

            px-3

            py-2

            text-sm

            font-medium

            text-[color:var(--foreground)]

            hover:bg-[var(--accent-hover)]
          "
        >

          <Plus
            size={15}
          />

          Row

        </button>


      </div>


    </div>
  );
}