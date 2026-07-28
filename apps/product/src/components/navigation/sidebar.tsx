const items = [
  "Home",
  "Projects",
  "Documents",
  "Knowledge",
  "Calendar",
  "Team",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-[#090D18] p-6">

      <div className="flex items-center gap-3">
        <img
          src="/brand/dark-icon.svg"
          className="h-9 w-9"
          alt="Skildur"
        />

        <span className="text-xl font-semibold">
          Skildur
        </span>
      </div>

      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
        Personal Workspace
      </div>

      <nav className="mt-8 space-y-1">
        {items.map((item, index) => (
          <div
            key={item}
            className={`rounded-xl px-4 py-3 text-sm transition ${
              index === 0
                ? "bg-[#1E1B4B] text-white"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>

    </aside>
  );
}