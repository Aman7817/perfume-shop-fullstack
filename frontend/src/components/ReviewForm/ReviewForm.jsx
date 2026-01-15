import React from "react";
import { useState } from "react";
import API from "../../services/API";

const ReviewForm = ({ productId, setReviews }) => {
  const [form, setForm] = useState({
    username: "",
    rating: "",
    comment: "",
  });

  const submitReview = async () => {
    const res = await API.post("/reviews/add", {
      ...form,
      productId,
    });

    setReviews(prev => [...prev, res.data.data]);
    setForm({ username: "", rating: "", comment: "" });
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Add Review</h3>
      <input
        placeholder="Name"
        className="border p-2 w-full mb-2"
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Rating (1-5)"
        className="border p-2 w-full mb-2"
        value={form.rating}
        onChange={e => setForm({ ...form, rating: e.target.value })}
      />
      <textarea
        placeholder="Comment"
        className="border p-2 w-full mb-2"
        value={form.comment}
        onChange={e => setForm({ ...form, comment: e.target.value })}
      />
      <button
        onClick={submitReview}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
