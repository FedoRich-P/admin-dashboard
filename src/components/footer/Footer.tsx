type Props = { className?: string };

export function Footer({ className }: Props) {
  return (
    <footer className={`mt-auto w-full p-5 flex items-center justify-between border-t-2 border-soft-bg ${className}`}>
      <b>myAdmin</b>
      <span className={'text-sm'}>@ Admin Dashboard 2025</span>
    </footer>
  );
}
