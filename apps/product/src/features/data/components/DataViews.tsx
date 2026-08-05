"use client";

import type { DataView } from "../types/View";

interface DataViewsProps {
  views: DataView[];

  selectedView?: string;

  onSelect: (
    id: string
  ) => void;

  onCreate: () => void;

  onDelete: (
    id: string
  ) => void;
}

export function DataViews({
  views,
  selectedView,
  onSelect,
  onCreate,
  onDelete,
}: DataViewsProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        px-12
        py-3
      "
    >
      <select
        value={selectedView ?? ""}
        onChange={(e) =>
          onSelect(e.target.value)
        }
        className="
          rounded-xl
          border
          border-[var(--white-08)]
          bg-[var(--white-04)]
          px-3
          py-2
          text-sm
          text-[color:var(--foreground)]
          outline-none
        "
      >
        <option value="">
          Default View
        </option>

        {views.map((view) => (
          <option
            key={view.id}
            value={view.id}
          >
            {view.name}
          </option>
        ))}
      </select>

      <button
        onClick={onCreate}
        className="
          rounded-xl
          bg-[var(--surface-blue)]
          px-4
          py-2
          text-sm
          font-medium
          text-[color:var(--foreground)]
          transition
          hover:brightness-110
        "
      >
        + Save View
      </button>

      {selectedView && (
        <button
          onClick={() =>
            onDelete(selectedView)
          }
          className="
            rounded-xl
            border
            border-[var(--white-08)]
            px-4
            py-2
            text-sm
            text-[color:var(--white-60)]
            transition
            hover:bg-[var(--white-05)]
            hover:text-[color:var(--foreground)]
          "
        >
          Delete
        </button>
      )}
    </div>
  );
}