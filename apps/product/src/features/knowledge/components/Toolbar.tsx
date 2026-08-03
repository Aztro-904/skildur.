"use client";

import type { Editor } from "@tiptap/react";

export function Toolbar({
  editor,
}: {
  editor: Editor | null;
}) {
  if (!editor) return null;

  return (
    <div className="mb-6 flex gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
      <button
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
        className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10"
      >
        Bold
      </button>

      <button
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10"
      >
        H1
      </button>

      <button
        onClick={() =>
          editor.chain().focus().toggleBulletList().run()
        }
        className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10"
      >
        List
      </button>
    </div>
  );
}