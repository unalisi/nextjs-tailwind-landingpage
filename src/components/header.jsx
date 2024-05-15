import Image from "next/image";
import mainImg from "@/assets/bg-hero.png";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <div>
      <Navbar />
      <header className="w-full relative">
        <div className="relative">
          <Image
            className="w-full"
            src={mainImg}
            alt="Main Image in Page"
            layout="responsive"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
            <p className="font-monroe text-4xl md:text-6xl font-bold mb-2">
              Let&apos;s create something
            </p>
            <p className="font-monroe text-4xl md:text-6xl font-bold">
              great together.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
