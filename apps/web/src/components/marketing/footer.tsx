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
    <footer className="border-t border-neutral-200 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-3">

        <div>
          <Image
            src="/brand/light-logo.svg"
            alt="Skildur"
            width={150}
            height={40}
          />

          <p className="mt-6 max-w-sm leading-7 text-neutral-600">
            The intelligent workspace that connects projects, documents,
            dashboards and reports into one place.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            Product
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {product.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-neutral-600 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {company.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-neutral-600 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-neutral-200 px-6 pt-8">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Skildur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}