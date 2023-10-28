import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';
import AddCar from './AddCar';


function page() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight header="Cars" content="Cars" />
      <AddCar/>
    </div>
  );
}

export default page;
