import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Card = ({ id, image, title, price }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
            <figure className="relative pt-6 px-6">
                <Link to={`/product/${id}`} className="w-full flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                <button className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <CiHeart size={24} className="text-error" />
                </button>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold uppercase">{title}</h2>
                <div className="card-actions justify-between items-center mt-4">
                    <div>
                        <p className="text-xl font-bold">{price.toLocaleString()} </p>
                    </div>

                    <button className="btn btn-outline btn-success hover:text-white px-6">Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
