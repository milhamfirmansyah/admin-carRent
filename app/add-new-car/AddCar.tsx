'use client';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import axios from 'axios';
import ToastAddCar from './ToastAddCar';

function AddCar() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
  });
  const [image, setImage] = useState<any>();
  const [succ, setSucc] = useState('');
  const [load, setLoad] = useState(false)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault;

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('category', form.category);
    formData.append('image', image);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    };

    try {
      setLoad(true)
      const res = await axios.post('https://api-car-rental.binaracademy.org/admin/car', formData, config);
      console.log('Berhasil Post', res);
      setSucc('Data Berhasil Ditambahkan! Kembali ke Cars');
      setLoad(false)
    } catch (error) {
      console.log('Gagal Post', error);
    }
  };

  return (
    <div className="pt-[102px] pl-[245px] pr-[25px]">
      {succ && <ToastAddCar succ={succ}/>}
      {succ && <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60"></div>}
      <div className="flex items-center gap-1 mb-[27px]">
        <h1 className="text-xs font-bold">Cars</h1>
        <ChevronRightIcon className="w-3 h-3" />
        <h1 className="text-xs font-bold">List Car</h1>
        <ChevronRightIcon className="w-3 h-3" />
        <h1 className="text-sm font-light">Add New Car</h1>
      </div>
      <h2 className="text-xl font-bold mb-4">Add New Car</h2>
      <div className="w-full h-[318px] bg-[#fff] p-4 rounded-sm mb-4">
        <div className="flex items-center gap-2 mb-4">
          {/* Nama Mobil */}
          <label htmlFor="" className="w-[147px] text-xs font-normal">
            Nama/Tipe Mobil<span className="text-[#FA2C5A]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Input Nama/Tipe Mobil"
            className="border border-[#D0D0D0] w-[339px] h-9 rounded-sm py-[9] px-3 outline-none placeholder:text-xs placeholder:font-light placeholder:text-[#8A8A8A]"
          />
        </div>
        {/* Harga Mobil */}
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="" className="w-[147px] text-xs font-normal">
            Harga<span className="text-[#FA2C5A]">*</span>
          </label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleInputChange}
            placeholder="Input Harga Sewa Mobil"
            className="border border-[#D0D0D0] w-[339px] h-9 rounded-sm py-[9] px-3 outline-none placeholder:text-xs placeholder:font-light placeholder:text-[#8A8A8A]"
          />
        </div>
        {/* Foto Mobil */}
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="" className="w-[147px] text-xs font-normal">
            Foto<span className="text-[#FA2C5A]">*</span>
          </label>
          <div>
            <input
              type="file"
              onChange={handleImageChange}
              placeholder="Upload Foto Mobil"
              accept=".jpg, .jpeg, .png"
              className="border border-[#D0D0D0] w-[339px] h-9 rounded-sm py-[9] px-3 outline-none placeholder:text-xs placeholder:font-light placeholder:text-[#8A8A8A] mb-1"
            />
            <p className="text-[10px] leading-[14px] font-light text-[#8A8A8A]">File size max. 2MB</p>
          </div>
        </div>
        {/* Kategori Mobil */}
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="" className="w-[147px] text-xs font-normal">
            Kategori<span className="text-[#FA2C5A]">*</span>
          </label>
          <select name="category" value={form.category} onChange={handleInputChange} className="border border-[#D0D0D0] w-[339px] h-9 rounded-sm py-[9] px-3 outline-none">
            <option value="">Pilih Kategori Mobil</option>
            <option value="small">small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        {/* Created at */}
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="" className="w-[147px] text-xs font-normal">
            Created At
          </label>
          <span className="text-sm font-normal text-[#3C3C3C]">-</span>
        </div>
        {/* Updated At */}
        <div className="flex items-center gap-2">
          <label htmlFor="" className="w-[147px] text-xs font-normal">
            Updated At
          </label>
          <span className="text-sm font-normal text-[#3C3C3C]">-</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href={'/cars'}>
          <button className="w-[70px] h-9 border rounded-sm border-[#0D28A6] text-[#0D28A6] text-sm font-bold">Cancel</button>
        </Link>
        <button onClick={handleSubmit} disabled={load ? true : false} className="w-[57px] h-9 bg-[#0D28A6] rounded-sm text-[#fff] text-sm font-bold">
          {load ? 'loading...' : 'Save'}
        </button>
      </div>
    </div>
  );
}

export default AddCar;
