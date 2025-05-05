import { topDealUsers } from '../../../data.tsx';
import { Link } from 'react-router';

export function TopBox() {
  return (
    <li className="p-5 rounded-lg border border-soft-bg col-start-1 row-span-3">
      <h2 className={'mb-5 capitalize text-2xl'}>Top Deals</h2>
      <ul>
        {topDealUsers.map((user) => (
          <li
            key={user.id}
            className={'py-3 border-b border-soft-bg flex justify-between items-center '}>
            <article className={'flex gap-x-2 items-center'}>
              <img
                src={user.img}
                alt={`${user.username} avatar`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={'flex gap-1 flex-col items-start'}>
                <Link
                  to={`/user/${user.id}`}
                  className="text-base font-medium text-blue-600 border-b-2 border-transparent hover:border-inherit transition-all duration-400">
                  {user.username}
                </Link>
                <a href={`mailto:${user.email}`} className="text-xs text-gray-500 border-b-1 border-transparent hover:border-inherit transition-all duration-400">
                  {user.email}
                </a>
              </div>
            </article>
            <span className={'text-lg font-medium'}>{user.amount}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
