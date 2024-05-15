import Image from "next/image";
import mainImg from "@/assets/second_image.png";

export function About() {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-4/5 text-left">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-5">
          Who We Are
        </h1>
        <p className="md:text-sm lg:text-lg xl:text-xl mb-8">
          We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success. We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
        </p>
      </div>
      <Image className="w-full md:w-96 lg:w-2/3 xl:w-3/4 2xl:w-4/5 mx-auto my-4" src={mainImg} alt="Second Image in Page" />
    </div>
  );
}
