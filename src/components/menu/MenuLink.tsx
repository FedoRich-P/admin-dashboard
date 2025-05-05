import { Link } from 'react-router';

type Props = {
  path: string;
  className?: string;
  src: string;
  name: string;
};

export function MenuLink({ path, className, name, src }: Props) {
  return (
    <Link
      to={path}
      className={`py-1.5 px-5 flex gap-x-3 whitespace-nowrap capitalize items-center justify-start rounded hover:bg-soft-bg transition-all duration-400 ${className}`}>
      <img src={src} alt={`${src.replace(/\.svg$/, '')} icon`} />
      {name}
    </Link>
  );
}
