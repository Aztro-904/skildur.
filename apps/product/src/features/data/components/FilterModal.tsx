"use client";

import { useState } from "react";

import type { DataColumn } from "../types";

interface FilterModalProps {
  open: boolean;

  columns: DataColumn[];

  onClose: () => void;

  onApply: (
    filter: {
      columnId: string;
      operator:
        | "contains"
        | "equals"
        | "greater"
        | "less";
      value: string;
    }
  ) => void;
}

export function FilterModal({
  open,
  columns,
  onClose,
  onApply,
}: FilterModalProps) {
  const [columnId, setColumnId] =
    useState(columns[0]?.id ?? "");

  const [operator, setOperator] =
    useState<
      "contains" | "equals" | "greater" | "less"
    >("contains");

  const [value, setValue] =
    useState("");

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-[var(--black-60)]
      "
    >
      <div
        className="
          w-[420px]
          rounded-2xl
          border
          border-[var(--white-08)]
          bg-[var(--surface-strong)]
          p-6
        "
      >
        <h2 className="text-lg font-semibold text-[color:var(--foreground)]">
          Add Filter
        </h2>

        <select
          value={columnId}
          onChange={(e) =>
            setColumnId(e.target.value)
          }
          className="
            mt-5
            w-full
            rounded-xl
            bg-[var(--white-05)]
            p-3
            text-[color:var(--foreground)]
          "
        >
          {columns.map((column) => (
            <option
              key={column.id}
              value={column.id}
            >
              {column.name}
            </option>
          ))}
        </select>

        <select
          value={operator}
          onChange={(e) =>
            setOperator(
              e.target.value as typeof operator
            )
          }
          className="
            mt-3
            w-full
            rounded-xl
            bg-[var(--white-05)]
            p-3
            text-[color:var(--foreground)]
          "
        >
          <option value="contains">
            Contains
          </option>
          <option value="equals">
            Equals
          </option>
          <option value="greater">
            Greater
          </option>
          <option value="less">
            Less
          </option>
        </select>

        <input
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          placeholder="Value"
          className="
            mt-3
            w-full
            rounded-xl
            bg-[var(--white-05)]
            p-3
            text-[color:var(--foreground)]
          "
        />

        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-[color:var(--white-50)]"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onApply({
                columnId,
                operator,
                value,
              });

              onClose();
            }}
            className="
              rounded-xl
              bg-[var(--surface-blue)]
              px-4
              py-2
              text-[color:var(--foreground)]
            "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}