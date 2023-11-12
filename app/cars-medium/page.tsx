import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';
import ListCarMedium from '../components/ListCarMedium';

function Cars(req: any) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight header="Cars" content="List Car" />
      <ListCarMedium />
    </div>
  );
}

export default Cars;
