import { Header } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza | Главная",
  description: "Ordering pizza online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <main className="min-h-screen">{children}</main>
    </html>
  );
}
