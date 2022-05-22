import React from "react";
import { Slide, Zoom } from "react-reveal";
import "./_modal.scss";
function Modal({ shower, setShower, url }) {
  return (
    <Zoom center>
      <div className="modal__box">
        <div className="box">
          <div className="modal">
            <div className="modal__head">
              <h2 onClick={() => setShower(!shower)}>X</h2>
              <div className="modal__head--draw"></div>
            </div>
            <div className="modal__body">{url}</div>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default Modal;
