import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';
import ListCarSmall from '../components/ListCarSmall';

function Cars(req: any) {
  return (
    <div>
      <Sidebar />
      <SidebarRight header="Cars" content="List Car" />
      <ListCarSmall />
    </div>
  );
}

export default Cars;
