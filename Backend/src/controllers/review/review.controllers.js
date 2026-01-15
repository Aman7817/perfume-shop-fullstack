import Review from "../../models/review/reviewSchema.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

/*
  desc    Get reviews of a product
  route   GET /api/v1/reviews/:productId
 */
const getReviewsByProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    const reviews = await Review.find({ productId });

    return res.status(200).json(
        new ApiResponse(
            200,
            reviews,
            "Reviews fetched successfully"
        )
    );
});

/*
 
   desc    Add a review
   route   POST /api/v1/reviews/add
 */
const addReview = asyncHandler(async (req, res) => {
    const { productId, username, rating, comment } = req.body;

    if (!productId || !rating) {
        throw new ApiError(400, "productId and rating are required");
    }

    const review = await Review.create({
        productId,
        username,
        rating,
        comment
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            review,
            "Review added successfully"
        )
    );
});

export {
    getReviewsByProduct,
    addReview
};
