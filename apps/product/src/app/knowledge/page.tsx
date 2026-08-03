"use client";

import { useEffect, useState } from "react";
import { knowledgeItems as initialItems } from "@/features/knowledge/data";
import { Editor } from "@/features/knowledge/components/Editor";
import type { KnowledgeItem } from "@/features/knowledge/types";

const STORAGE_KEY = "skildur-knowledge";

export default function KnowledgePage() {
  const [items, setItems] = useState<KnowledgeItem[]>(initialItems);
  const [selected, setSelected] = useState<KnowledgeItem>(
    initialItems[0]
  );

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      setItems(parsed);
      setSelected(parsed[0]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  function createDocument() {
    const doc: KnowledgeItem = {
      id: crypto.randomUUID(),
      title: "Untitled",
      type: "document",
      content: "",
      linkedObjects: [],
    };

    const updated = [...items, doc];

    setItems(updated);
    setSelected(doc);
  }

  return (
    <div className="flex h-full">
      <aside className="w-72 border-r border-white/10 p-5">
        <button
          onClick={createDocument}
          className="mb-5 w-full rounded-lg bg-white px-3 py-2 text-sm text-black"
        >
          New Document
        </button>

        <div className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                selected.id === item.id
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1">
        <Editor
  item={selected}
  onChange={(content) => {
    setItems((current) =>
      current.map((doc) =>
        doc.id === selected.id
          ? { ...doc, content }
          : doc
      )
    );
  }}
  onTitleChange={(title) => {
    setItems((current) =>
      current.map((doc) =>
        doc.id === selected.id
          ? { ...doc, title }
          : doc
      )
    );
  }}
/>
      </main>
    </div>
  );
}