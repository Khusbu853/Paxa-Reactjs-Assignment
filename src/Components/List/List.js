import React from "react";
import "./List.css";
import Card from "../Card/Card";

export default function List() {
  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            <div className="list-title">Design</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item"></div>
            <div className="list-option-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="list-card-items">
          <Card />
        </div>
      </div>
    </>
  );
}
