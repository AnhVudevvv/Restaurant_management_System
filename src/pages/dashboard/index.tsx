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



const Dashboard = () => {
    return (
        <div>

            <div className="p">
                <span className="span" >ShineWay</span> - Hệ thống hỗ trợ vận hành nhà hàng
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>Xuất/Nhập kho</div>
                            <img src={expandDown} alt="" />
                        </div>
                        <div><img src={dateToDay} alt="" /></div>
                    </div>
                    <div>
                        <div>Ngày: <span style={{color:"#0088ff"}}>10/08/2025</span></div>
                        <div>Nhập kho: <span style={{color:"red"}}>1.090.000đ</span></div>
                        <div>Xuất kho: <span style={{color:"green"}}>520.000đ</span></div>
                        <img src={bieuDo} alt="" />
                    </div>
                    <div>Chi tiết
                        <img src={expandDownDouble} alt="" />
                    </div>
                </div>
                <div></div>
                <div>
                    <div>Tất cả ứng dụng</div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>Doanh thu</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Thực đơn</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Hạ tầng</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Lương</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Kho</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>Cài đặt</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Nhân sự</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Hóa đơn</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Phản hồi</div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>Ca làm</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard;