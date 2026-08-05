"use client";

import type { DataColumn } from "../types";

interface SortBarProps {
  columns: DataColumn[];

  onSort: (
    columnId: string,
    direction: "asc" | "desc"
  ) => void;
}

export function SortBar({
  columns,
  onSort,
}: SortBarProps) {
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
      <select
        onChange={(e) => {
          if (!e.target.value) return;

          onSort(
            e.target.value,
            "asc"
          );
        }}
        className="
          rounded-xl
          border
          border-[var(--white-08)]
          bg-[var(--white-03)]
          px-4
          py-2
          text-sm
          text-[color:var(--foreground)]
        "
      >
        <option value="">
          Sort by...
        </option>

        {columns.map((column) => (
          <option
            key={column.id}
            value={column.id}
          >
            {column.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          const select =
            document.querySelector(
              "select"
            ) as HTMLSelectElement;

          if (!select?.value) return;

          onSort(
            select.value,
            "desc"
          );
        }}
        className="
          rounded-xl
          border
          border-[var(--white-08)]
          px-4
          py-2
          text-sm
          text-[color:var(--white-70)]
        "
      >
        Desc
      </button>
    </div>
  );
}