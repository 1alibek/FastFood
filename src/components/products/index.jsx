import React, { useState } from "react";
//images
import plyus from "../../assets/icons/+.svg";
import group from "../../assets/img/Group 2.png";

//icons
import { CiSearch } from "react-icons/ci";

const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  

  return (
    <div>
      <header className="h-[80px] flex gap-8">
        <div
          className="flex gap-2 items-center border-x-2 border-gray-300 px-10 py-5 cursor-pointer"
          onClick={toggleAddProduct}
        >
          <div className="w-[36px] h-[36px] rounded-full bg-[#20d472] flex items-center justify-center">
            <img src={plyus} alt="" />
          </div>
          <p className="font-medium text-[12px]">
            Yangi maxsulot <br /> qo’shish
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex px-4 justify-between w-[300px] ml-8 items-center bg-[#edeff3] rounded-[24px] py-2">
            <input type="text" placeholder="Qidirish" />
            <CiSearch />
          </div>
          <img src={group} alt="" />
        </div>
      </header>
      <main className="bg-[#edeff3] w-full h-[100vh] border border-gray-100">
        <div className="py-2 bg-white flex items-center justify-around mt-6">
          <p className="text-[11px] font-bold">Maxsulot</p>
          <p className="text-[11px] font-bold border-l-2 border-gray-300 pl-2">
            Kategoriya
          </p>
          <p className="text-[11px] font-bold border-l-2 border-gray-300 pl-2">
            Narxi
          </p>
          <p className="text-[11px] font-bold border-l-2 border-gray-300 pl-2">
            Qo’shimcha
          </p>
          <p className="text-[11px] font-bold border-l-2 border-gray-300 pl-2">
            ACTION
          </p>
        </div>
        {showAddProduct && (
          <div className="fixed inset-0  flex justify-end transition-opacity duration-300 ease-in-out">
            <div className="bg-white w-1/3 h-full p-6 transform transition-transform duration-300 ease-in-out translate-x-0">
              <h2 className="text-lg font-bold mb-4">
                Yangi Maxsulot Qo'shish
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Maxsulot Nomi
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Kategoriya
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Narxi
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Qo'shimcha Ma'lumot
                  </label>
                  <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={toggleAddProduct}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="bg-[#20d472] text-white px-4 py-2 rounded-md"
                  >
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
