import { objects } from "@/features/objects/data";

export function LinkedObjects({
  objectIds,
}: {
  objectIds: string[];
}) {
  const linked = objects.filter((object) =>
    objectIds.includes(object.id)
  );

  if (!linked.length) {
    return (
      <div className="text-sm text-white/40">
        No linked objects
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-xs uppercase text-white/40">
        Linked Objects
      </h3>

      {linked.map((object) => (
        <div
          key={object.id}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
        >
          <p className="text-sm text-white">
            {object.title}
          </p>

          <p className="text-xs text-white/40">
            {object.type}
          </p>
        </div>
      ))}
    </div>
  );
}