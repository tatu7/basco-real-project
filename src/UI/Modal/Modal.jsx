import React from "react";
import { Slide } from "react-reveal";
import "./_modal.scss";
function Modal({ shower, setShower }) {
  return (
    <Slide top>
      <div className="modal">
        <div className="modal__head">
          <i onClick={() => setShower(!shower)} class="fa-solid fa-xmark"></i>
          <div className="modal__head--draw"></div>
        </div>
        <div className="modal__body">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QXYMoFFQJ8k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Slide>
  );
}

export default Modal;
