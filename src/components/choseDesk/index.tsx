import React from "react";
import { tableStatus } from "../../pages/tableManagement/tableStatus";
import { TableStatus } from "../../pages/tableManagement/tableStatus";
interface ChoseDeskProps {
  tableStatus: TableStatus[];
  selectedTable: TableStatus | null;
  setSelectedTable: (table: TableStatus) => void;
  setShowOrder?: boolean | any;
}
const ChoseDesk = ({ tableStatus, selectedTable, setSelectedTable , setShowOrder }: ChoseDeskProps) => {


    const handleTableClick = (table:TableStatus) => {
        setSelectedTable(table);
        if (table.status === "using") {
            setShowOrder(true);
        } else {
            setShowOrder(false);
        }
    };

    return (

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
    )
}

export default ChoseDesk;
