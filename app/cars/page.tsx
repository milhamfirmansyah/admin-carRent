import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarRight from '../components/SidebarRight';

function Cars() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight header="Cars" content="Cars" />
      <h1 className="pl-[500px] pt-[200px]">INI CARS PAGE</h1>
    </div>
  );
}

export default Cars;
