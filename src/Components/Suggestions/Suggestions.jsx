import "./_suggestions.scss";
import "../main.scss";
import blog1 from "../../Assets/images/blog-1.jpg";
import blog2 from "../../Assets/images/blog-2.jpg";
import blog3 from "../../Assets/images/blog-3.jpg";
import { useState } from "react";
const Suggestions = () => {
  const [clicked, setClicked] = useState(1);
  return (
    <>
      <section className="suggestions">
        <div className=" container">
          <div className="suggestions-top">
            <ul className="suggestions-top__list">
              <li className="suggestions-top__item">
                <button
                  onClick={() => setClicked(1)}
                  className={
                    clicked === 1
                      ? "suggestions-top__btn suggestions-top__btn--active"
                      : "suggestions-top__btn"
                  }
                >
                  Blog
                </button>
                <button
                  onClick={() => setClicked(2)}
                  className={
                    clicked === 2
                      ? "suggestions-top__btn suggestions-top__btn--active"
                      : "suggestions-top__btn"
                  }
                >
                  Bepul yo'riqnoma
                </button>
                <button
                  onClick={() => setClicked(3)}
                  className={
                    clicked === 3
                      ? "suggestions-top__btn suggestions-top__btn--active"
                      : "suggestions-top__btn"
                  }
                >
                  Video
                </button>
              </li>
            </ul>
          </div>
          <div className="suggestions-middle">
            <ul className="suggestions-middle__list">
              <li className="suggestions-middle__item">
                <div className="suggestions-middle__card">
                  <div className="suggestions-middle-card__box">
                    <img
                      src={blog1}
                      alt="trade"
                      className="suggestions-middle-card__img"
                    />
                  </div>
                  <h3 className="suggestions-middle-card__subject">
                    Savdo bo’limi imkoniyatlari
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Basco ERP platformasining savdo bo’limidagi siz uchunqiziq
                    imkoniyatlar
                  </p>
                </div>
              </li>
              <li className="suggestions-middle__item">
                <div className="suggestions-middle__card">
                  <div className="suggestions-middle-card__box">
                    <img
                      src={blog2}
                      alt="trade"
                      className="suggestions-middle-card__img"
                    />
                  </div>
                  <h3 className="suggestions-middle-card__subject">
                    CRM bo’limi imkoniyatlari
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Sotuv operatorlaringiz bu imkoniyatlarni xohlagan bo’lardi
                  </p>
                </div>
              </li>
              <li className="suggestions-middle__item">
                <div className="suggestions-middle__card">
                  <div className="suggestions-middle-card__box">
                    <img
                      src={blog3}
                      alt="trade"
                      className="suggestions-middle-card__img"
                    />
                  </div>
                  <h3 className="suggestions-middle-card__subject">
                    Rahbar bo’limi imkoniyatlari
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Siz rahbarmisiz? Bu platforma bilan ortib qolgan vaqtingizni
                    nima qilishni bilmay qolasiz
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suggestions;
