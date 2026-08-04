"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Boxes,
  BookOpen,
  Database,
  Bot,
  Zap,
  Settings,
} from "lucide-react";

const navigation = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Objects",
    href: "/objects",
    icon: Boxes,
  },
  {
    label: "Knowledge",
    href: "/knowledge",
    icon: BookOpen,
  },
  {
    label: "Data",
    href: "/data",
    icon: Database,
  },
  {
    label: "Automation",
    href: "/automation",
    icon: Zap,
  },
  {
    label: "AI",
    href: "/ai",
    icon: Bot,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 flex-col border-r border-white/8 bg-[#09090B]">
      {/* Logo */}

      <div className="border-b border-white/8 px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Skildur
        </h1>

        <p className="mt-1 text-sm text-white/35">
          Intelligent Workspace
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-xs uppercase tracking-[0.16em] text-white/25">
          Workspace
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  transition

                  ${
                    active
                      ? "bg-white/8 text-white"
                      : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                  }
                `}
              >
                <Icon size={18} />

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}

      <div className="border-t border-white/8 p-3">
        <Link
          href="/settings"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2.5
            text-white/45
            transition
            hover:bg-white/[0.04]
            hover:text-white
          "
        >
          <Settings size={18} />

          <span className="text-sm font-medium">
            Settings
          </span>
        </Link>

        <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-3">
          <p className="text-sm font-medium text-white">
            My Workspace
          </p>

          <p className="mt-1 text-xs text-white/35">
            Personal
          </p>
        </div>
      </div>
    </aside>
  );
}