import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Coffee,
  Leaf,
  PackageCheck,
  Recycle,
  Route,
  Sprout,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type Material = {
  number: string;
  name: string;
  englishName: string;
  range: string;
  description: string;
  tone: "fiber" | "binder" | "coating";
};

export type CycleStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ValuePillar = {
  number: string;
  kicker: string;
  title: string;
  description: string;
};

export const navigation: NavigationItem[] = [
  { label: "Ý tưởng", href: "#concept" },
  { label: "Vật liệu", href: "#materials" },
  { label: "Vòng đời", href: "#cycle" },
  { label: "Đối tác F&B", href: "#partners" },
];

export const materials: Material[] = [
  {
    number: "01",
    name: "Xơ dừa",
    englishName: "Coconut fiber",
    range: "75–85% dự kiến",
    description:
      "Nguồn sợi thực vật chính, được xử lý kích thước và độ ẩm để tạo cấu trúc cho thân ly.",
    tone: "fiber",
  },
  {
    number: "02",
    name: "Chất kết dính sinh học",
    englishName: "Bio-binder",
    range: "10–15% dự kiến",
    description:
      "Thành phần liên kết các sợi thành một khối ổn định; công thức cụ thể cần được thử nghiệm.",
    tone: "binder",
  },
  {
    number: "03",
    name: "Lớp chống thấm",
    englishName: "Inner coating",
    range: "5–10% dự kiến",
    description:
      "Lớp phủ mỏng bên trong, hướng tới trải nghiệm sử dụng phù hợp cho đồ uống mang đi.",
    tone: "coating",
  },
];

export const cycleSteps: CycleStep[] = [
  {
    number: "01",
    title: "Tận dụng",
    description: "Đưa xơ dừa vào một hành trình giá trị mới.",
    icon: Sprout,
  },
  {
    number: "02",
    title: "Tạo hình",
    description: "Xử lý vật liệu, ép khuôn và hoàn thiện sản phẩm.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Sử dụng",
    description: "Phục vụ nhu cầu đồ uống mang đi tại điểm F&B.",
    icon: Coffee,
  },
  {
    number: "04",
    title: "Thu hồi",
    description: "Tách riêng ly đã dùng tại các điểm thu gom tham gia.",
    icon: Route,
  },
  {
    number: "05",
    title: "Tái tạo",
    description: "Chuyển đến phương án xử lý phù hợp đã được xác nhận.",
    icon: Recycle,
  },
];

export const values: ValuePillar[] = [
  {
    number: "01",
    kicker: "Economic",
    title: "Nâng giá trị vật liệu",
    description:
      "Biến một nguồn phụ phẩm chưa được khai thác hết thành đầu vào cho một sản phẩm có giá trị sử dụng cao hơn.",
  },
  {
    number: "02",
    kicker: "Social",
    title: "Kết nối chuỗi giá trị",
    description:
      "Tạo thêm đầu ra cho xơ dừa và kết nối nhà cung ứng, doanh nghiệp F&B với người tiêu dùng.",
  },
  {
    number: "03",
    kicker: "Environment",
    title: "Thiết kế cho vòng đời sau",
    description:
      "Không dừng ở việc thay vật liệu; RE-CUP hướng tới một cơ chế thu gom và xử lý có thể theo dõi.",
  },
];

export const partnerBenefits = [
  {
    title: "Bao bì có câu chuyện",
    description:
      "Một điểm chạm thương hiệu mới, bắt đầu từ vật liệu bản địa và tư duy thiết kế tuần hoàn.",
    icon: Leaf,
  },
  {
    title: "Luồng thu gom rõ ràng",
    description:
      "Thùng thu gom, hướng dẫn phân loại và lịch bàn giao được thiết kế cùng điểm bán.",
    icon: Route,
  },
  {
    title: "Dữ liệu có thể đối chiếu",
    description:
      "Theo dõi lượng ly cung cấp, lượng thu hồi và chứng từ bàn giao khi mô hình được triển khai.",
    icon: BarChart3,
  },
] as const;

