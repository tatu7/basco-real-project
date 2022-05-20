import "./_suggestions.scss";
import "../main.scss";
import blog1 from "../../Assets/images/blog11.jpg";
import blog2 from "../../Assets/images/blog12.jpg";
import blog3 from "../../Assets/images/blog13.jpg";
import video1 from "../../Assets/images/video1.jpg";
import video2 from "../../Assets/images/video2.jpg";
import video3 from "../../Assets/images/video3.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
const Suggestions = () => {
  const url3 = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/HWSP8oZaEjw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
  const url2 = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4aRMt7tGwyE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
  const url1 = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0e7yWIryWGQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
  const [clicked, setClicked] = useState(1);
  const [clickVideo1, setClickVideo1] = useState(false);
  const [clickVideo2, setClickVideo2] = useState(false);
  const [clickVideo3, setClickVideo3] = useState(false);
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
            {clicked === 1 ? (
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
                    <NavLink
                      to="/blog1"
                      style={{ textDecoration: "none" }}
                      className="suggestions-middle-card__subject"
                    >
                      Bunga ishonmagan bo’lardingiz
                    </NavLink>

                    <p className="suggestions-middle-card__text">
                      Birgina avtomatlashtirish orqali biznesingiz
                      samaradorligini 23% ga oshirib, xarajatlaringizni 29% ga
                      qisqartirishi mumkin ekan.
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

                    <NavLink
                      to="/blog2"
                      style={{ textDecoration: "none" }}
                      className="suggestions-middle-card__subject"
                    >
                      ERP platforformasi haqida
                    </NavLink>
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
                    <NavLink
                      to="/blog3"
                      style={{ textDecoration: "none" }}
                      className="suggestions-middle-card__subject"
                    >
                      BASCO ERP platformasi
                    </NavLink>
                    <p className="suggestions-middle-card__text">
                      Basco ERP platformasini kompaniyangizga joriy
                      qilganingizda hech narsa avvalgidek bo’lmaydi.
                    </p>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
            {clicked === 2 ? (
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
                    <NavLink
                      to="/blog1"
                      style={{ textDecoration: "none" }}
                      className="suggestions-middle-card__subject"
                    >
                      Bunga ishonmagan bo’lardingiz
                    </NavLink>

                    <p className="suggestions-middle-card__text">
                      Birgina avtomatlashtirish orqali biznesingiz
                      samaradorligini 23% ga oshirib, xarajatlaringizni 29% ga
                      qisqartirishi mumkin ekan.
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

                    <NavLink
                      to="/blog2"
                      style={{ textDecoration: "none" }}
                      className="suggestions-middle-card__subject"
                    >
                      ERP platforformasi haqida
                    </NavLink>
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
                    <NavLink
                      to="/blog3"
                      style={{ textDecoration: "none" }}
                      className="suggestions-middle-card__subject"
                    >
                      BASCO ERP platformasi
                    </NavLink>
                    <p className="suggestions-middle-card__text">
                      Basco ERP platformasini kompaniyangizga joriy
                      qilganingizda hech narsa avvalgidek bo’lmaydi.
                    </p>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
            {clicked === 3 ? (
              <ul className="suggestions-middle__list">
                <li className="suggestions-middle__item">
                  <div className="suggestions-middle__card">
                    <div className="suggestions-middle-card__box">
                      <img
                        src={video1}
                        alt="trade"
                        className="suggestions-middle-card__img"
                      />
                    </div>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setClickVideo1(!clickVideo1)}
                      className="suggestions-middle-card__subject"
                    >
                      "BASCO" kompaniyasi "BIG DATA" bilan xamkorlikda seminar
                      jarayonlari
                    </h2>
                  </div>
                </li>
                <li className="suggestions-middle__item">
                  <div className="suggestions-middle__card">
                    <div className="suggestions-middle-card__box">
                      <img
                        src={video2}
                        alt="trade"
                        className="suggestions-middle-card__img"
                      />
                    </div>

                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setClickVideo2(!clickVideo2)}
                      className="suggestions-middle-card__subject"
                    >
                      Ko'p vaqt oladigan va taxminiy hisob-kitoblardan
                      charchadingizmi?
                    </h2>
                  </div>
                </li>
                <li className="suggestions-middle__item">
                  <div className="suggestions-middle__card">
                    <div className="suggestions-middle-card__box">
                      <img
                        src={video3}
                        alt="trade"
                        className="suggestions-middle-card__img"
                      />
                    </div>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setClickVideo3(!clickVideo3)}
                      className="suggestions-middle-card__subject"
                    >
                      Biznesingizdagi muammolarga echim qidirib charchadingizmi?
                    </h2>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        {clickVideo1 ? (
          <Modal shower={clickVideo1} setShower={setClickVideo1} url={url3} />
        ) : (
          ""
        )}
        {clickVideo2 ? (
          <Modal shower={clickVideo2} setShower={setClickVideo2} url={url2} />
        ) : (
          ""
        )}
        {clickVideo3 ? (
          <Modal shower={clickVideo3} setShower={setClickVideo3} url={url1} />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default Suggestions;
