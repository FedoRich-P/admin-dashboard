import { MenuLink } from './MenuLink.tsx';
import { menu } from '../../data.tsx';

type Props = {
  className?: string;
};

export function Menu({ className }: Props) {
  return (
    <aside className={`w-60 py-4 px-5 border-r-2 border-soft-bg ${className}`}>
      <ul className={'flex flex-col gap-y-4'}>
        {menu.map((menuItem) => (
          <li key={menuItem.id} className={'border-b-1 border-soft-bg pb-3'}>
            <h3 className={'mb-1 text-xs font-extralight text-soft uppercase'}>{menuItem.title}</h3>
            <ul className={'flex flex-col gap-y-1.5'}>
              {menuItem.listItems.map((item) => (
                <li key={item.id}>
                  <MenuLink src={item.icon} path={item.url} name={item.title} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
