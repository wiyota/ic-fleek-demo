import Link from "next/link";

export default function LinkButton({
  href,
  disabled,
  target,
  children,
}: Readonly<{
  href: string;
  disabled?: boolean;
  target?: string;
  children: React.ReactNode;
}>) {
  return (
    <Link
      className={`
        rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44
        ${disabled ? "pointer-events-none opacity-50" : ""}
      `}
      href={href}
      tabIndex={disabled ? -1 : undefined}
      target={target}
      rel={target == "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
