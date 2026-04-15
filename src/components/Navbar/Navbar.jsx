"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccessTime } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`font-semibold mr-2 ${pathName === "/" ? "bg-[#244D3F] text-white" : ""}`}
        >
          <RiHome2Line className="text-lg" />
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/timeLine"
          className={`font-semibold mr-2 ${pathName === "/timeLine" ? "bg-[#244D3F] text-white" : ""}`}
        >
          <MdAccessTime className="text-lg" />
          TimeLine
        </Link>
      </li>

      <li>
        <Link
          href="/stats"
          className={`font-semibold ${pathName === "/stats" ? "bg-[#244D3F] text-white" : ""}`}
        >
          <TfiStatsUp className="text-lg" /> Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-0 md:px-10">
      <div className="flex-1">
        <a className="text-xl font-bold px-2 py-2 rounded-lg transition-all duration-300 hover:bg-[#244D3F]/10 hover:text-[#244D3F]">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;