import Image from "next/image";
import ester from "@/assets/ester.png";
import cody from "@/assets/cody.png";
import brooklyn from "@/assets/brooklyn.png";

export function Team() {
  return (
    <div>
      <div className="w-full md:w-96 lg:w-2/3 xl:w-3/4 2xl:w-4/5 mx-auto">
        <h1 className="md:text-xl font-bold mt-20 mb-10 text-left md:text-center md:ml-0 lg:text-4xl lg:mb-20">
          Meet the heroes behind the magic
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="shadow-xl justify-center items-center">
            <Image className="p-5" src={ester} alt="Ester Howard - Founder" />
            <h1 className="ml-5 font-bold mb-2 text-2xl">Ester Howard</h1>
            <p className="ml-5 text-gray-400 mb-6">Founder</p>
          </div>
          <div className="shadow-xl justify-center items-center">
            <Image className="p-5" src={cody} alt="Cody Fisher - Developer" />
            <h1 className="ml-5 font-bold mb-2 text-2xl">Cody Fisher</h1>
            <p className="ml-5 text-gray-400 mb-6">Developer</p>
          </div>
          <div className="shadow-xl justify-center items-center">
            <Image  className="p-5" src={brooklyn} alt="Brooklyn Simmons - Designer" />
            <h1 className="ml-5 font-bold mb-2 text-2xl">Brooklyn Simmons</h1>
            <p className="ml-5 text-gray-400 mb-6">Designer</p>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-4 bg-black w-full">
        <div className="flex flex-col items-center">
          <div className="items-start">
            <h1 className="text-5xl my-7 font-bold text-left text-yellow-400">
            350+
          </h1>
          <p className="text-xl text-left text-white mb-7">Clients Worldwide</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="items-start">
          <h1 className="text-5xl my-7 font-bold text-left text-yellow-400">
            20+
          </h1>
          <p className="text-xl text-left text-white mb-7">Team Members</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="items-start">
          <h1 className="text-5xl my-7 font-bold text-left text-yellow-400">
            100+
          </h1>
          <p className="text-xl text-left text-white mb-7">
            Projects Completed
          </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="items-start">
          <h1 className="text-5xl my-7 font-bold text-left text-yellow-400">
            85M+
          </h1>
          <p className="text-xl text-left text-white mb-7">Revenue Generated</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
