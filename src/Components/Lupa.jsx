import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Lupa = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://feedup-o1vg.onrender.com/product/all");
                if (!res.ok) throw new Error("Xatolik yuz berdi!");
                const data = await res.json();
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <IoSearchSharp />
            </button>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <h1 className="font-bold text-lg">Our most delicious!</h1>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <label className="input w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            className=""
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>

                    <div className="mt-4 max-h-60 overflow-y-auto">
                        {loading && <p>Yuklanmoqda...</p>}
                        {error && <p>Xatolik: {error}</p>}
                        {!loading && !error && filteredProducts.length === 0 && <p>Hech nima topilmadi</p>}
                        <ul>
                            {filteredProducts.map((product) => (
                                <div>
                                    <ul className="menu bg-base-200 rounded-box w-56 p-4">
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
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Lupa;
