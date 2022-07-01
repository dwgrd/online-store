import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import style from "./StarRating.module.css";
import { useParams } from "react-router-dom";
import { getOneRating } from "../../http/ratingApi";

const StarRating = observer(({ addRate }) => {
  const { user } = useContext(Context);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getOneRating(id).then((data) => setRating(data.rate));
  }, []);
  return (
    <div>
      {user.isAuth ? (
        <div>
          {[...Array(5)].map((star, index) => {
            index += 1;

            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? style.on : style.off}
                onClick={() => {
                  setRating(index);
                  addRate(index);
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div>Вы не авторизованы чтобы оценивать этот продукт!</div>
      )}
    </div>
  );
});

export default StarRating;
