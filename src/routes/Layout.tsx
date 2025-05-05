import { Navbar } from '../components/navbar/Navbar.tsx';
import { Menu } from '../components/menu/Menu.tsx';
import { Outlet } from 'react-router';
import { Footer } from '../components/footer/Footer.tsx';

export function Layout() {
  return (
    <div className={'text-main flex flex-col'}>
      <Navbar />
      <div className={'flex h-full flex-1 overflow-hidden'}>
        <Menu/>
        <main className={'py-4 px-5 w-full h-full overflow-x-auto'}>
          <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
