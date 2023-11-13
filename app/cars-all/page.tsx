import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';
import ListCar from '../components/ListCar';

function Cars(req: any) {
  return (
    <div>
      <Sidebar />
      <SidebarRight header="Cars" content="List Car" />
      <ListCar />
    </div>
  );
}

export default Cars;
