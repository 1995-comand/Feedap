import React from "react";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
const Menyu = () => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
       <div className="flex">
      <ul className="menu bg-base-200 rounded-box w-56 ">
        <li className="menu-title">Menyu</li>
        <li className="hover:bg-error"><a>Kombolar</a></li>
        <li className="hover:bg-error"><a>Lavash</a></li>
        <li className="hover:bg-error"><a>Burger</a></li>
        <li className="hover:bg-error"><a>Hot-Dog</a></li>
        <li className="hover:bg-error"><a>Sendvich</a></li>
        <li className="hover:bg-error"><a>Donar</a></li>
        <li className="hover:bg-error"><a>Salatlar</a></li>
        <li className="hover:bg-error"><a>Sous</a></li>
        <li className="hover:bg-error"><a>Mafin</a></li>
        <li className="hover:bg-error"><a>Kofe</a></li>
        <li className="hover:bg-error"><a>Garnirlar</a></li>
        <li className="hover:bg-error"><a>Ichimliklar</a></li>
        <li className="hover:bg-error"><a>Qo'shimchalar</a></li>

        
      </ul>
     
        <div>
             <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-4 shadow-md"
          >
            <div className="ml-50 "> <FaRegHeart  className="color-red "/></div>
            
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-44 object-contain"
            />

            <h3 className="mt-3 font-semibold text-lg">
              {product.title}
            </h3>

            <p className="mt-1 text-2xl font-bold">
              {product.price * 1000} so'm
            </p>

            <button className="mt-4 w-full rounded-xl border border-green-600 py-2 text-green-600 hover:bg-green-600 hover:text-white transition">
              Qoshish
            </button>
          </div>
        ))}
      </div>
    </div>  
        </div>
      </div>
    </div>

  );
};

export default Menyu;
