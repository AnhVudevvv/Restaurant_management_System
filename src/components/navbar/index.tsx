import React from "react";
import "./index.css"
import search from "../../assets/images/Search_alt.png"
import userCirle from "../../assets/images/User_cicrle.png"
import question from "../../assets/images/Question.png"
import bellpin from "../../assets/images/Bell_pin.png"
import menu from "../../assets/images/Menu.png"
import { useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
  const path = location.pathname; 

  const roleLabel = path.startsWith("/tableManagement") ? "Bồi bàn" : "Admin";
    return (
        <div className="navbar">
            <div className="container">
                <div className="left-section" style={{ display: "flex", alignItems: "center" }}>
                    <div className="text-title">ShineWay</div>
                    <div className="search-box">
                        <img className="search" src={search} alt="" />
                    </div>
                </div>

                <div className="right-section">
                    <div className="user-box">
                        <div className="user-img">
                            <img src={userCirle} alt="" />
                        </div>
                        <div>
                            <div className="name">Nguyễn Văn A</div>
                            <div className="b-admin">
                                <div className="admin-txt">{roleLabel}</div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="box-menu">
                        <img className="question" src={question} alt="" />
                        <img className="bellpin" src={bellpin} alt="" />
                        <img className="menu" src={menu} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;