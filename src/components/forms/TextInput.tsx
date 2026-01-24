type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function TextInput({
  label,
  type = "text",
  ...props
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-neutral-300">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        {...props}
      />
    </div>
  );
}
