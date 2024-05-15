import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Team } from "@/components/ourteam";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div id="home">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </body>
    </html>
  );
}