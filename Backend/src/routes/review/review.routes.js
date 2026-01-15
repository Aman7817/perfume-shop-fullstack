import { Router } from "express";
import { addReview, getReviewsByProduct } from "../../controllers/review/review.controllers.js";

const router = Router();

router.route("/:productId").get(getReviewsByProduct);
router.route("/add").post(addReview)

export default router;