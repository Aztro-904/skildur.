import type { WorkspaceObject } from "../types";

interface ObjectHeaderProps {
  object: WorkspaceObject;
}

export function ObjectHeader({ object }: ObjectHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] pb-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        {object.title}
      </h1>

      {object.description && (
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {object.description}
        </p>
      )}
    </header>
  );
}