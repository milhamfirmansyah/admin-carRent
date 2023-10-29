import React from 'react';
import Image from 'next/image';
import LoginImage from '../assets/LoginImage.png';

function Login() {
  return (
    <div className="flex items-center bg-[#fff] gap-[55px]">
      <div className='w-[64%]'>
        <Image src={LoginImage} alt="login-image" className="w-full h-[900px]" />
      </div>
      <div>
        <div className='w-[100px] h-[34px] bg-[#CFD4ED] mb-8'></div>
        <h1 className='text-2xl font-bold mb-8'>Welcome, Admin BCR</h1>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm text-[#222] mb-[9px]'>Email</label>
          <input type="email" id='email' placeholder='Contoh: johndee@gmail.com' className='w-[370px] h-[38px] border border-[#0000001A] py-[10px] px-[15px] outline-none placeholder:text-xs placeholder:text-[#A5A5A5]'/>
        </div>
        <div className='mb-8'>
          <label htmlFor="password" className='block text-sm text-[#222] mb-[9px]'>Password</label>
          <input type="email" id='password' placeholder='6+ Karakter' className='w-[370px] h-[38px] border border-[#0000001A] py-[10px] px-[15px] outline-none placeholder:text-xs placeholder:text-[#A5A5A5]'/>
        </div>
        <button className='w-[370px] h-9 bg-[#0D28A6] rounded-sm text-sm font-bold text-[#FFF]'>Sign In</button>
      </div>
    </div>
  );
}

export default Login;
