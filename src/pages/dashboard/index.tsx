import React from "react";
import "./index.css"
import expandDown from "../../assets/images/Expand_down.png"
import dateToDay from "../../assets/images/Date_today.png"
import bieuDo from "../../assets/images/Rectangle 4737.png"
import waterFall from "../../assets/images/Waterfall.png"
import bookFill from "../../assets/images/Book_fill.png"
import layerFill from "../../assets/images/Layers_fill.png"
import chartPin from "../../assets/images/Chart_pin.png"
import arhive from "../../assets/images/Arhive_alt_big_duotone.png"
import setting from "../../assets/images/Setting_line_duotone.png"
import group from "../../assets/images/Group_light.png"
import printLight from "../../assets/images/Print_light.png"
import chatFill from "../../assets/images/Chat_fill.png"
import horizontal from "../../assets/images/Horizontal_down_left_main.png"
import expandDownDouble from "../../assets/images/Expand_down_double.png"
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

     const navigate = useNavigate();
    const handleOclick=()=>{

        navigate("/tableManagement");
    }
    return (
        <div className="container1">

            <div className="p">
                <span className="span-dashboard" >ShineWay</span> - Hệ thống hỗ trợ vận hành nhà hàng
            </div>
            <div className="large-box">
                <div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="xuatNhap-box">
                            <div className="your-class-name">Xuất/Nhập kho</div>
                            <img className="expandDown" src={expandDown} alt="" />
                        </div >
                        <div className="date-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img src={dateToDay} alt="" /></div>
                    </div>
                    <div className="to-box" style={{ marginTop: "20px" }}>
                        <div className="nho-box">
                            <div style={{ paddingTop: "15px", paddingLeft: "15px" }} >
                                <div style={{ width: 107, height: 15, font: "inter", fontWeight: 700, fontSize: 12, lineHeight: "100%", letterSpacing: "0%" }}>Ngày: <span style={{ color: "#0088ff" }}>10/08/2025</span></div>
                                <div style={{ width: 173, height: 15, font: "inter", fontWeight: 700, fontSize: 12, lineHeight: "100%", letterSpacing: "0%" }}>Nhập kho: <span style={{ color: "red" }}>1.090.000đ</span></div>
                                <div style={{ width: 173, height: 15, font: "inter", fontWeight: 700, fontSize: 12, lineHeight: "100%", letterSpacing: "0%" }}>Xuất kho: <span style={{ color: "green" }}>520.000đ</span></div>
                                <img style={{ margin: 20 }} src={bieuDo} alt="" />
                            </div>
                        </div>
                        <div className="text-box">Chi tiết
                            <img src={expandDownDouble} alt="" />
                        </div>
                    </div>
                </div>
                <div className="line2"></div>
                <div className="right-panel">
                    <div className="apps-header">Tất cả ứng dụng</div>
                    <div className="apps-grid">
                        <div  className="app-ngoai" onClick={handleOclick} >
                            <div className="app-card"><img src={waterFall} alt="Doanh thu" /></div>
                            <div className="app-title">Doanh thu</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={bookFill} alt="Thực đơn" /></div>
                            <div className="app-title">Thực đơn</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={layerFill} alt="Hạ tầng" /></div>
                            <div className="app-title">Hạ tầng</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={chartPin} alt="Lương" /></div>
                            <div className="app-title">Lương</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={arhive} alt="Kho" /></div>
                            <div className="app-title">Kho</div>
                        </div>
                        <div  className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={setting} alt="Cài đặt" /></div>
                            <div className="app-title">Cài đặt</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={group} alt="Nhân sự" /></div>
                            <div className="app-title">Nhân sự</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={printLight} alt="Hóa đơn" /></div>
                            <div className="app-title">Hóa đơn</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={chatFill} alt="Phản hồi" /></div>
                            <div className="app-title">Phản hồi</div>
                        </div>
                        <div className="app-ngoai" onClick={handleOclick}>
                            <div className="app-card"><img src={horizontal} alt="Ca làm" /></div>
                            <div className="app-title">Ca làm</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;