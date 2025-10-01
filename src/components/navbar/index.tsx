import React from "react";
import "./index.css"
import search from "../../assets/images/Search_alt.png"
import userCirle from "../../assets/images/User_cicrle.png"
import question from "../../assets/images/Question.png"
import bellpin from "../../assets/images/Bell_pin.png"
import menu from "../../assets/images/Menu.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="text-title">ShineWay</div>
                <div className="search-box">
                    <img className="search" src={search} alt="" />
                </div>
                <div className="user-box" >
                    <div className="user-img">
                        <img src={userCirle} alt="" />
                    </div>
                    <div style={{padding:10}}>
                        <div className="name">Nguyễn Văn A</div>
                        <div className="b-admin">
                            <div className="admin-txt">Admin</div>
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
    )
}

export default Navbar;