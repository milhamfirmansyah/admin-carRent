'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import LoginImage from '../assets/LoginImage.png';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [load, setLoad] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setLoad(true);
    try {
      const res = await axios.post('https://api-car-rental.binaracademy.org/admin/auth/login', {
        email: form.email,
        password: form.password,
      });
      if (res.status === 201) {
        setSuccess('Berhasil Login! Sebentar lagi anda akan diarahkan ke halaman cars');
        localStorage.setItem('tokenAdmin', res.data.access_token)
        localStorage.setItem('roleAdmin', res.data.role)
        setTimeout(() => {
          router.push('/cars');
        }, 1750);
      }
      setLoad(false);
      console.log(res);
    } catch (error) {
      console.log(error);
      setError('Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.');
      setTimeout(() => {
        setError('');
      }, 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center bg-[#fff] gap-[55px]">
      <div className="w-[64%]">
        <Image src={LoginImage} alt="login-image" className="w-full h-[900px]" />
      </div>
      <div>
        <div className="w-[100px] h-[34px] bg-[#CFD4ED] mb-8"></div>
        <h1 className="text-2xl font-bold mb-8">Welcome, Admin BCR</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-[#222] mb-[9px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Contoh: johndee@gmail.com"
            className="w-[370px] h-[38px] border border-[#0000001A] py-[10px] px-[15px] outline-none placeholder:text-xs placeholder:text-[#A5A5A5]"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-sm text-[#222] mb-[9px]">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="6+ Karakter"
            className="w-[370px] h-[38px] border border-[#0000001A] py-[10px] px-[15px] outline-none placeholder:text-xs placeholder:text-[#A5A5A5]"
          />
        </div>
        <button onClick={handleSubmit} className="w-[370px] h-9 bg-[#0D28A6] rounded-sm text-sm font-bold text-[#FFF]">
          Sign In
        </button>
        {success && <div className="mt-8 w-[370px] h-[60px] bg-[#73CA5C] py-3 px-4 rounded-[5px] text-xs leading-[18px] text-[#FFF]">{success}</div>}
        {error && <div className="mt-8 w-[370px] h-[60px] bg-[#D00C1A1A] py-3 px-4 rounded-[5px] text-xs leading-[18px] text-[#D00C1A]">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
