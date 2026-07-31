import { ObjectHeader } from "./ObjectHeader";
import { OverviewPanel } from "./OverviewPanel";
import { KnowledgePanel } from "./KnowledgePanel";
import { DocumentsPanel } from "./DocumentsPanel";
import { DataPanel } from "./DataPanel";
import { ActivityPanel } from "./ActivityPanel";
import { ConnectionsPanel } from "./ConnectionsPanel";

const workspace = {
  id: "1",
  title: "Product Launch",
  description: "Everything related to this initiative lives here.",
  updatedAt: "Today",
};

export function WorkspaceView() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      <ObjectHeader object={workspace} />

      <OverviewPanel />

      <div className="grid gap-6 lg:grid-cols-2">
        <KnowledgePanel />
        <DocumentsPanel />
        <DataPanel />
        <ActivityPanel />
      </div>

      <ConnectionsPanel />
    </div>
  );
}