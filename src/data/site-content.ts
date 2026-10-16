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
  { label: "Câu chuyện", href: "#story" },
  { label: "Vật liệu", href: "#materials" },
  { label: "Kiểm nghiệm", href: "#research" },
  { label: "Vòng đời", href: "#cycle" },
  { label: "Đối tác F&B", href: "#partners" },
];

export const missionSteps = [
  {
    number: "01",
    title: "Tận dụng phụ phẩm",
    description:
      "Xem xơ dừa như một nguồn vật liệu có thể tiếp tục được khai thác giá trị.",
  },
  {
    number: "02",
    title: "Tạo bao bì",
    description:
      "Nghiên cứu cách xử lý sợi, phối hợp vật liệu và tạo hình cho nhu cầu đồ uống mang đi.",
  },
  {
    number: "03",
    title: "Thu hồi sau sử dụng",
    description:
      "Đặt điểm thu gom riêng tại các điểm F&B tham gia thay vì bỏ ly chung với rác.",
  },
  {
    number: "04",
    title: "Tái tạo giá trị",
    description:
      "Phân loại và chuyển ly đến phương án xử lý phù hợp đã được kiểm nghiệm.",
  },
] as const;

export const materials: Material[] = [
  {
    number: "01",
    name: "Xơ dừa",
    englishName: "Coconut fiber",
    range: "75–85% dự kiến",
    description:
      "Nguồn sợi nền chính và duy nhất; kích thước sợi, độ ẩm và mức độ xử lý cần được tối ưu để tạo cấu trúc thân ly.",
    tone: "fiber",
  },
  {
    number: "02",
    name: "Chất kết dính sinh học",
    englishName: "Bio-binder",
    range: "10–15% dự kiến",
    description:
      "Thành phần dự kiến liên kết các sợi thành một khối ổn định; công thức cụ thể cần được thử nghiệm.",
    tone: "binder",
  },
  {
    number: "03",
    name: "Màng chống thấm sinh học",
    englishName: "PLA coating",
    range: "5–10% dự kiến",
    description:
      "Lớp phủ mỏng bên trong nhằm giảm rò rỉ; khả năng chịu nhiệt và xử lý sau sử dụng cần được kiểm nghiệm.",
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
    title: "Xử lý phù hợp",
    description: "Phân loại và chuyển đến phương án xử lý đã được kiểm nghiệm, chấp nhận.",
    icon: Recycle,
  },
];

export const researchChecks = [
  {
    number: "3–5",
    unit: "công thức",
    title: "Thử nghiệm vật liệu",
    description:
      "So sánh cách xử lý xơ dừa, độ ẩm và tỷ lệ phối hợp với chất kết dính sinh học.",
  },
  {
    number: "30–60",
    unit: "phút",
    title: "Kiểm tra khi sử dụng",
    description:
      "Theo dõi độ tan, mùi của xơ dừa, mức độ biến dạng và thay đổi mùi vị đồ uống trong điều kiện thực tế.",
  },
  {
    number: "04",
    unit: "nhóm đánh giá",
    title: "Cơ sở lựa chọn",
    description:
      "Độ bền, khả năng chống thấm, khả năng chịu nhiệt và phương án xử lý sau sử dụng.",
  },
] as const;

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
    title: "Cốc và nhận diện",
    description:
      "Giải pháp bao bì có thể được tư vấn theo dung tích, nhu cầu sử dụng và yêu cầu thiết kế của điểm bán.",
    icon: Leaf,
  },
  {
    title: "Điểm thu gom riêng",
    description:
      "Thùng có nhận diện RE-CUP, hướng dẫn phân loại và lịch giao nhận được thống nhất cùng đối tác.",
    icon: Route,
  },
  {
    title: "Dữ liệu bàn giao",
    description:
      "Ghi nhận lượng ly cung cấp, lượng thu hồi và xác nhận tiếp nhận của đơn vị xử lý khi mô hình được triển khai.",
    icon: BarChart3,
  },
] as const;

