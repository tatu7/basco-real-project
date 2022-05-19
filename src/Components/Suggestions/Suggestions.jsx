import "./_suggestions.scss";
import "../main.scss";
import blog1 from "../../Assets/images/blog-1.jpg";
import blog2 from "../../Assets/images/blog-2.jpg";
import blog3 from "../../Assets/images/blog-3.jpg";
import { useState } from "react";
const Suggestions = () => {
  const [clicked, setClicked] = useState(1);
  return (
    <div className="suggestions__box">
      <section className="suggestions">
        <div className=" ">
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
                    Bunga ishonmagan bo’lardingiz
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Birgina avtomatlashtirish orqali biznesingiz samaradorligini
                    23% ga oshirib, xarajatlaringizni 29% ga qisqartirishi
                    mumkin ekan.
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
                    ERP platforformasi haqida
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Siz eng tez rivojlanib borayotgan ishlab chiqarish
                    kompaniyalarning sirini fosh qildingiz! Bu - ERP
                    platformasi.
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
                    BASCO ERP platformasi
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Basco ERP platformasini kompaniyangizga joriy qilganingizda
                    hech narsa avvalgidek bo’lmaydi.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Suggestions;
