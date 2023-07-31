import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F5antos Portfolio",
  description: "Created with NextJS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto bg-gradient-to-b from-[#002244] to-[#1d4f58]">
        <div className="max-w-7xl mx-auto pattern-dots pattern-blue-500 pattern-bg-white 
  pattern-size-6 pattern-opacity-20">
          <Header />
          <Hero />
          <About />
          <Banner />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
