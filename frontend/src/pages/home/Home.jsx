import React from "react";
import { useEffect, useState } from "react";
import API from "../../services/API";
import ProductCard from "./../../components/productCard/productCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/* CTA Banner */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Discover Your Signature Scent</h1>
        <p className="mt-4 text-gray-300">
          Explore our exclusive perfume collection
        </p>
      </div>

      {/* Products */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
