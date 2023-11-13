'use client';
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, UsersIcon, ClockIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import Modal from './Modal';
import Toast from './Toast';
import Link from 'next/link';
import Navbar from './Navbar';

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

function ListCarMedium() {
  const [data, setData] = useState<CarsData[]>([]);
  const [isShown, setIsShown] = useState(false);
  const [name, setName] = useState('');
  const [modalId, setModalId] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get(`https://api-car-rental.binaracademy.org/admin/v2/car?category=medium&name=${search}`, {
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

  // Delete Car
  const handleModal = (name: string, id: number) => {
    setIsShown(true);
    setName(name);
    setModalId(id);
  };

  const handleCancel = () => {
    setIsShown(false);
  };

  const handleDelete = async (id: number) => {
    const res = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, {
      headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    });
    setIsShown(false);
    setShowToast(true);
  };

  // Toast
  const handleToast = () => {
    setShowToast(false);
    location.reload();
  };

  // handle search
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
    <Navbar search={handleSearch} onclick={getData}/>
      <div className="pt-[102px] pl-[245px] pr-[25px]">
        {isShown && <Modal name={name} cancel={handleCancel} id={modalId} del={handleDelete} />}
        {showToast && <Toast name={name} ok={handleToast} />}
        {isShown && <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60"></div>}
        {showToast && <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60"></div>}
        <div className="flex gap-1 items-center mb-[27px]">
          <h1 className="text-xs font-bold">Cars</h1>
          <ChevronRightIcon className="w-4 h-4" />
          <p className="text-xs font-thin">List Car</p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">List Car</h2>
          <Link href={'/add-new-car'}>
            <button className="bg-[#0D28A6] py-2 px-3 rounded-sm text-[#FFFFFF] text-sm font-bold flex items-center">
              <span className="text-[18px] mr-3">+</span>Add New Car
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <Link href={'/cars-all'}>
            <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">All</button>
          </Link>
          <Link href={'/cars-small'}>
            <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">2 - 4 people</button>
          </Link>
          <button className="border border-[#0D28A6] py-2 px-3 rounded-sm text-[#0D28A6] text-sm font-bold bg-[#CFD4ED]">4 - 6 people</button>
          <Link href={'/cars-large'}>
            <button className="border border-[#AEB7E1] py-2 px-3 rounded-sm text-[#AEB7E1] text-sm font-bold">6 - 8 people</button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {data.map((item) => (
            <div className="w-[351px] h-[482px] p-6 bg-[#fff] rounded-lg">
              <img src={item.image} alt="car" className="mb-[47px] h-[190px] w-full" />
              <p className="text-sm mb-2">{item.name}</p>
              <p className="text-base font-bold mb-4">Rp. {item.price} / hari</p>
              <div className="flex items-center gap-2 mb-4">
                <UsersIcon className="w-[20px] h-[20px]" />
                <p className="text-sm">{item.category}</p>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <ClockIcon className="w-[20px] h-[20px]" />
                <p className="text-sm">Updated at {item.updatedAt}</p>
              </div>
              <div className="flex items-center justify-between">
                <button onClick={() => handleModal(item.name, item.id)} className="flex gap-[10px] items-center justify-center rounded-sm border border-[#FA2C5A] w-[143.5px] h-12 text-sm font-bold text-[#FA2C5A]">
                  <TrashIcon className="w-[18px] h-[18px] text-[#FA2C5A]" /> Delete
                </button>
                <Link href={`/edit/${item.id}`}>
                  <button className="flex gap-[10px] items-center justify-center rounded-sm bg-[#5CB85F] w-[143.5px] h-12 text-sm font-bold text-[#fff]">
                    <PencilSquareIcon className="w-[18px] h-[18px] text-[#fff]" />
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListCarMedium;
