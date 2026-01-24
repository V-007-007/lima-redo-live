type FormWrapperProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function FormWrapper({
  title,
  description,
  children,
}: FormWrapperProps) {
  return (
    <div className="max-w-xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
      {title && (
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-sm text-neutral-400 mb-6">
          {description}
        </p>
      )}

      <div className="space-y-5">{children}</div>
    </div>
  );
}
