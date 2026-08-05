"use client";

import { useMemo, useState } from "react";
import {
  Database,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

import type { Dataset } from "../types";

interface DataSidebarProps {
  datasets: Dataset[];
  selectedId: string;

  onSelect: (id: string) => void;
  onCreate: () => void;

  onRename: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DataSidebar({
  datasets,
  selectedId,

  onSelect,
  onCreate,

  onRename,
  onDuplicate,
  onDelete,
}: DataSidebarProps) {
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      datasets.filter((dataset) =>
        dataset.name
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [datasets, query]
  );

  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div className="border-b border-[var(--white-08)] p-5">

        <h1 className="text-lg font-semibold tracking-tight">
          Data
        </h1>

        <p className="mt-1 text-sm text-[color:var(--white-45)]">
          Tables and datasets
        </p>

        <button
          onClick={onCreate}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[var(--white)]
            px-4
            py-2.5
            text-sm
            font-medium
            text-[color:var(--black)]
            transition
            hover:bg-[var(--white-90)]
          "
        >
          <Plus size={16} />
          New Dataset
        </button>

      </div>

      {/* Search */}

      <div className="border-b border-[var(--white-08)] p-4">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-[var(--white-08)]
            bg-[var(--white-03)]
            px-3
            py-2.5
          "
        >
          <Search
            size={15}
            className="text-[color:var(--white-35)]"
          />

          <input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search datasets..."
            className="
              w-full
              bg-transparent
              text-sm
              outline-none
              placeholder:text-[color:var(--white-35)]
            "
          />
        </div>

      </div>

      {/* List */}

      <div className="flex-1 overflow-y-auto p-3">

        <p
          className="
            mb-3
            px-2
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-[color:var(--white-30)]
          "
        >
          Datasets
        </p>

        <div className="space-y-1">

          {filtered.map((dataset) => {

            const active =
              dataset.id === selectedId;

            return (
              <div
                key={dataset.id}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  py-2.5
                  transition
                  ${
                    active
                      ? "bg-[var(--white-08)]"
                      : "hover:bg-[var(--white-04)]"
                  }
                `}
              >

                <button
                  onClick={() =>
                    onSelect(dataset.id)
                  }
                  className="
                    flex
                    min-w-0
                    flex-1
                    items-center
                    gap-3
                    text-left
                  "
                >
                  <Database
                    size={16}
                    className="text-[color:var(--white-55)]"
                  />

                  <span className="truncate text-sm">
                    {dataset.name}
                  </span>
                </button>

                <div className="relative">

                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === dataset.id
                          ? null
                          : dataset.id
                      )
                    }
                    className="
                      rounded-lg
                      p-1.5
                      opacity-0
                      transition
                      hover:bg-[var(--white-08)]
                      group-hover:opacity-100
                    "
                  >
                    <MoreHorizontal size={16} />
                  </button>

                  {openMenu === dataset.id && (

                    <div
                      className="
                        absolute
                        right-0
                        top-9
                        z-50
                        w-40
                        overflow-hidden
                        rounded-xl
                        border
                        border-[var(--white-08)]
                        bg-[var(--surface-strong)]
                        shadow-xl
                      "
                    >

                      <button
                        onClick={() => {
                          onRename(dataset.id);
                          setOpenMenu(null);
                        }}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--white-05)]"
                      >
                        Rename
                      </button>

                      <button
                        onClick={() => {
                          onDuplicate(dataset.id);
                          setOpenMenu(null);
                        }}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--white-05)]"
                      >
                        Duplicate
                      </button>

                      <button
                        onClick={() => {
                          onDelete(dataset.id);
                          setOpenMenu(null);
                        }}
                        className="w-full px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>

                    </div>

                  )}

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </div>
  );
}