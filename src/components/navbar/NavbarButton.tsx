import { ComponentProps, ReactNode } from 'react';

type Props = {
  aria?: string;
  className?: string;
  children: ReactNode;
} & ComponentProps<'button'>;

export function NavbarButton({className, children, aria}: Props) {
  return  <button
    className={`cursor-pointer p-2 rounded-full border-2 border-transparent hover:border-soft-bg transition-all duration-400 ${className}`}
    type="button"
    aria-label={aria}
  >
    {children}
  </button>
}