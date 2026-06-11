import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuốn Sách Tốt Nghiệp — Nguyễn Thị Thúy 🎓",
  description: "Bốn năm tuổi trẻ, một hành trình đáng tự hào. Một cuốn sách đặc biệt dành riêng cho ngày tốt nghiệp của em.",
  openGraph: {
    title: "Cuốn Sách Tốt Nghiệp — Nguyễn Thị Thúy",
    description: "Bốn năm tuổi trẻ, một hành trình đáng tự hào.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600&family=Dancing+Script:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
