import "./_header.scss";
import "../main.scss";
import React, { useState } from "react";
import logo from "../../Assets/images/logo.png";
import mainImg from "../../Assets/images/mainImg.png";
import headIMg1 from "../../Assets/images/headImg-1.png";
import headIMg2 from "../../Assets/images/headImg-2.png";
import headIMg3 from "../../Assets/images/headImg-3.png";
import headIMg4 from "../../Assets/images/headImg-4.png";
import headIMg5 from "../../Assets/images/headImg-5.PNG";
import headIMg6 from "../../Assets/images/headImg-6.png";
// import headIMg7 from "../../Assets/images/headImg-7.PNG";
import headIMg8 from "../../Assets/images/headImg-8.png";
import headIMg9 from "../../Assets/images/headImg-9.png";
import headIMg11 from "../../Assets/images/headImg-11.png";
import headIMg12 from "../../Assets/images/headImg-12.png";
import star from "../../Assets/images/icon-8.png";
import human from "../../Assets/images/icon-3.png";
import savdo from "../../Assets/images/icon-5.png";

import Modal from "../../UI/Modal/Modal";
function Header() {
  const [shower, setShower] = useState(false);
  const url = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/A6uEgYa2B74"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
  return (
    <div className="header__box">
      <section className="header">
        <div className="">
          <div className="header__nav">
            <div className="header__nav--logo">
              <img src={logo} alt="" />
            </div>
            <a className="header__nav--number" href="tel:917880101">
              91 778 01 01
            </a>
          </div>
          <div className="header__main">
            <div className="header__main--left">
              <p className="header__main--left--parag--1">
                Diqqatingizni
                <b>
                  {" "}
                  biznesingizdagi <br /> eng muhim ishlarga qarating. <br />
                </b>
                Qolgan ishlarni avtomatlashtiring
              </p>
              <p className="header__main--left--parag--2">
                Barcha biznes jarayonlarini yagona platforma orqali nazorat
                qiling. Basco ERP platformasi bilan samaradorligingiz oshib,
                xarajatlaringiz kamayadi.
              </p>

              <a
                onClick={() => setShower(true)}
                className="header__main--left--buttons--1"
                href="#aa"
              >
                Demo videoni ko`rish
              </a>
              <a href="#dd" className="header__main--left--buttons--2">
                Telefonda suhbat belgilash
              </a>
            </div>
            <div className="header__main--right">
              <img className="img-1" src={mainImg} alt="" />
              <img className="img-2" src={headIMg1} alt="" />
              <img className="img-3" src={headIMg2} alt="" />
              {/* <img className="img-4" src={headIMg3} alt="" /> */}
              <img className="img-5" src={headIMg4} alt="" />
              <img className="img-6" src={headIMg5} alt="" />
              <img className="img-7" src={headIMg6} alt="" />
              <img className="img-9" src={headIMg8} alt="" />
              <img className="img-10" src={headIMg9} alt="" />
              <img className="img-11" src={headIMg11} alt="" />
              <img className="img-12" src={headIMg12} alt="" />

              <div className="header__main--right--buttons--1">
                <div className="header__main--right--buttons--1--left">
                  <img src={star} alt="star-imag" />
                </div>
                <div className="header__main--right--buttons--1--right">
                  <a href="#ss">Rahbar bo`limi</a>
                </div>
              </div>

              <div className="header__main--right--buttons--human">
                <div className="header__main--right--buttons--human--2">
                  <div className="header__main--right--buttons--human--2--left">
                    <img src={human} alt="star-imag" />
                  </div>
                  <div className="header__main--right--buttons--human--2--right">
                    <a href="#ss">HR bo`limi</a>
                  </div>
                </div>
              </div>
              <div className="header__main--right--buttons--savdo">
                <div className="header__main--right--buttons--savdo--2">
                  <div className="header__main--right--buttons--savdo--2--left">
                    <img src={savdo} alt="star-imag" />
                  </div>
                  <div className="header__main--right--buttons--savdo--2--right">
                    <a href="#ss">Savdo bo`limi</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {shower ? (
          <Modal shower={shower} setShower={setShower} url={url} />
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Header;
