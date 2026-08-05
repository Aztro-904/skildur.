import type { SkildurObject } from "../types";

interface ObjectReferenceProps {
  object: SkildurObject;
  referencedObject: SkildurObject;
}

export function ObjectReference({
  referencedObject,
}: ObjectReferenceProps) {
  return (
    <button className="flex items-center gap-3 rounded-lg border border-[var(--white-08)] bg-[var(--white-04)] px-3 py-2 text-left transition hover:bg-[var(--white-08)]">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--white-08)] text-xs">
        {referencedObject.type[0].toUpperCase()}
      </div>

      <div>
        <p className="text-sm font-medium">
          {referencedObject.title}
        </p>

        <p className="text-xs text-[color:var(--white-40)]">
          {referencedObject.type}
        </p>
      </div>
    </button>
  );
}