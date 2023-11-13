'use client';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

function Navbar() {
 
  return (
    <div className="pl-[94px] pr-6 py-[18px] flex justify-between items-center bg-[#fff] shadow-sm fixed top-0 right-0 left-0 z-10">
      <div className="w-[100px] h-[34px] bg-[#CFD4ED]"></div>
      <div className="flex items-center gap-6">
        <div className="flex">
          <div className="relative">
            <input type="search" placeholder="search" className="pl-[38px] pr-3 h-[36px] border placeholder:w-[124px] placeholder:text-xs outline-none" />
            <MagnifyingGlassIcon className="w-[18px] h-[18px] text-[#D0D0D0] absolute top-[9px] left-3 cursor-text" />
          </div>
          <button className="border w-[61px] h-[36px] text-sm font-bold text-[#0D28A6] rounded-sm border border-[#0D28A6]">Search</button>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[38px] h-[38px] rounded-full bg-[#CFD4ED] flex justify-center items-center text-[#151515] text-base font-bold">A</div>
          <p className="text-[#151515] text-sm">Admin</p>
          <ChevronDownIcon className="w-5 h-5 text-[#151515]" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
