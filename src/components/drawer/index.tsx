import React from "react";
import { Drawer } from "antd";
import "./style.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Order = {
  id: string;
  table: string;
  time: string; // hh:mm:ss
  date: string; // dd/mm/yyyy
  price: number;
  paid?: boolean;
};

const sampleOrders: Order[] = [
  { id: "ORD98", table: "Bàn: 1", time: "18:09:22", date: "19/08/2025", price: 400000, paid: true },
  { id: "ORD97", table: "Bàn: 2", time: "17:50:12", date: "19/08/2025", price: 250000 },
  { id: "ORD96", table: "Bàn: 1", time: "17:09:22", date: "19/08/2025", price: 400000, paid: true },
  { id: "ORD95", table: "Bàn: 3", time: "16:20:11", date: "19/08/2025", price: 120000 },
  { id: "ORD94", table: "Bàn: 1", time: "15:05:06", date: "19/08/2025", price: 400000 },
  { id: "ORD93", table: "Bàn: 4", time: "14:33:09", date: "19/08/2025", price: 300000, paid: true },
];

const formatVND = (v: number) => v.toLocaleString("vi-VN") + "đ";

export default function SearchOrdersDrawer({ open, onClose }: Props) {
  return (
    <Drawer
      title={null}
      closable={false}
      onClose={onClose}
      open={open}
      placement="right"
      width={360}
      bodyStyle={{ padding: 0 }}
      className="search-drawer-antd"
    >
      <div className="search-drawer">
        <div className="sd-header">
          <h3 className="sd-title">Tìm kiếm đơn hàng</h3>

          <div className="sd-search-row">
            <div className="sd-input-wrap">
              <span className="sd-search-icon">🔍</span>
              <input className="sd-search-input" placeholder="Tìm theo mã, khách hàng, bàn..." />
            </div>
          </div>

          <div className="sd-filters">
            <button className="sd-date-btn">📅 19/08/2025</button>

            <div className="sd-time-badges">
              <span className="sd-time-badge sd-time-badge--orange">17:09:22</span>
              <span className="sd-time-badge sd-time-badge--red">18:09:22</span>
            </div>
          </div>
        </div>

        <div className="sd-body">
          <div className="sd-section-title">Gần đây</div>

          <div className="sd-list">
            {sampleOrders.map((o, idx) => (
              <div className="sd-order-card" key={idx}>
                <div className="sd-order-left">
                  <div className="sd-order-top">
                    <div className="sd-order-id">{o.id}</div>
                    <div className="sd-order-badge">{o.table}</div>
                    <div className="sd-order-date">{o.date}</div>
                  </div>
                  <div className="sd-order-time">{o.time}</div>
                </div>

                <div className="sd-order-right">
                  {o.paid && (
                    <div className="sd-paid-icon" title="Đã thanh toán">
                      ✓
                    </div>
                  )}
                  <div className="sd-order-price">{formatVND(o.price)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
}
