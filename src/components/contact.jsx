import Image from "next/image";
import contact from "@/assets/contact.png";

export function Contact() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-center mb-20">
        <Image src={contact} alt="Contact Image" className="max-w-lg" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full mr-20">
          <h1 className="text-right text-2xl font-bold w-full ">
            We&apos;d love to hear <br />
            from you
          </h1>
        </div>
        <div className="p-8 justify-center items-center w-full">
          <form className="flex flex-col ">
            <input
              className="border-2 border-solid border-black p-6 flex-1 mb-10 placeholder-black placeholder:font-bold"
              id="name"
              type="text"
              aria-label="name"
              placeholder="Name*"
            />
            <input
              className="border-2 border-solid border-black p-6 flex-1 mb-10 placeholder-black placeholder:font-bold"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Email*"
            />
            <input
              className="border-2 border-solid border-black p-6 flex-1 mb-10 placeholder-black placeholder:font-bold"
              id="url"
              type="url"
              aria-label="website url"
              placeholder="Website URL**"
            />
            <textarea
              className="border-2 border-solid border-black min-h-[175px] p-6 flex-1 mb-10 placeholder-black placeholder:font-bold"
              id="project_details"
              aria-label="project details"
              placeholder="Project Details*"
            />

            <button className="border-2 border-solid border-black p-6 text-white bg-black font-bold hover:bg-gray-800">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
