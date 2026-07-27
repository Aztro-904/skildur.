import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "AI", href: "#ai" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
       <Link href="/" className="flex items-center">
  <Image
    src="/brand/light-logo.svg"
    alt="Skildur"
    width={140}
    height={36}
    priority
  />
</Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-neutral-600 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-neutral-600 md:block"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}