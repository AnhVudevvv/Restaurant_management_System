import React from "react";
import search_alt from "../../assets/images/Search_alt.png";
import { ImenuItem } from "../../pages/tableManagement/menuData";

interface CategoryProps {
    menuItems: ImenuItem[];
}
const Category = ({ menuItems }: CategoryProps) => {
    return (

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
    )
}

export default Category;