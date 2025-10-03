import React, { useState } from "react";
import "./style.css";
import vector from "../../assets/images/Vector 9.png";
import clock_duotone from "../../assets/images/Clock_duotone.png";
import datetoday from "../../assets/images/Date_today.png";
import arrowRight from "../../assets/images/Arrow_right.png";
import search_alt from "../../assets/images/Search_alt.png";
import { menuItems } from "./menuData";
import { tableStatus } from "./tableStatus";
import { TableStatus } from "./tableStatus";
import { useNavigate } from "react-router-dom";
import Order from "../../components/order";
import Category from "../../components/category";
import ChoseDesk from "../../components/choseDesk";
import { Drawer } from "antd";
import SearchOrdersDrawer from "../../components/drawer";
const TableManagement = () => {



    const [selectedTable, setSelectedTable] = useState<typeof tableStatus[0] | null>(null);
    const [showOrder, setShowOrder] = useState(false);
    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };



    const navigate = useNavigate();
    const handleBackClick = () => {

        navigate("/"); // Quay lại trang trước đó
    }
    return (

        <div className="tm-page">

            <div className="tm-layout">
                {/* LEFT COLUMN */}
                <div className="tm-main">
                    <div className="tm-back">
                        <img className="back" src={arrowRight} alt="" onClick={handleBackClick} />
                        <div className="back-text">Quay lại</div>
                    </div>
                    <div className="tm-main-content">
                        <div className="tm-left">
                            {/* Danh mục các món */}
                            <Category menuItems={menuItems} />


                            {/* Chọn bàn */}
                            <ChoseDesk
                                tableStatus={tableStatus}
                                selectedTable={selectedTable}
                                setSelectedTable={setSelectedTable}
                                setShowOrder={setShowOrder}
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <aside className="tm-right">
                            <div className="tm-right-top">
                                <div className="tm-datebox">
                                    <div className="tm-date-row">
                                        {/* <span className="tm-ico cal" /> */}
                                        <img className="tm-ico clock" src={datetoday} alt="" />
                                        <span className="span">19/08/2025</span>
                                    </div>
                                    <div className="tm-date-row">
                                        {/* <span className="tm-ico clock" /> */}
                                        <img className="tm-ico clock" src={clock_duotone} alt="" />
                                        <span className="span">20:20:85</span>
                                    </div>
                                </div>
                                <button onClick={showDrawer } className="tm-prev-order">
                                    <img className="img-arrow" src={arrowRight} alt="" />
                                    <div className="text">Đơn hàng trước đó</div>
                                </button>
                            </div>
                            <SearchOrdersDrawer open={open} onClose={onClose} />

                            {showOrder ? (
                                <Order selectedTable={selectedTable} menuItems={menuItems} />
                            ) : (
                                <div className="tm-card1 tm-order-card">
                                    <div className="tm-order-title">Đơn hàng</div>
                                    <div className="tm-order-empty">Vui lòng chọn bàn để bắt đầu tạo đơn hàng</div>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableManagement;