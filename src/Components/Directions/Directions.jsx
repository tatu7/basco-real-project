import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiOutlineRight } from "react-icons/ai";
import ".././main.scss";
import "./_directions.scss";
import trade from "../../Assets/images/icon-2.png";
import resource from "../../Assets/images/icon-3.png";
import house from "../../Assets/images/icon-6.png";
import star from "../../Assets/images/icon-8.png";
import setting from "../../Assets/images/icon-7.png";
import saveMoney from "../../Assets/images/icon-4.png";
import kluch from "../../Assets/images/icon-1.png";
import money from "../../Assets/images/icon-5.png";
import persons from "../../Assets/images/persons.png";
import auto from "../../Assets/images/auto.png";
import maosh from "../../Assets/images/maosh.png";
import moliya from "../../Assets/images/moliya.png";
import sss from "../../Assets/images/sss.png";
import work from "../../Assets/images/work.png";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "auto",
    zIndex: "2000",
    padding: "3rem",
  },
};
const bolim1Title = "Rahbar bo’limi";
const bolim2Title = "CRM boʼlimi";
const bolim3Title = "Savdo boʼlimi";
const bolim4Title = "HR boʼlimi";
const bolim5Title = "Maosh bo’limi";
const bolim6Title = "Kassa bo’limi";
const bolim7Title = "Nazorat bo’limi";
const bolim8Title = "Sklad bo’limi";
const bolim9Title = "Ta’minot bo’limi";
const bolim10Title = "Turli shaxslar bo’limi";
const bolim11Title = "Asosiy vositalar bo’limi";
const bolim12Title = "Ishlab chiqarish bo’limi";
const bolim13Title = "Buxgalteriya bo’limi";
const bolim1Parag =
  "Rahbar uchun barcha imkoniyatlar bir joyda. Rahbar sifatida sizning vaqtingiz tejaladi, samaradorlik oshadi.Undan tashqari rahbar sifatida siz kompaniyangiz balansini to’laqonli ko’ra olasiz.Dasturning har bir bo’limi o’zaro bog’liq holda ishlagani sababli barcha foydalanuvchilar ma’lumotlarni o’z vaqtida kiritib borishlari talab etiladi. Natijada hisobotlar to’g’ri va aniq yuritiladi.Rahbar sifatida har bir bo’limda ishlar qanday ketayotganligini to’liq ko’ra olasiz. Bu esa kompaniyangiz jarayonlarini tahlil qilish va rivojlantirish imkoniyatini beradi.";
