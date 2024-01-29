import React from "react";
import Users1 from "../../Assets/Images/Users1.png";
import Users2 from "../../Assets/Images/Users2.png";
import Users3 from "../../Assets/Images/Users3.png";
import message from "../../Assets/Images/message.png";
import Photo1 from "../../Assets/Images/Photo1.png";
import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import add_new from "../../Assets/Images/add-new-card.png";
import "./Card.css";

export default function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id1"></div>
        </div>
        <div className="card-title">
          Old fashioned recipe for preventing allergies and chemical
          sensitivities
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users1} alt="users1" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              34
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              14
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              34
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id2"></div>
          <div className="card-id card-id3"></div>
          <div className="card-id card-id6"></div>
          <div className="card-id card-id4"></div>
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
            <img src={Users2} alt="users2" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              23
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              12
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
          <img src={Photo1} alt="photo1" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id5"></div>
        </div>
        <div className="card-title">
          Cosmetic surgery abroad making the right choice
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users3} alt="users3" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              54
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              16
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              33
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container new">
        <img src={add_new} alt="add_new" style={{ width: "280px" }} />
      </div>
    </>
  );
}
