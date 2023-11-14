import { AiFillStar } from "react-icons/ai";

const getArrayFromRating = (number) => {
  const array = [];
  for (let i = 0; i < number; i += 1) {
    array.push(i);
  }
  return array;
};

export const Review = ({ rating, text }) => {
  return (
    <article className="review">
      <div className="review-stars">
        {getArrayFromRating(rating).map((star) => (
          <AiFillStar key={`${text}${star}${rating}`} />
        ))}
      </div>
      <span>{text}</span>
    </article>
  );
};
