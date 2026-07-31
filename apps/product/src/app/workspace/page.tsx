import { objects } from "@/features/objects/data";
import { ObjectList } from "@/features/objects/components/ObjectList";
import { RelatedObjects } from "@/features/objects/components/RelatedObjects";
import { RelationshipView } from "@/features/objects/components/RelationshipView";

export default function WorkspacePage() {
  const mainObject = objects[0];

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-semibold">
          Objects
        </h1>

        <p className="mt-2 text-sm text-white/50">
          Connected workspace foundation.
        </p>
      </div>

      <ObjectList objects={objects} />

      <RelatedObjects
        object={mainObject}
        allObjects={objects}
      />

      <RelationshipView
        object={mainObject}
        allObjects={objects}
      />
    </div>
  );
}