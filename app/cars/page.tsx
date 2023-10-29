import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';
import ListCar from '../components/ListCar';

function Cars() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight header="Cars" content="List Car" />
      <ListCar />
    </div>
  );
}

export default Cars;
