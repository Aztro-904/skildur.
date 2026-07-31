import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/[0.08] bg-[#070707]/80 p-4 backdrop-blur-xl">
      <WorkspaceSwitcher />

      <div className="mt-8 flex-1">
        <Navigation />
      </div>

      <UserMenu />
    </aside>
  );
}