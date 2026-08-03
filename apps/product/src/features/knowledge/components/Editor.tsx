"use client";

import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import type { KnowledgeItem } from "../types";

export function Editor({
  item,
  onChange,
  onTitleChange,
}: {
  item: KnowledgeItem;
  onChange: (content: string) => void;
  onTitleChange: (title: string) => void;
}) {
  const [title, setTitle] = useState(item.title);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing...",
      }),
    ],

    content: item.content,

    immediatelyRender: false,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    editor.commands.setContent(item.content || "");
    setTitle(item.title);
  }, [item.id]);

  if (!editor) return null;

  return (
    <div className="mx-auto max-w-4xl px-10 py-10">
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          onTitleChange(e.target.value);
        }}
        className="mb-8 w-full bg-transparent text-4xl font-semibold text-white outline-none placeholder:text-white/30"
        placeholder="Untitled"
      />

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <EditorContent
          editor={editor}
          className="min-h-[500px] text-base leading-7 text-white/80 outline-none"
        />
      </div>
    </div>
  );
}