import Link from "next/link";
import Image from "next/image";
import SpecularButton from "@/components/ui/SpecularButton";
import { NavbarLink } from "@/components/marketing/navbar-link";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-6">
      <nav
        className="
          relative
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          overflow-hidden
          rounded-2xl
          border
          border-white/20
          bg-white/30
          px-6
          shadow-[0_10px_40px_rgba(30,27,75,0.10)]
          backdrop-blur-2xl
          backdrop-saturate-200
          transition-all
          duration-500
        "
      >

        {/* Liquid glass highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-gradient-to-b
            from-white/20
            to-transparent
          "
        />

        <div className="relative z-10 flex w-full items-center justify-between">

          {/* Logo */}
          <NavbarLink href="#top" className="flex items-center">
            <Image
              src="/brand/light-logo.svg"
              alt="Skildur"
              width={140}
              height={36}
              className="h-auto"
              priority
            />
          </NavbarLink>


          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) =>
              item.href.startsWith("#") ? (
                <NavbarLink
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    text-sm
                    text-neutral-600
                    transition
                    duration-300
                    hover:text-[#1E1B4B]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#1E1B4B]
                      shadow-[0_0_10px_#1E1B4B]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </NavbarLink>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    text-sm
                    text-neutral-600
                    transition
                    duration-300
                    hover:text-[#1E1B4B]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#1E1B4B]
                      shadow-[0_0_10px_#1E1B4B]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              )
            )}
          </div>


          {/* Actions */}
          <div className="flex items-center gap-3">

            <Link
              href="/login"
              className="
                hidden
                text-sm
                text-neutral-600
                transition
                duration-300
                hover:text-[#1E1B4B]
                md:block
              "
            >
              Sign In
            </Link>


            <Link href="/signup">
              <SpecularButton
                size="md"
                radius={999}
                tint="#1E1B4B"
                tintOpacity={0.35}
                blur={6}
                textColor="#ffffff"
                lineColor="#A78BFA"
                baseColor="#4C1D95"
                intensity={1.6}
                shineSize={16}
                shineFade={55}
                thickness={2}
                speed={0.35}
                followMouse
                proximity={300}
                autoAnimate={false}
              >
                Get Started
              </SpecularButton>
            </Link>

          </div>

        </div>

      </nav>
    </header>
  );
}