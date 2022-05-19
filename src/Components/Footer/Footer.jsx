import React from "react";
import "./_footer.scss";
import "../main.scss";
import p1 from "../../Assets/images/footer-img-1.png";
import p2 from "../../Assets/images/footer-img-2.png";
import p3 from "../../Assets/images/footer-img-3.png";
function Footer() {
  return (
    <div className="footer__box">
      <section className="footer container">
        <div className="footer__head">
          <img className="footer__head--img--1" src={p2} alt="" />
          <img className="footer__head--img--2" src={p1} alt="" />
          <img className="footer__head--img--3" src={p3} alt="" />
        </div>
        <div className="footer__body">
          <h2 className="footer__body--title">Hali ham savollaringiz bormi?</h2>
          <p className="footer__body--parag">
            Savollaringizga javob topa olmasangiz biz bilan bog’laning
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
