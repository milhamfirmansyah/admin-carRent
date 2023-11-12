import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';
import ListCarLarge from '../components/ListCarLarge';

function Cars(req: any) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight header="Cars" content="List Car" />
      <ListCarLarge />
    </div>
  );
}

export default Cars;
