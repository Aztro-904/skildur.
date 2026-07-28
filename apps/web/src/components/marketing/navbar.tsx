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
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-black/40
          px-6
          shadow-[0_10px_50px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
          backdrop-saturate-150
          transition-all
          duration-500
        "
      >

        {/* Liquid glass reflection */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-gradient-to-b
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* Blue ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-20
            left-1/2
            h-40
            w-80
            -translate-x-1/2
            rounded-full
            bg-indigo-500/20
            blur-3xl
          "
        />

        <div className="relative z-10 flex w-full items-center justify-between">

          {/* Logo */}
          <NavbarLink href="#top" className="flex items-center">
            <Image
              src="/brand/dark-logo-nobg.png"
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
                    text-zinc-400
                    transition
                    duration-300
                    hover:text-white
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
                      bg-indigo-400
                      shadow-[0_0_14px_#818CF8]
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
                    text-zinc-400
                    transition
                    duration-300
                    hover:text-white
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
                      bg-indigo-400
                      shadow-[0_0_14px_#818CF8]
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
          <div className="flex items-center gap-4">

            <Link
              href="/signin"
              className="
                hidden
                text-sm
                text-zinc-400
                transition
                duration-300
                hover:text-white
                md:block
              "
            >
              Sign In
            </Link>


            <Link href="/signup">
              <SpecularButton
                size="md"
                radius={999}

                /* Dark premium purple glass */
                tint="#6366F1"
                tintOpacity={0.35}
                blur={8}

                textColor="#ffffff"

                lineColor="#C4B5FD"
                baseColor="#4338CA"

                intensity={2}
                shineSize={18}
                shineFade={60}
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