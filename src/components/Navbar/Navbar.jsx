"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccessTime } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const navLinkStyle = (path) =>
    `flex items-center gap-1 px-3 py-2 rounded-lg font-semibold ${
      pathName === path ? "bg-[#244D3F] text-white" : "hover:bg-[#244D3F]/10"
    }`;

  const links = (
    <>
      <li>
        <Link href="/" className={navLinkStyle("/")}>
          <RiHome2Line /> Home
        </Link>
      </li>

      <li>
        <Link href="/timeLine" className={navLinkStyle("/timeLine")}>
          <MdAccessTime /> TimeLine
        </Link>
      </li>

      <li>
        <Link href="/stats" className={navLinkStyle("/stats")}>
          <TfiStatsUp /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 relative">
      
      {/* Logo */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-xl font-bold px-2 py-2 rounded-lg transition-all duration-300 hover:bg-[#244D3F]/10 hover:text-[#244D3F]"
        >
          Keen<span className="text-[#244D3F]">Keeper</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="menu flex flex-col p-4 space-y-2">
            {links}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;