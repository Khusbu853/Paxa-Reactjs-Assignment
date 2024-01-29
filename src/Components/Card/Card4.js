import React from "react";
import Users4 from "../../Assets/Images/Users4.png";
import Users13 from "../../Assets/Images/Users13.png";
import Users14 from "../../Assets/Images/Users14.png";
import message from "../../Assets/Images/message.png";
import Photo6 from "../../Assets/Images/Photo6.png";
import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import "./Card.css";

export default function Card4() {
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id1"></div>
          <div className="card-id card-id3"></div>
          <div className="card-id card-id6"></div>
        </div>
        <div className="card-title">
          At home treatments for beauty on a budget
        </div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          The holidays bring with them thoughts of carving and serving delicious
          turkey dinners to your family and friends. Tradition has its fans, but
          perhaps this year you’d like to try a twist to your turkey recipe.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users4} alt="users4" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              87
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              54
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              32
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id6" style={{ marginLeft: "0px" }}></div>
          <div className="card-id card-id4" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">Home business advertising ideas</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Successful businesses know the importance of building and maintaining
          good working.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users13} alt="users13" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              13
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              11
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              43
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <img src={Photo6} alt="photo6" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id5" style={{ marginLeft: "0px" }}></div>
          <div className="card-id1" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">
          Tips for choosing the perfect gloss for your lips
        </div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          With MySpace becoming more popular every day, there is the constant
          need to be different. There are millions of users.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users14} alt="users14" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              21
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              23
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              12
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
