import mongoose  from "mongoose";

const reviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    username: {
        type: String,
    },
    rating: Number,
    comment: String,
},{
    timestamps: true

});
const Review = mongoose.model("Review", reviewSchema);

export default Review;