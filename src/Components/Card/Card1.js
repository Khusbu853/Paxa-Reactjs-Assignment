import React from "react";
import Users4 from "../../Assets/Images/Users4.png";
import Users5 from "../../Assets/Images/Users5.png";
import Users6 from "../../Assets/Images/Users6.png";
import message from "../../Assets/Images/message.png";
import Photo2 from "../../Assets/Images/Photo2.png";
import Photo3 from "../../Assets/Images/Photo3.png";
import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import "./Card.css";

export default function Card() {
  return (
    <>
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
            <img src={Users4} alt="users4" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              76
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              45
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              12
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <img src={Photo2} alt="photo2" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id1"></div>
          <div className="card-id card-id5" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">
          Unmatched toner cartridge quality 20 less than oem price
        </div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Why read motivational sayings? For motivation! You might need a bit,
          if you can use last year’s list of goals this year because it’s as
          good as new.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users5} alt="users5" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              76
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              32
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              66
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <img src={Photo3} alt="photo3" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id4" style={{ marginLeft: "0px" }}></div>
        </div>
        <div className="card-title">How to look up</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Are you considering buying a compatible inkjet cartridge for your
          printer?
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users6} alt="users6" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              54
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              76
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              11
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
