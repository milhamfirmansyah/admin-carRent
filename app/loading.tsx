import React from 'react'
import Image from 'next/image'
import hiasanmobil from './assets/hiasanmobil.png'
import mobilmodal from './assets/mobilmodal.png'

function loading() {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60'>
      <div className="flex flex-col items-center w-[387px] h-[343px] fixed top-[22%] left-[35%] bg-[#fff] z-20 p-10 rounded">
        <div className="mb-8">
          <Image src={hiasanmobil} alt="hiasanmobil" width={220} />
          <Image src={mobilmodal} alt="mobilmodal" width={220} className="mt-[-36px]" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Loading...</h1>
      </div>
    </div>
  )
}

export default loading