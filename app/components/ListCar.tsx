'use client';
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, UsersIcon, ClockIcon, TrashIcon,PencilSquareIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

interface CarsData {
  id: number;
  name: string;
  category: string;
  price: number;
  status: boolean;
  start_rent_at: null;
  finish_rent_at: null;
  image: string;
  createdAt: string;
  updatedAt: string;
}

function ListCar() {
  const [data, setData] = useState<CarsData[]>([]);

  const getData = async () => {
    const res = await axios.get(`https://api-car-rental.binaracademy.org/admin/v2/car`, {
      headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    });
    setData(res.data.cars);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="pt-[102px] pl-[245px] pr-[25px]">
      <div className="flex gap-1 items-center mb-[27px]">
        <h1 className="text-xs font-bold">Cars</h1>
        <ChevronRightIcon className="w-4 h-4" />
        <p className="text-xs font-thin">List Car</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">List Car</h2>
        <button className="bg-[#0D28A6] py-2 px-3 rounded-sm text-[#FFFFFF] text-sm font-bold flex items-center">
          <span className="text-[18px] mr-3">+</span>Add New Car
        </button>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">All</button>
        <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">2 - 4 people</button>
        <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">4 - 6 people</button>
        <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">6 - 8 people</button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {data.map((item) => (
          <div className="w-[315px] h-[460px] p-6 bg-[#fff]">
            <img src={item.image} alt="car" className="mb-[47px]" />
            <p className='text-sm mb-2'>{item.name}</p>
            <p className='text-base font-bold mb-4'>Rp. {item.price} / hari</p>
            <div className="flex items-center gap-2 mb-4">
              <UsersIcon className="w-[20px] h-[20px]" />
              <p className='text-sm'>{item.category}</p>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <ClockIcon className="w-[20px] h-[20px]" />
              <p className='text-sm'>Updated at {item.updatedAt}</p>
            </div>
            <div className="flex items-center justify-between">
             <button className='flex gap-[10px] items-center justify-center rounded-sm border border-[#FA2C5A] w-[128px] h-12 text-sm font-bold text-[#FA2C5A]'><TrashIcon className='w-[18px] h-[18px] text-[#FA2C5A]'/> Delete</button>
             <button className='flex gap-[10px] items-center justify-center rounded-sm bg-[#5CB85F] w-[128px] h-12 text-sm font-bold text-[#fff]'><PencilSquareIcon className='w-[18px] h-[18px] text-[#fff]'/>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCar;
