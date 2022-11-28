import React from "react";
import { Rating } from "semantic-ui-react";

const BookView = ({ book }) => {
  const {
    averageRating,
    ratingsCount,
    title,
    authors,
    description,
    publishedDate,
  } = book;

  return (
    <div basic className="flex text-center justify-center">
      <div className="flex flex-col justify-start">
        <h2 className="text-center text-xl font-bold pt-6">{title}</h2>
        <h3 className="text-center text-lg font-medium py-2">
          by {authors.join(", ")}
        </h3>
        <div>
          <div className="">
            <Rating
              icon="star"
              defaultRating={averageRating}
              maxRating={5}
              disabled
            />
            <span className="pl-2">{averageRating}</span>
          </div>
          <div>
            <span>{ratingsCount}</span>
            <span className="pl-1">ratings</span>
          </div>
        </div>
        <p className="w-9/12 mx-auto py-2 text-base">{description}</p>

        <p className="text-base pt-3">
          Published: <span className="font-semibold">{publishedDate}</span>
        </p>
      </div>
    </div>
  );
};

export default BookView;
