interface AccountCardProps {
  children: React.ReactNode;
}

export default function AccountCard({ children }: AccountCardProps) {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/10
        bg-black/40
        backdrop-blur-xl
        p-8
        shadow-2xl
      "
    >
      {children}
    </div>
  );
}