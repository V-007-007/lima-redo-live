type SelectInputProps = {
  label: string;
  name: string;
  children: React.ReactNode;
};

export default function SelectInput({
  label,
  children,
  ...props
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-neutral-300">
        {label}
      </label>
      <select
        className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neutral-600"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
