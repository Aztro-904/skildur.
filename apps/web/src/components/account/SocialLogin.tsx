export default function SocialLogin() {
  return (
    <div className="space-y-5">

      <button
        className="
          h-12
          w-full
          rounded-xl
          bg-white
          text-black
          font-medium
          transition
          hover:bg-slate-200
        "
      >
        Continue with Google
      </button>


      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-xs text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

    </div>
  );
}