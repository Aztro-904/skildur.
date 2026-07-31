import type { SkildurObject } from "../types";
import { ObjectCard } from "./ObjectCard";

interface ObjectListProps {
  objects: SkildurObject[];
}

export function ObjectList({ objects }: ObjectListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {objects.map((object) => (
        <ObjectCard
          key={object.id}
          object={object}
        />
      ))}
    </div>
  );
}