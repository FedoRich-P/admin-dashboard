import { Link } from 'react-router';
import { PATH } from '../../contants/path.ts';

type Props = {
  className?: string;
};

export function Navbar({ className }: Props) {
  return <header className={`py-4 px-5 w-full flex justify-between items-center border-b-2 border-soft-bg ${className}`}>
    <Link to={PATH.HOME} className="flex items-center gap-2">
      <img src="logo.svg" alt="Logo-lamAdmin" />
      lamAdmin
    </Link>
    <nav>
      <ul className="flex items-center gap-5">
        <li>
          <button className={'cursor-pointer p-1'} type="button" aria-label="Search">
            <img src="/search.svg" alt="search icon" />
          </button>
        </li>
        <li>
          <button className={'cursor-pointer p-1'} type="button" aria-label="Applications">
            <img src="/app.svg" alt="app icon" />
          </button>
        </li>
        <li>
          <button className={'cursor-pointer p-1'} type="button" aria-label="Expand">
            <img src="/expand.svg" alt="expand icon" />
          </button>
        </li>
        <li>
          <button className={'cursor-pointer p-1'} type="button" aria-label="Notifications">
            <img src="/notifications.svg" alt="notifications icon" />
            <span>1</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="User Profile"
            className={'flex items-center gap-1 className={\'cursor-pointer p-1\'}'}>
            <img className={'block p-1 w-10 h-10 rounded-full object-cover border-1 border-soft-bg'} src="/user.svg" alt="User" />
            <span>Fedorich</span>
          </button>
        </li>
        <li>
          <button className={'cursor-pointer p-1'} type="button" aria-label="Settings">
            <img src="/setting.svg" alt="setting icon" />
          </button>
        </li>
      </ul>
    </nav>
  </header>;
}