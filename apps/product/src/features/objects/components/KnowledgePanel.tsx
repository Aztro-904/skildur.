"use client";

import { knowledgeItems } from "@/features/knowledge/data";

export function KnowledgePanel({
  objectId,
}: {
  objectId: string;
}) {
  const related = knowledgeItems.filter((item) =>
    item.linkedObjects.includes(objectId)
  );

  if (!related.length) {
    return (
      <div className="text-sm text-[color:var(--white-40)]">
        No related knowledge
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-xs uppercase text-[color:var(--white-40)]">
        Knowledge
      </h3>

      {related.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-[var(--white-10)] bg-[var(--white-03)] p-3"
        >
          <p className="text-sm text-[color:var(--foreground)]">
            {item.title}
          </p>

          <p className="text-xs text-[color:var(--white-40)]">
            {item.type}
          </p>
        </div>
      ))}
    </div>
  );
}