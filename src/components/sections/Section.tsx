type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 min-h-screen py-12 sm:py-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}
