import React from "react";
import { Slide, Zoom } from "react-reveal";
import "./_modal.scss";
function Modal({ shower, setShower }) {
  return (
    <Zoom center>
      <div className="box">
        <div className="modal">
          <div className="modal__head">
            <h2 onClick={() => setShower(!shower)}>X</h2>
            <div className="modal__head--draw"></div>
          </div>
          <div className="modal__body">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/A6uEgYa2B74"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default Modal;
