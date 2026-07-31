import { ObjectHeader } from "./ObjectHeader";

export function WorkspaceView() {
  return (
    <div className="space-y-8">
      <ObjectHeader />

      <div className="grid grid-cols-3 gap-4">
        <div>Knowledge</div>
        <div>Data</div>
        <div>Activity</div>
      </div>
    </div>
  );
}