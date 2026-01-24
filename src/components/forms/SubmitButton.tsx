type SubmitButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
};

export default function SubmitButton({
  children,
  loading,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-white text-black py-3 font-semibold transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Submitting…" : children}
    </button>
  );
}
