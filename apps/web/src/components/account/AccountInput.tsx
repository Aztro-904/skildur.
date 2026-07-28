interface AccountInputProps {
  placeholder: string;
  type?: string;
}

export default function AccountInput({
  placeholder,
  type = "text",
}: AccountInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        h-12
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-blue-500
        focus:bg-white/10
      "
    />
  );
}