import Navabar from '@/components/shared/navigation/Navibar';
import Footer from '@/components/shared/navigation/Footer';
import React from 'react';
import { useRouter } from 'next/router';
import SideBar from '@/components/user/SideBar';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const userLayout = router.pathname.includes('dashboard');
  const renderNavbar = () => {
    if (router.pathname.includes('dashboard')) {
      return false;
    } else return true;
  };
  const renderFooter = () => {
    if (
      router.pathname == '/login' ||
      router.pathname == '/signup' ||
      router.pathname.includes('/dashboard')
    ) {
      return false;
    } else return true;
  };
  return (
    <div className='w-full h-full'>
      {renderNavbar() && <Navabar />}
      {!userLayout && (
        <main className='w-full h-full font-inter'>{children}</main>
      )}
      {userLayout && (
        <div className='w-full h-full md:h-screen md:grid md:grid-cols-[320px,calc(100%-320px)] flex flex-col'>
          <SideBar />
          <main className='w-full h-full bg-[#F9F9F9] md:p-6 lg:p-10'>
            {children}
          </main>
        </div>
      )}
      {renderFooter() && <Footer />}
    </div>
  );
};

export default Layout;
