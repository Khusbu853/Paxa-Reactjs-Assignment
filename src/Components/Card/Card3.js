import React from "react";
import Users9 from "../../Assets/Images/Users9.png";
import Users10 from "../../Assets/Images/Users10.png";
import Users11 from "../../Assets/Images/Users11.png";
import Users12 from "../../Assets/Images/Users12.png";
import message from "../../Assets/Images/message.png";
import Photo5 from "../../Assets/Images/Photo5.png";
import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import "./Card.css";

export default function Card3() {
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id5"></div>
          <div className="card-id card-id3"></div>
        </div>
        <div className="card-title">Linux or windows which is it</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Saving money – is something we would all like.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users9} alt="users9" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              32
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              87
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              31
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <img src={Photo5} alt="photo5" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id6"></div>
          <div className="card-id card-id3"></div>
          <div className="card-id card-id5" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">Be single minded</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Create a list with all possible keywords that fit to your product,
          service or business field.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users10} alt="users10" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              21
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              34
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              17
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id1"></div>
        </div>
        <div className="card-title">Linux or windows which is it</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Saving money – is something we would all like.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users11} alt="users11" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              55
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              23
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              19
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id2"></div>
          <div className="card-id card-id4"></div>
        </div>
        <div className="card-title">Dna the future of nutrition</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          “Why does anyone want a vasectomy reversal?” This is a question I hear
          any time I tell someone what I do for a living.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users12} alt="users12" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              12
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              33
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              66
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
