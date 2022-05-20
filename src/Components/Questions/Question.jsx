import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./_questions.scss";
import "../main.scss";
import { Fade } from "react-reveal";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  let iconStyles = { color: "black", fontSize: "2em", cursor: "pointer" };
  return (
    <article className="question">
      <div className="question__box">
        <h4 className="question__subject">{title}</h4>
        <button
          className="question__btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <AiOutlineMinusCircle style={iconStyles} />
          ) : (
            <AiOutlinePlusCircle style={iconStyles} />
          )}
        </button>
      </div>
      {showInfo && (
        <Fade top>
          <p className="question__text">{info}</p>
        </Fade>
      )}
    </article>
  );
};

export default Question;
