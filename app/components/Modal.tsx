import React from 'react';
import hiasanmobil from '../assets/hiasanmobil.png';
import mobilmodal from '../assets/mobilmodal.png';
import Image from 'next/image';

interface ModalProps {
  name: string;
  id: number
  cancel: () => void;
  del: (param: number) => void
}

function Modal({ name, cancel, id, del}: ModalProps) {
  return (
    <div className="flex flex-col items-center w-[387px] h-[343px] fixed top-[22%] left-[35%] bg-[#fff] z-20 p-8 rounded">
      <div className="mb-6">
        <Image src={hiasanmobil} alt="hiasanmobil" width={153} />
        <Image src={mobilmodal} alt="mobilmodal" width={153} className="mt-[-27px]" />
      </div>
      <h1 className="text-base font-bold mb-4 text-center">Menghapus Mobil {name}</h1>
      <p className="text-sm text-center mb-6">Setelah dihapus, mobil {name} tidak dapat dikembalikan. Yakin ingin menghapus?</p>
      <div className="flex items-center gap-4">
        <button onClick={()=>del(id)} className="w-[87px] h-9 bg-[#0D28A6] rounded-sm text-sm text-[#fff] font-bold">Ya</button>
        <button onClick={cancel} className="w-[87px] h-9 border border-[#0D28A6] rounded-sm text-sm text-[#0D28A6] font-bold">
          Tidak
        </button>
      </div>
    </div>
  );
}

export default Modal;
