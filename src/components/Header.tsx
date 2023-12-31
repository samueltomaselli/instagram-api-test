import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b-2 border-black fixed w-screen z-50 flex justify-center h-20 px-4 bg-white">
      <div className="flex items-center justify-between w-[1140px]">
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>
        <nav className="lg:flex gap-5 hidden tracking-wide">
          <Link
            href="..#home"
            className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary"
          >
            HOME
          </Link>
          <Link
            href="/gallery"
            className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary "
          >
            GALERIA
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
