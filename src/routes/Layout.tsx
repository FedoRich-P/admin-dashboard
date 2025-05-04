import { Navbar } from '../components/navbar/Navbar.tsx';
import { Menu } from '../components/menu/Menu.tsx';
import { Outlet } from 'react-router';
import { Footer } from '../components/footer/Footer.tsx';

export function Layout() {
  return (
    <div className={'text-main'}>
      <Navbar />
      <div className={'flex'}>
        <Menu className={'w-60 py-4 px-5 border-r-2 border-soft-bg'}/>
        <main className={'py-4 px-5 w-full h-full flex flex-column justify-center items-center'}>
          <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
