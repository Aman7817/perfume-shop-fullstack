import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 font-bold">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
