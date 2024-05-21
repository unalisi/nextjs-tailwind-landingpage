import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@/assets/icons/instagram.png";
import GithubIcon from "@/assets/icons/github.png";
import LinkedinIcon from "@/assets/icons/linkedin.png";

export function Footer() {
  return (
    <footer className="py-8 bg-yellow-400 text-white text-center min-h-[200px] flex items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2 text-black">Ünal İSİ</h1>
          <p className="mb-2 text-lg text-black">Frontend Developer ® 2024</p>
        </div>
        <div className="w-1/2 flex justify-center items-center space-x-4">
          <Link href="https://www.instagram.com/unalisi" legacyBehavior>
            <a target="_blank">
             <Image src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </Link>
          <Link href="https://github.com/unalisi" legacyBehavior>
            <a target="_blank">
              <Image src={GithubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/unalisi" legacyBehavior>
            <a target="_blank">
              <Image src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}


