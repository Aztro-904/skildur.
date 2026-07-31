import { CreateObject } from "@/features/objects/components/CreateObject";

export function HomeView() {
  return (
    <div className="flex min-h-[calc(100vh-56px)] items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          What are you working on?
        </h1>

        <p className="mt-3 text-[var(--muted)]">
          Create a connected workspace for anything that matters.
        </p>

        <div className="mt-10 text-left">
          <CreateObject />
        </div>
      </div>
    </div>
  );
}