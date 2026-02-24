import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lalabow - คอนกรีตพิมพ์ลาย | ผู้เชี่ยวชาญคอนกรีตพิมพ์ลายอันดับ 1",
  description:
    "บริการออกแบบและติดตั้งคอนกรีตพิมพ์ลายครบวงจร ด้วยประสบการณ์กว่า 10 ปี ลวดลายกว่า 30 แบบ | Lalabow - Thailand's Premier Stamped Concrete Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
