interface AccountHeaderProps {
  title: string;
  description: string;
}

export default function AccountHeader({
  title,
  description,
}: AccountHeaderProps) {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        {title}
      </h1>

      <p className="text-sm text-slate-400">
        {description}
      </p>
    </div>
  );
}