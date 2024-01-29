import brackets from "../../Assets/Images/Brackets.png";
import logo from "../../Assets/Images/Logo.png";
import board from "../../Assets/Images/board.png";
import line from "../../Assets/Images/line.png";
import searchbar from "../../Assets/Images/searchbar.png";
import icons from "../../Assets/Images/Icons.png";
import User from "../../Assets/Images/User.png";
import Heart from "../../Assets/Images/Heart.png";
import Public from "../../Assets/Images/Public.png";
import Hard from "../../Assets/Images/Hard.png";
import menu from "../../Assets/Images/Users-menu.png";
import Menu from "../../Assets/Images/Menu.png";
import search_mobile from "../../Assets/Images/search-mobile.png";
import Boards from "../../Assets/Images/Boards.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <section className="nav">
        <div className="nav-container">
          <div className="new-nav">
            <div className="nav-disp-btn">
              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={logo} alt="logo" />
              </div>
              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={line} alt="line" style={{ padding: "0 20px" }} />
              </div>
              <div className="nav-disp-icon nav-disp-drop">
                <img src={board} alt="boardimg" />
              </div>

              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={Boards} alt="boardimg" style={{ height: "15px" }} />
              </div>
              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={line} alt="line" style={{ padding: "0 20px" }} />
              </div>

              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={searchbar} alt="searchbar" />
              </div>
              <div className="nav-disp-icon nav-disp-drop mobile">
                <img src={search_mobile} alt="searchmobile" />
              </div>
            </div>

            <div className="nav-disp-btn menu-bar">
              <div className="nav-disp-icon nav-disp-drop">
                <img src={icons} alt="icons" />
              </div>
              <div className="nav-disp-icon nav-disp-drop">
                <img src={User} alt="user" />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ color: "#F4F4F4" }} />

        <div className="nav-container">
          <div className="new-nav">
            <div className="nav-disp-btn">
              <div className="nav-disp-icon nav-disp-drop">
                <img src={brackets} alt="icon" />
              </div>
              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={Heart} alt="heart" style={{ paddingLeft: "60px" }} />
              </div>
              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={Public} alt="public" />
              </div>
              <div className="nav-disp-icon nav-disp-drop desktop">
                <img src={Hard} alt="hard" />
              </div>
            </div>

            <div className="nav-disp-btn desktop">
              <div className="nav-disp-icon nav-disp-drop">
                <img src={menu} alt="menu" />
              </div>
              <div className="nav-disp-icon nav-disp-drop">
                <img src={Menu} alt="Menu" />
              </div>
            </div>
          </div>
          <div className="new-nav mobile">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="nav-disp-btn">
                <div className="nav-disp-icon nav-disp-drop">
                  <img src={Heart} alt="heart" />
                </div>
                <div className="nav-disp-icon nav-disp-drop">
                  <img src={Public} alt="public" />
                </div>
                <div className="nav-disp-icon nav-disp-drop">
                  <img src={Hard} alt="hard" />
                </div>
              </div>

              <div className="nav-disp-btn">
                <div className="nav-disp-icon nav-disp-drop">
                  <img src={menu} alt="menu" />
                </div>
                <div className="nav-disp-icon nav-disp-drop">
                  <img src={Menu} alt="Menu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
