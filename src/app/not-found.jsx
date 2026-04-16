import Image from "next/image";
import notFoundImg from "../../public/assets/error-404.png";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f6f8f7] to-[#eef3f1] px-4">

      <div className="absolute w-[400px] h-[400px] bg-[#244D3F]/10 blur-[120px] rounded-full top-[-80px] left-[-80px]" />
      <div className="absolute w-[350px] h-[350px] bg-emerald-200/20 blur-[140px] rounded-full bottom-[-80px] right-[-80px]" />

      <div className="relative z-10 text-center max-w-lg w-full bg-white/80 backdrop-blur-xl 
        border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
        rounded-[2.5rem] p-10">

        <div className="flex justify-center">
          <Image
            src={notFoundImg}
            width={320}
            height={320}
            alt="not-found"
            className="hover:scale-105 transition-transform duration-500 drop-shadow-xl"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mt-6 tracking-tight">
          404 — Page Not Found
        </h1>

        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or go back to home.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 
              rounded-2xl font-semibold text-white 
              bg-[#244D3F] hover:bg-[#1e3d32]
              shadow-md hover:shadow-lg 
              transition-all duration-300 hover:scale-105"
          >
            <RiHome2Line className="text-lg" />
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6 tracking-widest">
          ERROR 404 • SYSTEM MESSAGE
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;