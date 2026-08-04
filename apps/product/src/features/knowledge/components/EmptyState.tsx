"use client";

import { FileText, Plus } from "lucide-react";

interface EmptyStateProps {
  onCreate: () => void;
}

export function EmptyState({
  onCreate,
}: EmptyStateProps) {
  return (
    <div className="flex h-full items-center justify-center px-8">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03]">
          <FileText
            size={28}
            className="text-white/50"
          />
        </div>

        <h2 className="mt-8 text-2xl font-semibold tracking-tight text-white">
          Welcome to Knowledge
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/45">
          Capture ideas, documentation, meeting notes and
          decisions. Connect every document to the objects
          that matter.
        </p>

        <button
          onClick={onCreate}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-white
            px-4
            py-2.5
            text-sm
            font-medium
            text-black
            transition
            hover:bg-white/90
          "
        >
          <Plus size={16} />
          New Document
        </button>
      </div>
    </div>
  );
}