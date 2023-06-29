import { Review } from "./Review"
import { reviews } from "../data"
import { useIntersectionObserver } from "../hooks"

export const ReviewWrapper = () => {
    const { ref, visible } = useIntersectionObserver()

    return (
        <div
        ref={ref}
        className={`reviews-wrapper ${visible ? "visible" : "hidden"}`}>
            {reviews.map((review) =>
            <Review
            key={`review${review.id}`}
            rating={review.rating}
            text={review.text}/>)}
        </div>
    )
}
