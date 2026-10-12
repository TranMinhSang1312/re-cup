import type { Metadata } from "next";
import { Be_Vietnam_Pro, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "RE-CUP | Một lần sử dụng, nhiều vòng giá trị",
  description:
    "RE-CUP là ý tưởng bao bì tuần hoàn từ xơ dừa, kết nối vật liệu, trải nghiệm F&B và hành trình thu gom sau sử dụng.",
  keywords: [
    "RE-CUP",
    "xơ dừa",
    "bao bì tuần hoàn",
    "ly sinh học",
    "kinh tế tuần hoàn",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "RE-CUP | Một lần sử dụng, nhiều vòng giá trị",
    description:
      "Ý tưởng bao bì tuần hoàn từ xơ dừa, được thiết kế cùng hành trình thu gom sau sử dụng.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE-CUP | Một lần sử dụng, nhiều vòng giá trị",
    description:
      "Ý tưởng bao bì tuần hoàn từ xơ dừa, được thiết kế cùng hành trình thu gom sau sử dụng.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${sans.variable} ${display.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
