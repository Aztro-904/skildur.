import type { SkildurObject } from "../types";

interface ObjectCardProps {
  object: SkildurObject;
}

const typeLabels = {
  project: "Project",
  document: "Document",
  person: "Person",
  data: "Data",
  knowledge: "Knowledge",
};

export function ObjectCard({ object }: ObjectCardProps) {
  return (
    <div className="rounded-xl border border-[var(--white-08)] bg-[var(--white-04)] p-4 transition hover:bg-[var(--white-08)]">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-medium">
          {object.title}
        </h3>

        <span className="rounded-md bg-[var(--white-08)] px-2 py-1 text-xs text-[color:var(--white-50)]">
          {typeLabels[object.type]}
        </span>
      </div>

      {object.description && (
        <p className="text-sm text-[color:var(--white-50)]">
          {object.description}
        </p>
      )}

      <p className="mt-3 text-xs text-[color:var(--white-40)]">
        {object.connections.length} connections
      </p>
    </div>
  );
}