import "./_suggestions.scss";

const Suggestions = () => {
  return (
    <>
      <section className="suggestions">
        <div className=" container">
          <div className="suggestions-top">
            <ul className="suggestions-top__list">
              <li className="suggestions-top__item">
                <button className="suggestions-top__btn suggestions-top__btn--active">
                  Blog
                </button>
                <button className="suggestions-top__btn">
                  Bepul yo'riqnoma
                </button>
                <button className="suggestions-top__btn">Video</button>
              </li>
            </ul>
          </div>
          <div className="suggestions-middle">
            <ul className="suggestions-middle__list">
              <li className="suggestions-middle__item">
                <div className="suggestions-middle__card">
                  <div className="suggestions-middle-card__box">
                    <img
                      src={`https://picsum.photos/400/300?random`}
                      alt="trade"
                      className="suggestions-middle-card__img"
                    />
                  </div>
                  <h3 className="suggestions-middle-card__subject">
                    Savdo bo’limi imkoniyatlari
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Basco ERP platformasiningsavdo bo’limidagi siz uchunqiziq
                    imkoniyatlar
                  </p>
                </div>
              </li>
              <li className="suggestions-middle__item">
                <div className="suggestions-middle__card">
                  <div className="suggestions-middle-card__box">
                    <img
                      src={`https://picsum.photos/400/300?random`}
                      alt="trade"
                      className="suggestions-middle-card__img"
                    />
                  </div>
                  <h3 className="suggestions-middle-card__subject">
                    Savdo bo’limi imkoniyatlari
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Basco ERP platformasiningsavdo bo’limidagi siz uchunqiziq
                    imkoniyatlar
                  </p>
                </div>
              </li>
              <li className="suggestions-middle__item">
                <div className="suggestions-middle__card">
                  <div className="suggestions-middle-card__box">
                    <img
                      src={`https://picsum.photos/400/300?random`}
                      alt="trade"
                      className="suggestions-middle-card__img"
                    />
                  </div>
                  <h3 className="suggestions-middle-card__subject">
                    Savdo bo’limi imkoniyatlari
                  </h3>
                  <p className="suggestions-middle-card__text">
                    Basco ERP platformasiningsavdo bo’limidagi siz uchunqiziq
                    imkoniyatlar
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
