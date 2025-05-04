import { Link } from 'react-router';
import { PATH } from '../../contants/path.ts';
import { NavbarButton } from './NavbarButton.tsx';

type Props = {
  className?: string;
};

export function Navbar({ className }: Props) {
  return (
    <header
      className={`p-5 w-full flex justify-between items-center border-b-2 border-soft-bg ${className}`}>
      <Link to={PATH.HOME} className="flex items-center gap-2.5 font-bold">
        <img src="/logo.svg" alt="Logo-lamAdmin" />
        myAdmin
      </Link>

      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <NavbarButton aria-label={'Search'}>
              <img src="/search.svg" alt="search icon" />
            </NavbarButton>
          </li>
          <li>
            <NavbarButton aria-label={'Applications'}>
              <img src="/app.svg" alt="app icon" />
            </NavbarButton>
          </li>
          <li>
            <NavbarButton aria-label={'Expand'}>
              <img src="/expand.svg" alt="expand icon" />
            </NavbarButton>
          </li>
          <li className={'relative'}>
            <NavbarButton aria-label={'Notifications'}>
              <img src="/notifications.svg" alt="notifications icon" />
              <span className="absolute -right-1 -top-1 p-1 text-xs bg-red-700 flex justify-center items-center text-main h-4 w-4 rounded-full">
                1
              </span>
            </NavbarButton>
          </li>
          <li>
            <NavbarButton aria-label={'User Profile'} className={'flex items-center gap-2'}>
              <img
                className="block p-1 w-10 h-10 rounded-full object-cover border-1 border-soft-bg"
                src="/user.svg"
                alt="User"
              />
              <span className="text-lg">Fedorich</span>
            </NavbarButton>
          </li>
          <li>
            <NavbarButton aria-label={'Settings'}>
              <img src="/setting.svg" alt="setting icon" />
            </NavbarButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
