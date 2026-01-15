import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/API";
import ReviewForm from "./../../components/reviewForm/ReviewForm";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then(res => {
        console.log("Product detail data:", res.data.data);
        setProduct(res.data.data);
      })
      .catch(err => console.error(err));

    API.get(`/reviews/${id}`)
      .then(res => setReviews(res.data.data))
      .catch(err => console.error(err));
  }, [id]);


  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">
      {/* Images */}
      <div>
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="mb-4 rounded"
            alt="product"
          />
        ))}
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 font-bold text-xl">₹{product.price}</p>

        <button
          onClick={() => navigator.share?.({
            title: product.name,
            url: window.location.href
          })}
          className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"

        >
          Share Product
        </button>

        {/* Reviews */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          {reviews.map(r => (
            <div key={r._id} className="border-b py-2">
              <p className="font-semibold">{r.username}</p>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>

        <ReviewForm productId={id} setReviews={setReviews} />
      </div>
    </div>
  );
};

export default ProductDetail;
