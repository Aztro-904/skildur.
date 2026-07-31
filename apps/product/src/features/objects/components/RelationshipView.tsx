import type { SkildurObject } from "../types";

interface RelationshipViewProps {
  object: SkildurObject;
  allObjects: SkildurObject[];
}

export function RelationshipView({
  object,
  allObjects,
}: RelationshipViewProps) {
  const related = allObjects.filter((item) =>
    object.connections.includes(item.id)
  );

  return (
    <section className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6">
      <h2 className="mb-6 text-sm font-medium text-white/80">
        Relationship Map
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="rounded-xl border border-white/[0.12] bg-white/[0.08] px-5 py-4">
          <p className="text-sm font-medium">
            {object.title}
          </p>
          <p className="text-xs text-white/40">
            {object.type}
          </p>
        </div>

        {related.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-4"
          >
            <p className="text-sm font-medium">
              {item.title}
            </p>

            <p className="text-xs text-white/40">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}