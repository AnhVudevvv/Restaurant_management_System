import React, { useState } from "react";
import "./index.css";
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
const TableManagement = () => {



    const [selectedTable, setSelectedTable] = useState<typeof tableStatus[0] | null>(null);
    const [showOrder, setShowOrder] = useState(false);

    const handleTableClick = (table: any) => {
        setSelectedTable(table);
        if (table.status === "using") {
            setShowOrder(true);
        } else {
            setShowOrder(false);
        }
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
                        <img className="back" src={arrowRight} alt=""  onClick={handleBackClick}/>
                        <div className="back-text">Quay lại</div>
                    </div>
                    <div className="tm-main-content">
                        <div className="tm-left">
                            {/* Danh mục các món */}

                            <section className="tm-section tm-menu">
                                <div className="tm-card tm-menu-card">
                                    <div className="tm-menu-header">
                                        <div className="tm-menu-title">Danh mục các món</div>
                                        <div className="tm-search">
                                            <img className="tm-search-icon" src={search_alt} alt="" />
                                            <input className="tm-search-input" placeholder="Nhập tên món ăn..." />
                                        </div>
                                    </div>

                                    <div className="tm-menu-filters">
                                        <button className="tm-filter active">Tất cả</button>
                                        <button className="tm-filter">Đồ nhậu</button>
                                        <button className="tm-filter">Lẩu</button>
                                        <button className="tm-filter">Đồ nướng</button>
                                        <button className="tm-filter">Đồ uống</button>
                                        <div className="tm-filter-spacer" />

                                    </div>
                                    <div className="tm-menu-prev-next">
                                        <button className="tm-filter nav prev">◀</button>
                                        <button className="tm-filter nav next">▶</button>
                                    </div>

                                    <div className="tm-menu-list">
                                        {menuItems.map(item => (
                                            <div className="tm-menu-item" key={item.id}>
                                                <img className="tm-menu-img" src={item.image} alt={item.name} />
                                                <div className="tm-menu-info">
                                                    <div className="tm-menu-name">{item.name}</div>
                                                    {item.note && <div className="tm-menu-note">{item.note}</div>}
                                                    <div className="tm-menu-bottom">
                                                        <span className="tm-menu-price">
                                                            {item.currency} {item.price}
                                                        </span>
                                                        <button className="tm-menu-add-btn">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Chọn bàn */}
                            <section className="tm-section tm-tables">
                                <div className="tm-card2 tm-table-card">
                                    <div className="tm-table-header">
                                        <div className="tm-table-title">
                                            Chọn bàn
                                            <div className="tm-table-shift">
                                                <div className="tm-table-text"> Ca: </div>
                                                <div className="box-span"><span className="span1">Tối</span></div>
                                            </div>
                                        </div>
                                        <div className="tm-floor">
                                            <button className="tm-floor-btn">Tầng 1 ▾</button>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <div className="tm-table-stats">
                                            <div>Đang trống: <b>{tableStatus.filter(t => t.status === 'free').length}</b></div>
                                            <div>Đang dùng: <b>{tableStatus.filter(t => t.status === 'using').length}</b></div>
                                            <div>Đặt trước: <b>{tableStatus.filter(t => t.status === 'reserved').length}</b></div>
                                        </div>
                                        <div className="tm-table-selected">
                                            <span className="tm-table-selected-label">Đang chọn:</span>
                                            <span className="tm-table-selected-badge">{selectedTable ? selectedTable.name : ""}</span>
                                        </div>
                                    </div>
                                    <div className="tm-table-grid">
                                        {tableStatus.slice(0, 24).map((table) => (
                                            <button
                                                key={table.id}
                                                className={`tm-table-cell ${table.status} ${selectedTable && selectedTable.id === table.id ? "selected" : ""}`}
                                                onClick={() => handleTableClick(table)}
                                            >
                                                {table.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </section>
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
                                <button className="tm-prev-order">
                                    <img className="img-arrow" src={arrowRight} alt="" />
                                    <div className="text">Đơn hàng trước đó</div>
                                </button>
                            </div>

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