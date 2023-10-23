import Image from 'next/image';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SidebarRight from './components/SidebarRight';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight header="Dashboard" content="Dashboard" />
      <h1 className="pl-[500px] pt-[200px]">INI DASHBOARD</h1>
    </div>
  );
}
