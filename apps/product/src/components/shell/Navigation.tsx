"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  BookOpen,
  FileText,
  Database,
  Users,
  Bell,
} from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "/" },
  { icon: FolderKanban, label: "Objects", href: "/objects" },
  { icon: BookOpen, label: "Knowledge", href: "/knowledge" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Database, label: "Data", href: "/data" },
  { icon: Users, label: "People", href: "/team" },
  { icon: Bell, label: "Activity", href: "/activity" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {items.map(({ icon: Icon, label, href }) => {
        const active = pathname === href;

        return (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
              active
                ? "bg-white/10 text-white"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}