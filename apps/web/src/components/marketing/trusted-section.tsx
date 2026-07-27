export function TrustedSection() {
  const companies = [
    "Vertex",
    "Northstar",
    "Linear Labs",
    "Atlas",
    "Nova",
  ];

  return (
    <section className="border-y py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-neutral-500">
          Trusted by modern teams building the future
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8 text-center text-lg font-medium text-neutral-400 md:grid-cols-5">
          {companies.map((company) => (
            <div key={company}>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}