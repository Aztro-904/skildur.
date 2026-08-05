import type { SkildurObject } from "../types";
import { ObjectReference } from "./ObjectReference";

interface RelatedObjectsProps {
  object: SkildurObject;
  allObjects: SkildurObject[];
}

export function RelatedObjects({
  object,
  allObjects,
}: RelatedObjectsProps) {
  const related = allObjects.filter((item) =>
    object.connections.includes(item.id)
  );

  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium text-[color:var(--white-80)]">
        Related Objects
      </h2>

      <div className="space-y-2">
        {related.map((item) => (
          <ObjectReference
            key={item.id}
            object={object}
            referencedObject={item}
          />
        ))}
      </div>
    </section>
  );
}