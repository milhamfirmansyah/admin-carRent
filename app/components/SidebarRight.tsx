import React from 'react';

interface SidebarRightProps {
  header: string;
  content: string;
}

function SidebarRight({ header, content }: SidebarRightProps) {
  return (
    <div className="pt-[70px] pl-[70px] w-[220px] h-[830px] bg-[#FFF] fixed top-0 left-0">
      <h1 className="pt-[34px] pb-[19px] pl-6 text-[#8A8A8A] text-sm font-bold">{header}</h1>
      <div className="w-full h-[42px] bg-[#CFD4ED] text-sm text-[#151515] font-bold pl-6 pt-[11px]">{content}</div>
    </div>
  );
}

export default SidebarRight;
