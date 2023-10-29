import React from 'react';
import hiasanmobil from '../assets/hiasanmobil.png';
import mobilmodal from '../assets/mobilmodal.png';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
  succ: string;
}

function ToastAddCar({ succ}: ModalProps) {
  return (
    <div className="flex flex-col items-center w-[387px] h-[343px] fixed top-[22%] left-[35%] bg-[#fff] z-20 p-8">
      <div className="mb-8">
        <Image src={hiasanmobil} alt="hiasanmobil" width={180} />
        <Image src={mobilmodal} alt="mobilmodal" width={180} className="mt-[-36px]" />
      </div>
      <h1 className="text-xl font-bold mb-6 text-center">{succ}</h1>
      <Link href={'/cars'}>
        <button className="w-[87px] h-9 bg-[#0D28A6] rounded-sm text-sm text-[#fff] font-bold">
          Oke
        </button>
      </Link>
    </div>
  );
}

export default ToastAddCar;
