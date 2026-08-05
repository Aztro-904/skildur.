"use client";

import { useEffect, useState } from "react";

interface EditableCellProps {
  value: string | number | boolean;
  onChange: (
    value: string | number | boolean
  ) => void;
}

export function EditableCell({
  value,
  onChange,
}: EditableCellProps) {
  const [editing, setEditing] =
    useState(false);

  const [draft, setDraft] = useState(
    String(value)
  );

  useEffect(() => {
    setDraft(String(value));
  }, [value]);

  function save() {
    setEditing(false);
    onChange(draft);
  }

  if (editing) {
    return (
      <input
        autoFocus
        value={draft}
        onChange={(e) =>
          setDraft(e.target.value)
        }
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === "Enter") save();

          if (e.key === "Escape") {
            setDraft(String(value));
            setEditing(false);
          }
        }}
        className="
          w-full
          rounded-lg
          border
          border-indigo-500/40
          bg-[var(--white-04)]
          px-2
          py-1.5
          text-sm
          text-[color:var(--foreground)]
          outline-none
        "
      />
    );
  }

  return (
    <button
      onDoubleClick={() =>
        setEditing(true)
      }
      className="
        min-h-[28px]
        w-full
        rounded-md
        px-2
        py-1.5
        text-left
        text-sm
        text-[color:var(--white-80)]
        transition
        hover:bg-[var(--white-05)]
      "
    >
      {String(value)}
    </button>
  );
}