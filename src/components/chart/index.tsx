import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartArea,
  Plugin
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

// Plugin tô nền vùng chart (chartArea)
const chartAreaBackground: Plugin<"line"> = {
  id: "chartAreaBackground",
  beforeDraw: (chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;
    const { left, top, right, bottom } = chartArea as ChartArea;
    ctx.save();
    ctx.fillStyle = "#edf5fb"; // xanh nhạt
    ctx.fillRect(left, top, right - left, bottom - top);
    ctx.restore();
  },
};

const labels = [
  "19/7/2025", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "19/8/2025"
];

const data = {
  labels,
  datasets: [
    {
      label: "Xanh",
      data: [0, 3, 2, 6, 1.5, 2.2, 3.1, 4.5, 6.2, 6.0, 5.8, 6.6], // tuỳ bạn chỉnh
      borderColor: "#2ecc71",
      backgroundColor: "#2ecc71",
      pointRadius: 0,
      borderWidth: 2,
      tension: 0.35,
      fill: false
    },
    {
      label: "Đỏ",
      data: [1.5, 4.2, 2.8, 1.2, 7.2, 6.6, 6.0, 6.8], // tuỳ bạn chỉnh
      borderColor: "#e74c3c",
      backgroundColor: "#e74c3c",
      pointRadius: 0,
      borderWidth: 2,
      tension: 0.35,
      fill: false
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  layout: { padding: { top: 8, right: 8 } },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        // Bắt buộc nhãn nằm ngang:
        maxRotation: 0,
        minRotation: 0,
        // tắt auto skip nếu bạn muốn callback tự kiểm soát nhãn
        autoSkip: false,
        // Chỉ hiện nhãn ở 2 đầu như hình (vẫn dùng callback)
        callback: (val, index) => {
          if (index === 0) return (labels[0] as string);
          if (index === labels.length - 1) return (labels[labels.length - 1] as string);
          return "";
        },
        font: { weight: "bold" },
        padding: 6
      },
      border: { display: true }, // trục X đậm
    },
    y: {
      grid: { color: "#dfe7ef" },
      ticks: {
        display: false, // ẩn nhãn trục Y để giống hình mẫu
      },
      border: { display: true },
      beginAtZero: true,
    },
  },
  elements: {
    point: { radius: 0 },
    line: { borderJoinStyle: "round" },
  },
};

const LineComparison: React.FC = () => {
  return (
    <div className="w-full" style={{ height: 180 }}>
      <Line data={data} options={options} plugins={[chartAreaBackground]} />
    </div>
  );
};

export default LineComparison;
