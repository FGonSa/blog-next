import Banner from "../components/Banner";
import Footer from "../components/Footer";
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
      <body className="mx-auto">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Banner />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
