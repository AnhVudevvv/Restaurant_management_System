import { Modal } from "antd";
import { menuItems } from "../../pages/tableManagement/menuData";
import { tableStatus } from "../../pages/tableManagement/tableStatus";
import { useState } from "react";
import { ImenuItem } from "../../pages/tableManagement/menuData";
import { TableStatus } from "../../pages/tableManagement/tableStatus";

interface InvoiceProps {
  selectedTable: TableStatus;
  menuItems: ImenuItem[];
}
const Order = ({ selectedTable, menuItems }: InvoiceProps) => {
  return (
    <div className="tm-card tm-order-card">
                                        <div className="tm-order-title">Đơn hàng</div>
                                        <div className="tm-order-content">
                                            <div className="tm-order-info">
                                                <div>Ngày tạo đơn: 19/08/2025</div>
                                                <div>Thời điểm: 20:08:45</div>
                                                <div>Khách hàng: Lại Thị C</div>
                                                <div>Nhân viên: Trần Văn B</div>
                                                <div>Bàn: {selectedTable ? selectedTable.name : ""}</div>
                                            </div>
                                            <div className="tm-order-list">
                                                {menuItems.map((item, idx) => (
                                                    <div key={item.id} className="tm-order-item">
                                                        <img src={item.image} alt={item.name} style={{ width: 40, height: 40, borderRadius: 8, marginRight: 8 }} />
                                                        <div>
                                                            <div style={{ fontWeight: 700 }}>{item.name}</div>
                                                            <div style={{ fontSize: 13, color: "#888" }}>{item.currency} {item.price}</div>
                                                        </div>
                                                        <div style={{ marginLeft: "auto", fontWeight: 700, color: "#0088ff" }}>1</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="tm-order-total" style={{ marginTop: 16, fontWeight: 700, fontSize: 18, color: "#43a047" }}>
                                                Tổng: {menuItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}đ
                                            </div>
                                            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                                                <button style={{ background: "#43a047", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontWeight: 700 }}>Xuất hóa đơn</button>
                                                <button style={{ background: "#ff2d2d", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontWeight: 700 }}>Thanh Toán</button>
                                            </div>
                                        </div>
                                    </div>
  );   
};

export default Order;
