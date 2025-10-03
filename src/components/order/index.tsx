import React, { useState, useMemo } from "react";
import "./style.css";
import { ImenuItem } from "../../pages/tableManagement/menuData";
import { TableStatus } from "../../pages/tableManagement/tableStatus";
import { Modal, Select, Button, Drawer } from "antd";
interface InvoiceProps {
    selectedTable: TableStatus | null;
    menuItems: ImenuItem[];
}

const formatVND = (v: number) => v.toLocaleString("vi-VN");

const Order = ({ selectedTable, menuItems }: InvoiceProps) => {

    const initialQty = useMemo(
        () =>
            menuItems.reduce((acc, it) => {
                acc[String(it.id)] = 1;
                return acc;
            }, {} as Record<string, number>),
        [menuItems]
    );
    const parsePrice = (p: number | string): number => {
  if (typeof p === "number") return p;
  if (!p) return 0;
  // loại bỏ ký tự không phải số (giữ dấu âm nếu có)
  const cleaned = String(p).replace(/[^0-9\-]+/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
};
    const [qty, setQty] = useState<Record<string, number>>(initialQty);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = React.useState(false);
    const [paymentOption, setPaymentOption] = React.useState("cash");

    const handleChangePayment = (value: string) => {
        setPaymentOption(value);
    };
    const increase = (id: number) =>
        setQty((s) => ({ ...s, [String(id)]: (s[String(id)] ?? 0) + 1 }));
    const decrease = (id: number) =>
        setQty((s) => ({ ...s, [String(id)]: Math.max(1, (s[String(id)] ?? 1) - 1) }));

    const subTotal = menuItems.reduce((sum, it) => {
        const priceNum = parsePrice((it as any).price); // nếu price có type khác thì vẫn an toàn
        const count = qty[String(it.id)] ?? 1;
        return sum + priceNum * count;
    }, 0);
    // giữ giá trị giảm giá cứng nếu bạn muốn
    const discountValue = 30000;

    // clamp total >= 0 để không ra số âm
    const total = Math.max(0, subTotal - discountValue);
    // renderFirstStep: Bước chọn phương thức
    const renderFirstStep = () => {
        return (
            <div className="pm-step pm-step-choose">
                <p className="pm-subtitle">Vui lòng chọn phương thức thanh toán</p>

                <div className="pm-row">
                    <select
                        className="pm-select"
                        value={paymentOption}
                        onChange={(e) => handleChangePayment(e.target.value)}
                    >
                        <option value="cash">Tiền mặt</option>
                        <option value="credit_card">Chuyển khoản</option>
                    </select>
                </div>

                <div className="pm-actions">
                    <button
                        className="pm-btn pm-btn-outline"
                        onClick={() => {
                            setIsModalOpen(false);
                            setStep(0);
                        }}
                    >
                        Hủy
                    </button>

                    <button
                        className="pm-btn pm-btn-primary"
                        onClick={() => setStep(1)}
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        );
    };

    // renderSecondStep: Bước hiển thị QR / xác nhận (quét mã)
    const renderSecondStep = () => {
        return (
            <div className="pm-step pm-step-qr">
                <div className="pm-row">
                    <select className="pm-select" value={"your_order"} >
                        <option value="your_order">Đơn hàng của bạn</option>
                    </select>
                </div>

                <p className="pm-center pm-subtitle muted">Vui lòng quét mã để thanh toán:</p>

                <div className="pm-qr-box">
                    <div className="pm-qr-text">MÃ QR ở đây</div>
                </div>

                <div className="pm-total-row">
                    <span>Tổng :</span>
                    <span className="pm-total-amount">{total ? total.toLocaleString() + "đ" : formatVND(430000)}</span>
                </div>

                <div className="pm-actions">
                    <button
                        className="pm-btn pm-btn-outline"
                        onClick={() => {
                            setIsModalOpen(false);
                            setStep(0);
                        }}
                    >
                        Hủy
                    </button>

                    <button
                        className="pm-btn pm-btn-primary"
                        onClick={() => {
                            // => gọi api / xử lý thanh toán thực tế tại đây
                            // mô phỏng kết quả: giả sử thành công nếu paymentOption === 'cash'
                            const simulatedSuccess = paymentOption === "cash" ? true : true;
                            setIsPaymentSuccessful(simulatedSuccess);
                            setStep(2);
                        }}
                    >
                        Thanh toán
                    </button>
                </div>
            </div>
        );
    };

    // renderThirdSuccessStep: Bước kết quả (thành công / thất bại)
    const renderThirdSuccessStep = () => {
        return (
            <div className="pm-step pm-step-result">
                <div className="pm-row">
                    <select className="pm-select" value={"your_order"} >
                        <option value="your_order">Đơn hàng của bạn</option>
                    </select>
                </div>

                <div className="pm-center">
                    {isPaymentSuccessful ? (
                        <>
                            <div className="pm-success-text">Thanh toán thành công!</div>
                            <svg className="pm-icon" width="120" height="120" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" stroke="#2e9b48" strokeWidth="6" fill="rgba(46,155,72,0.06)" />
                                <path d="M40 62 L52 74 L80 42" stroke="#2e9b48" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </>
                    ) : (
                        <>
                            <div className="pm-fail-text">Thanh toán thất bại</div>
                            <svg className="pm-icon" width="120" height="120" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" stroke="#ff4d4d" strokeWidth="6" fill="rgba(255,77,77,0.04)" />
                                <path d="M42 42 L78 78 M78 42 L42 78" stroke="#ff4d4d" strokeWidth="6" strokeLinecap="round" />
                            </svg>
                        </>
                    )}
                </div>

                <div className="pm-total-row" style={{ marginTop: 8 }}>
                    <span>Tổng :</span>
                    <span className="pm-total-amount">{total ? total.toLocaleString() + "đ" : formatVND(430000)}</span>
                </div>

                <div className="pm-actions">
                    {!isPaymentSuccessful && (
                        <button
                            className="pm-btn pm-btn-outline"
                            onClick={() => setStep(1)}
                        >
                            Thử lại
                        </button>
                    )}

                    <button
                        className="pm-btn pm-btn-primary"
                        onClick={() => {
                            setStep(0);
                            setIsModalOpen(false);
                            setIsPaymentSuccessful(false);
                        }}
                    >
                        Thoát
                    </button>
                </div>
            </div>
        );
    };


    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className="tm-card tm-order-card">
            <div className="tm-order-title">Đơn hàng</div>

            <div className="tm-order-content">

                <div className="tm-order-info-left">
                    <div className="info-row"><span className="label">Ngày tạo đơn:</span><span className="value">19/08/2025</span></div>
                    <div className="info-row"><span className="label">Thời điểm:</span><span className="value">20:08:45</span></div>
                    <div className="info-row"><span className="label">Khách hàng:</span><span className="value">Lê Thị C</span></div>
                    <div className="info-row"><span className="label">Nhân viên:</span><span className="value">Trần Văn B</span></div>
                    <div className="info-row">
                        <span className="label">Bàn:</span>
                        <span className="value">
                            <span className="table-badge">{selectedTable ? selectedTable.name : "—"}</span>
                        </span>
                    </div>
                </div>



                {menuItems.map((item) => (
                    <div key={item.id} className="tm-order-item">
                        <img className="item-image" src={item.image} alt={item.name} />
                        <div className="item-details">
                            <div className="item-meta">
                                <div className="item-name">
                                    {item.name}
                                    <span className="small-price">{" - "}{formatVND(item.price)}đ</span>
                                </div>
                            </div>

                            <div className="quantity-control">
                                <button className="qty-btn" onClick={() => decrease(item.id)}>−</button>
                                <div className="qty-num">{qty[item.id] || 1}</div>
                                <button className="qty-btn" onClick={() => increase(item.id)}>+</button>
                            </div>
                        </div>

                        <div className="item-line-total">
                            {formatVND(item.price * (qty[item.id] || 1))}đ
                        </div>
                    </div>
                ))}



                <div className="summary-row">
                    <div>Tạm tính:</div>
                    <div className="muted">{formatVND(subTotal)}đ</div>
                </div>
                <div className="summary-row">
                    <div>Giảm giá: <span className="coupon-pill">XVYZ6H</span></div>
                    <div className="discount">-{formatVND(discountValue)}đ</div>
                </div>
                <div className="summary-row total">
                    <div>Tổng:</div>
                    <div className="total-amount">1.076,96đ</div>
                </div>
                <div className="summary-row">
                    <div>Phương thức thanh toán:</div>
                    <div className="muted">chưa có</div>
                </div>



            </div>
            <div className="tm-order-footer">
                <div className="tm-order-actions top-actions">
                    <button className="btn-outline">Lưu</button>
                    <button className="btn-outline">Hủy</button>
                </div>

                <div className="tm-order-actions bottom-actions">
                    <button className="btn-green">Xuất hóa đơn</button>
                    <button onClick={() => setIsModalOpen(true)} className="btn-red">Thanh Toán</button>
                    <div>
                        <Modal
                            title={step === 0 ? "Thanh toan don hang" : "Thanh toan"}
                            open={isModalOpen}
                            closeIcon={true}
                            footer={null}
                            onOk={() => setIsModalOpen(false)}
                            onCancel={() => setIsModalOpen(false)}>
                            {step === 0
                                ? renderFirstStep()
                                : step === 1
                                    ? renderSecondStep()
                                    : renderThirdSuccessStep()}
                        </Modal>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Order;
