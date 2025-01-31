import React from 'react'
//images
import logo from "../../../assets/img/logo.png"
//icons
import icon1 from "../../../assets/icons/icon1.svg";
import icon2 from "../../../assets/icons/icon2.svg";
import icon3 from "../../../assets/icons/icon3.svg";
import icon4 from "../../../assets/icons/icon4.svg";
import icon5 from "../../../assets/icons/icon5.svg";
import icon6 from "../../../assets/icons/icon6.svg";
import icon7 from "../../../assets/icons/icon7.svg";
import icon8 from "../../../assets/icons/icon8.svg";
const Dashboard = () => {
  return (
    <div className="bg-white w-[300px]">
      <div className="flex items-center gap-4 pt-[28px] pl-[24px]">
        <a href="#">
          <img className="rounded-full" src={logo} alt="logo" />
        </a>
        <div>
          <h3 className="font-black text-[16px]">Fast Food</h3>
          <p className="font-normal text-[12px] opacity-50">
            Online maxsulot sotuvi
          </p>
        </div>
      </div>
      <div className="flex mt-[64px] items-center">
        <div className=" w-[4px] h-[372px] bg-[#fcb600] rounded-r-[2px]"></div>
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center gap-2 pl-[36px]">
            <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
              <img src={icon1} alt="" />
            </div>
            <a className="text-[15px] text-[#2d3a45]" href="#">
              Buyurtmalar
            </a>
          </div>
          <div className="flex items-center gap-2 bg-[#fcb600] rounded-r-[6px] w-[276px] h-[48px] pl-[43px]">
            <div className="bg-[#fcb600] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center]">
              <img src={icon2} alt="" />
            </div>
            <a className="text-[15px] text-white" href="#">
              Maxsulotlar
            </a>
          </div>
          <div className="flex items-center gap-2 pl-[36px]">
            <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
              <img src={icon3} alt="" />
            </div>
            <a className="text-[15px] text-[#2d3a45]" href="#">
              Kategoriyalar
            </a>
          </div>
          <div className="flex items-center gap-2 pl-[36px]">
            <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
              <img src={icon4} alt="" />
            </div>
            <a className="text-[15px] text-[#2d3a45]" href="#">
              Filiallar
            </a>
          </div>
          <div className="flex items-center gap-2 pl-[36px]">
            <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
              <img src={icon5} alt="" />
            </div>
            <a className="text-[15px] text-[#2d3a45]" href="#">
              Mijozlar
            </a>
          </div>
          <div className="flex items-center gap-2 pl-[36px]">
            <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
              <img src={icon6} alt="" />
            </div>
            <a className="text-[15px] text-[#2d3a45]" href="#">
              Xisobot
            </a>
          </div>
          <div className="flex items-center gap-2 pl-[36px]">
            <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
              <img src={icon7} alt="" />
            </div>
            <a className="text-[15px] text-[#2d3a45]" href="#">
              Katalog
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 pl-[36px] mt-[100px]">
        <div className="bg-[#f6f6f6] rounded-[6px] w-[36px] h-[36px] flex items-center justify-center">
          <img src={icon8} alt="" />
        </div>
        <a className="text-[15px] text-[#2d3a45]" href="#">
          Chiqish
        </a>
      </div>
    </div>
  );
}

export default Dashboard