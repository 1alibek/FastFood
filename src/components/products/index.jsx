import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//images
import plyus from "../../assets/icons/+.svg";
import group from "../../assets/img/Group 2.png";
import burger from "../../assets/icons/burger.svg";

//icons
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [userData, setUserData] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputExtra, setInputExtra] = useState("");

  const FechData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FechData();
  }, []);

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
    if (!showAddProduct) {
      setInputName("");
      setInputCategory("");
      setInputPrice("");
      setInputExtra("");
    }
  };

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/products`,
        {
          productName: inputName,
          category: inputCategory,
          price: inputPrice,
          extra: inputExtra,
        }
      );
      console.log("Malumot qo'shildi:", response.data);
      toast.success("Malumot muvaffaqiyatli qo'shildi!");
      toggleAddProduct();
      FechData();
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi: Ma'lumot qo'shilmadi!");
    }
  };

  const handleDeleteProduct = async (ids) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/products/${ids}`
      );
      console.log("Malumot o'chirildi:", response.data);
      toast.success("Malumot muvaffaqiyatli o'chirildi!");
      FechData();
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi: Ma'lumot o'chirilmadi!");
    }
  };

  return (
    <div>
      <ToastContainer />
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
        <div className="py-2 bg-white grid grid-cols-5 pl-12 mt-6">
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
          <p className="text-[11px] font-bold border-l-2 border-gray-300 pl-2 ml-12">
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
                    onChange={(e) => setInputName(e.target.value)}
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Kategoriya
                  </label>
                  <input
                    onChange={(e) => setInputCategory(e.target.value)}
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Narxi
                  </label>
                  <input
                    onChange={(e) => setInputPrice(e.target.value)}
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Qo'shimcha Ma'lumot
                  </label>
                  <input
                    onChange={(e) => setInputExtra(e.target.value)}
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
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
                    onClick={handleCreateProduct}
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

        <div>
          {userData.map((value) => {
            return (
              <div key={value.id}>
                <div className="grid grid-cols-5 pl-12 bg-white py-2 mt-3 ">
                  <div className="flex items-center gap-4">
                    <img src={burger} alt="" />
                    <h1>{value.productName}</h1>
                  </div>
                  <h1>{value.category}</h1>
                  <h1>{value.price} UZS</h1>
                  <h1>{value.extra}</h1>
                  <div className="flex items-center gap-4 pl-12">
                    <MdOutlineEdit />
                    <button onClick={() => handleDeleteProduct(value.id)}>
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Products;
