type TextAreaProps = {
  label: string;
  name: string;
  rows?: number;
};

export default function TextArea({
  label,
  rows = 4,
  ...props
}: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-neutral-300">
        {label}
      </label>
      <textarea
        rows={rows}
        className="w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        {...props}
      />
    </div>
  );
}
