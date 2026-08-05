import { objects } from "@/features/objects/data";
import { ObjectList } from "@/features/objects/components/ObjectList";
import { RelatedObjects } from "@/features/objects/components/RelatedObjects";
import { RelationshipView } from "@/features/objects/components/RelationshipView";
import { KnowledgePanel } from "@/features/objects/components/KnowledgePanel";

export default async function ObjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ object?: string }>;
}) {
  const params = await searchParams;

  const selected =
    objects.find((item) => item.id === params.object) ??
    objects[0];
    
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-semibold">
          Objects
        </h1>

        <p className="mt-2 text-sm text-[color:var(--white-50)]">
          Connected workspace foundation.
        </p>
      </div>

      <ObjectList objects={objects} />

      <RelatedObjects
        object={selected}
        allObjects={objects}
      />

      <RelationshipView
        object={selected}
        allObjects={objects}
      />

      <KnowledgePanel objectId={selected.id} />
    </div>
  );
}