"use client";

import type { DataColumn } from "../types";

interface FilterBarProps {
  columns: DataColumn[];

  onAddFilter: () => void;
}

export function FilterBar({
  columns,
  onAddFilter,
}: FilterBarProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        px-12
        pb-4
      "
    >
      <button
        onClick={onAddFilter}
        className="
          rounded-xl
          border
          border-[var(--white-08)]
          bg-[var(--white-03)]
          px-4
          py-2
          text-sm
          text-[color:var(--white-70)]
          transition
          hover:bg-[var(--white-06)]
          hover:text-[color:var(--foreground)]
        "
      >
        + Filter
      </button>

      <span
        className="
          text-xs
          text-[color:var(--white-35)]
        "
      >
        {columns.length} columns available
      </span>
    </div>
  );
}