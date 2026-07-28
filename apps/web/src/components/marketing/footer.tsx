import Link from "next/link";
import Image from "next/image";

const product = [
  { label: "Features", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Pricing", href: "#" },
];

const company = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -z-10
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />


      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-3">


        {/* Brand */}
        <div>

          <Image
            src="/brand/dark-logo.svg"
            alt="Skildur"
            width={150}
            height={40}
            className="h-auto"
          />


          <p
            className="
              mt-6
              max-w-sm
              leading-7
              text-zinc-400
            "
          >
            The intelligent workspace that connects projects, documents,
            dashboards and reports into one place.
          </p>

        </div>


        {/* Product */}
        <div>

          <h3 className="font-semibold text-white">
            Product
          </h3>


          <div className="mt-6 flex flex-col gap-3">

            {product.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  text-zinc-400
                  transition
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

          </div>

        </div>


        {/* Company */}
        <div>

          <h3 className="font-semibold text-white">
            Company
          </h3>


          <div className="mt-6 flex flex-col gap-3">

            {company.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  text-zinc-400
                  transition
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

          </div>

        </div>


      </div>


      {/* Bottom */}
      <div
        className="
          mx-auto
          mt-16
          max-w-7xl
          border-t
          border-white/10
          px-6
          pt-8
        "
      >
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Skildur. All rights reserved.
        </p>
      </div>


    </footer>
  );
}