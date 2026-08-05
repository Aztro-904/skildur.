"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";

interface ImportModalProps {
  open: boolean;
  onClose: () => void;
  onImport: (file: File) => void;
}

export function ImportModal({
  open,
  onClose,
  onImport,
}: ImportModalProps) {
  const [file, setFile] = useState<File | null>(null);

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
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-[var(--white-08)]
          bg-[var(--surface-strong)]
          p-6
          shadow-2xl
        "
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[color:var(--foreground)]">
            Import CSV
          </h2>

          <button
            onClick={onClose}
            className="text-[color:var(--white-40)] hover:text-[color:var(--foreground)]"
          >
            <X size={18} />
          </button>
        </div>

        <label
          className="
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-[var(--white-20)]
            p-10
            transition
            hover:bg-[var(--white-03)]
          "
        >
          <Upload
            size={28}
            className="mb-3 text-[color:var(--white-40)]"
          />

          <span className="text-sm text-[color:var(--white-60)]">
            Choose CSV file
          </span>

          <input
            type="file"
            accept=".csv"
            hidden
            onChange={(e) =>
              setFile(
                e.target.files?.[0] ?? null
              )
            }
          />
        </label>

        {file && (
          <p className="mt-4 text-sm text-[color:var(--white-60)]">
            {file.name}
          </p>
        )}

        <button
          disabled={!file}
          onClick={() => {
            if (!file) return;

            onImport(file);
            onClose();
          }}
          className="
            mt-6
            w-full
            rounded-xl
            bg-[var(--white)]
            py-3
            text-sm
            font-medium
            text-[color:var(--black)]
            disabled:opacity-40
          "
        >
          Import Dataset
        </button>
      </div>
    </div>
  );
}