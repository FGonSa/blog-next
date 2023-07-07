import Banner from "../components/Banner";
import Header from "../components/Header";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Franky's Next Blog",
  description: "Created with NextJS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