const bolim2Parag = "";
const bolim3Parag = "";
const bolim4Parag = "";
const bolim5Parag = "";
const bolim6Parag = "";
const bolim7Parag = "";
const bolim8Parag = "";
const bolim9Parag = "";
const bolim10Parag = "";
const bolim11Parag = "";
const bolim12Parag = "";
const bolim13Parag = "";
function Directions() {
  const [clicked, setClicked] = useState(0);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [shower, setShower] = useState(false);
  return (
    <>
      <section className="directions">
        <div className=" container">
          <div className="directions-top">
            <h3 className="directions-top__subject">
              Basco ERP platforma yo'nalishlari
            </h3>
            <p className="directions-top__text">
              Basco ERP platformasining yo’nalishlari - biznesingizning barcha
              bo'limlari uchun yagona komplex yechim
            </p>
          </div>
          <div className="directions-middle">
            <ul className="directions-middle__list">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--1">
                    <img
                      src={kluch}
                      alt="trade"
                      className="directions-middle-card__img "
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    CRM boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Mijozlar bilan munosabat- larni boshqarishni avtomat-
                    lashtirish uchun qulay va optimal yondashuv
                  </p>
                  <button
                    className="directions-middle-card__btn directions-middle-card__btn--1"
                    onClick={() => {
                      openModal();
                      setClicked(1);
                    }}
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--2">
                    <img
                      src={trade}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Savdo boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(2);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--2"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--3">
                    <img
                      src={resource}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    HR boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                    ostingizda!
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(3);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--3"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={sss}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ta’minot bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                    beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                    imkoniyati.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(4);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--4"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--5">
                    <img
                      src={money}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Kassa boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                    ishonchli yuritilishi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(5);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--5"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--6">
                    <img
                      src={house}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Sklad boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                    qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(6);
                    }}
                    className="directions-middle-card__btn  directions-middle-card__btn--6"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--7">
                    <img src={setting} alt="trade" className=" " />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Nazorat boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Korxona ichki qonun-qoida-lari va tartibi nazoratini yagona
                    baza orqali nazorat qilish imkoniyatini beradi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(7);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--7"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={star}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Rahbar boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar sifatida
                    sizning vaqtingiz ejaladi, samaradorlik oshadi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(8);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--8"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {shower ? (
            <div className="directions-middle">
              <ul className="directions-middle__list">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box  directions-middle-card__box--4  sariq">
                      <img
                        width={62}
                        height={62}
                        src={persons}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Turli shaxslar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Turli shaxslar bilan ishlash samaradorligi sezilarli
                      darajada oshadi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(9);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--9"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--2"
                    >
                      <img
                        src={auto}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Asosiy vositalar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Barcha asosiy vositalarning hisob-kitoblari, eskirishi
                      hamda ularni sotishdan olinadigan foyda va zararlar yagona
                      joyda.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(10);
                      }}
                      className="directions-middle-card__btn"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--5"
                    >
                      <img
                        src={work}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish bo’limi;
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(11);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--5"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--6"
                    >
                      <img
                        src={moliya}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Buxgalteriya bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniya real daromadi va xarajatlarini, bankdagi
                      operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                      xarajatlarni doim nazorat qilib borish imkoniyati paydo
                      boʻladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(12);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--6"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item directions__items">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--3"
                    >
                      <img
                        src={maosh}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(13);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--3"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="directions-bottom">
            <button
              onClick={() => setShower(!shower)}
              className="directions-bottom__btn"
            >
              {shower ? "Yopish" : " Barcha bo`limlar"}
            </button>
          </div>
          {/* /////////////////////////////////////////////// */}
          <Splide
            className="directions__splide"
            aria-label="My Favorite Images"
          >
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--1">
                      <img
                        src={kluch}
                        alt="trade"
                        className="directions-middle-card__img "
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--1">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--2">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Savdo boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--2">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--3">
                      <img
                        src={resource}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      HR boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                      ostingizda!
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--3">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--1">
                      <img
                        src={sss}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ta’minot bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                      beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                      imkoniyati.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--4">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>

            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--5">
                      <img
                        src={money}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Kassa boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                      ishonchli yuritilishi
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--5">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--6">
                      <img
                        src={house}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Sklad boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                      qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                    </p>
                    <button className="directions-middle-card__btn  directions-middle-card__btn--6">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--7">
                      <img src={setting} alt="trade" className=" " />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Nazorat boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Korxona ichki qonun-qoida-lari va tartibi nazoratini
                      yagona baza orqali nazorat qilish imkoniyatini beradi
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--7">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--8">
                      <img
                        src={star}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Rahbar boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar
                      sifatida sizning vaqtingiz ejaladi, samaradorlik oshadi.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--8">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box  directions-middle-card__box--4">
                      <img
                        width={62}
                        height={62}
                        src={persons}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Turli shaxslar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Turli shaxslar bilan ishlash samaradorligi sezilarli
                      darajada oshadi.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--9  ">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--2"
                    >
                      <img
                        src={auto}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Asosiy vositalar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Barcha asosiy vositalarning hisob-kitoblari, eskirishi
                      hamda ularni sotishdan olinadigan foyda va zararlar yagona
                      joyda.
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>

            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--5"
                    >
                      <img
                        src={work}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish bo’limi;
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--5">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--6"
                    >
                      <img
                        src={moliya}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Buxgalteriya bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniya real daromadi va xarajatlarini, bankdagi
                      operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                      xarajatlarni doim nazorat qilib borish imkoniyati paydo
                      boʻladi.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--6">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title directions__titles">
                <li className="directions-middle__item directions__items">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--3"
                    >
                      <img
                        src={maosh}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--3">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
          </Splide>
          {/* ////////////////////////////////////// */}
          <Splide
            className="directions__splides"
            aria-label="My Favorite Images"
          >
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--1">
                    <img
                      src={kluch}
                      alt="trade"
                      className="directions-middle-card__img "
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    CRM boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Mijozlar bilan munosabat- larni boshqarishni avtomat-
                    lashtirish uchun qulay va optimal yondashuv
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--1">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--2">
                    <img
                      src={trade}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Savdo boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--2">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--3">
                    <img
                      src={resource}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    HR boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                    ostingizda!
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--3">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--4">
                    <img
                      src={saveMoney}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Hisob-kitob boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Xodimlarning maoshi va kompaniyaning hisob-kitobi uchun
                    optimal yondashuv
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--9">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={sss}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ta’minot bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                    beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                    imkoniyati.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--4">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--5">
                    <img
                      src={money}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Kassa boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                    ishonchli yuritilishi
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--5">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--6">
                    <img
                      src={house}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Sklad boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                    qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                  </p>
                  <button className="directions-middle-card__btn  directions-middle-card__btn--6">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--7">
                    <img src={setting} alt="trade" className=" " />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Nazorat boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Korxona ichki qonun-qoida-lari va tartibi nazoratini yagona
                    baza orqali nazorat qilish imkoniyatini beradi
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--7">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={star}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Rahbar boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar sifatida
                    sizning vaqtingiz ejaladi, samaradorlik oshadi.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--8">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box  directions-middle-card__box--4">
                    <img
                      width={62}
                      height={62}
                      src={persons}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Turli shaxslar bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Turli shaxslar bilan ishlash samaradorligi sezilarli
                    darajada oshadi.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--9">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>

            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--2"
                  >
                    <img
                      src={auto}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Asosiy vositalar bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Barcha asosiy vositalarning hisob-kitoblari, eskirishi hamda
                    ularni sotishdan olinadigan foyda va zararlar yagona joyda.
                  </p>
                  <button className="directions-middle-card__btn ">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--5"
                  >
                    <img
                      src={work}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ishlab chiqarish bo’limi;
                  </h3>
                  <p className="directions-middle-card__text">
                    Ishlab chiqarish bo’limi orqali kompaniya ishlab chiqarishda
                    bo’layotgan ortiqcha xarajatlarni ko’ra oladi hamda real
                    ishlab chiqarishni to’g’ri nazorat qila oladi.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--5">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--6"
                  >
                    <img
                      src={moliya}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Buxgalteriya bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniya real daromadi va xarajatlarini, bankdagi
                    operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                    xarajatlarni doim nazorat qilib borish imkoniyati paydo
                    boʻladi.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--6">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>

            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item directions__items">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--3"
                  >
                    <img
                      src={maosh}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ishlab chiqarish bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Ishlab chiqarish bo’limi orqali kompaniya ishlab chiqarishda
                    bo’layotgan ortiqcha xarajatlarni ko’ra oladi hamda real
                    ishlab chiqarishni to’g’ri nazorat qila oladi.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--3">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
          </Splide>

          <Modal
            // className="directions__modal"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className="directions__modal-name">
              {clicked === 1
                ? bolim1Title
                : clicked === 2
                ? bolim2Title
                : clicked === 3
                ? bolim3Title
                : clicked === 4
                ? bolim4Title
                : clicked === 5
                ? bolim5Title
                : clicked === 6
                ? bolim6Title
                : clicked === 7
                ? bolim7Title
                : clicked === 8
                ? bolim8Title
                : clicked === 9
                ? bolim9Title
                : clicked === 10
                ? bolim10Title
                : clicked === 11
                ? bolim11Title
                : clicked === 12
                ? bolim12Title
                : clicked === 13
                ? bolim13Title
                : ""}
            </h2>
            <p className="directions__modal-text">
              {clicked === 1
                ? bolim1Parag
                : clicked === 2
                ? bolim2Parag
                : clicked === 3
                ? bolim3Parag
                : clicked === 4
                ? bolim4Parag
                : clicked === 5
                ? bolim5Parag
                : clicked === 6
                ? bolim6Parag
                : clicked === 7
                ? bolim7Parag
                : clicked === 8
                ? bolim8Parag
                : clicked === 9
                ? bolim9Parag
                : clicked === 10
                ? bolim10Parag
                : clicked === 11
                ? bolim11Parag
                : clicked === 12
                ? bolim12Parag
                : clicked === 13
                ? bolim13Parag
                : ""}
            </p>

            <button className="directions__modal-btn" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Directions;
