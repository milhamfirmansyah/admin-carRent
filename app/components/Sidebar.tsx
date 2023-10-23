import React, { useState } from 'react';
import { HomeIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Sidebar() {
  return (
    <div className="w-[70px] h-[902px] bg-[#0D28A6] flex flex-col items-center fixed top-0 left-0 z-10">
      <div className="w-[34px] h-[34px] bg-[#CFD4ED] my-[18px]"></div>
      <Link href={'/'} className="flex flex-col items-center py-[20px] cursor-pointer hover:bg-[#FFF] hover:bg-opacity-30 w-full">
        <HomeIcon className="h-[24px] w-[24px] text-[#FFFFFF]" />
        <p className="text-[#FFF] text-[12px] font-bold leading-[18px]">Dashboard</p>
      </Link>
      <Link href={'/cars'} className="flex flex-col items-center py-[20px] cursor-pointer hover:bg-[#FFF] hover:bg-opacity-30 w-full">
          <TruckIcon className="h-[24px] w-[24px] text-[#FFFFFF]" />
          <p className="text-[#FFF] text-[12px] font-bold leading-[18px]">Cars</p>
      </Link>
    </div>
  );
}

export default Sidebar;
