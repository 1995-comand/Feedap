import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";

const Menyu = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://feedup-o1vg.onrender.com/product/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        
        const uniqueCategories = [
          "all",
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);


  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex">
   
      <ul className="menu bg-base-200 rounded-box w-56 p-4">
        <li className="menu-title">Menyu</li>

        {categories.map((cat) => (
          <li
            key={cat}
            className={`hover:bg-error ${
              activeCategory === cat ? "bg-error text-white" : ""
            }`}
          >
            <a onClick={() => setActiveCategory(cat)}>
              {cat === "all" ? "Barchasi" : cat}
            </a>
          </li>
        ))}
      </ul>

    
      <div className="min-h-screen  p-6 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-md cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="flex justify-end">
                <FaRegHeart className="text-red-500" />
              </div>

              <img
                src={product.pictures?.[0]}
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
                Qo'shish
              </button>
            </div>
          ))}
        </div>
      </div>

      
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selectedProduct.pictures?.[0]}
                alt={selectedProduct.title}
                className="w-full md:w-1/2 h-64 object-contain"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {selectedProduct.title}
                </h2>
                <p className="mt-2 text-gray-700">
                  {selectedProduct.description}
                </p>
                <p className="mt-4 text-3xl font-bold text-green-600">
                  {selectedProduct.price * 1000} so'm
                </p>
                <button className="mt-6 w-full rounded-xl border border-green-600 py-2 text-green-600 hover:bg-green-600 hover:text-white transition">
                  Savatga
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menyu;
