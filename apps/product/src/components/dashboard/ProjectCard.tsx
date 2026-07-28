export default function ProjectCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h3 className="text-lg font-medium">
        Skildur Website
      </h3>

      <p className="mt-2 text-sm text-white/50">
        Updated recently
      </p>

      <div className="mt-5 h-2 rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-blue-600" />
      </div>

    </div>
  );
}