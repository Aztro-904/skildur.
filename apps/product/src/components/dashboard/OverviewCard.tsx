interface Props {
  title: string;
  value: string;
}

export default function OverviewCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <p className="text-sm text-white/50">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        {value}
      </h2>
    </div>
  );
}