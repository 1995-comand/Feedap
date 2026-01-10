import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching product details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <span className="loading loading-spinner text-white loading-lg"></span>
            </div>
        );
    }

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-base-100 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row h-[80vh] md:h-auto">
      
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost text-base-content/50 hover:bg-base-200 z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="w-full md:w-1/2 bg-base-200/50 flex items-center justify-center p-8 relative">
                    <button className="absolute top-4 right-4 text-error">
                        <CiHeart size={24} />
                    </button>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px]"
                    />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-base-content">{product.title}</h2>
                    <p className="text-base-content/70 mb-6 text-sm leading-relaxed">
                        {product.description}
                    </p>

                    <div className="text-3xl font-bold mb-6 text-base-content">${(product.price * count).toLocaleString()}</div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-base-300 rounded-lg px-2 py-1">
                            <button
                                className="btn btn-sm btn-ghost text-xl text-error"
                                onClick={() => setCount(Math.max(1, count - 1))}
                            >-</button>
                            <span className="mx-4 font-bold text-lg text-base-content">{count}</span>
                            <button
                                className="btn btn-sm btn-ghost text-xl text-success"
                                onClick={() => setCount(count + 1)}
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
