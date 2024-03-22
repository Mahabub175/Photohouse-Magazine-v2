/* eslint-disable jsx-a11y/alt-text */
"use client";
import Link from "next/link";
import logo_dark from "@/assets/images/logo.png";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { navbarRouteData } from "@/assets/data/navbarData";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [showMenu, setMenu] = useState(false);

  const path = usePathname();

  return (
    <div className="z-10">
      <nav className="flex justify-between px-2 md:px-10 py-1 items-center mb-4">
        <div>
          <Link href="/">
            <Image
              priority
              src={logo_dark}
              width={160}
              height={54}
              alt="logo"
              className={`cursor-pointer rounded-md`}
            ></Image>
          </Link>
        </div>
        <div>
          <div className="hidden md:block tracking-wider">
            {navbarRouteData.map((item, i) => (
              <Link href={item.route} key={i}>
                <span
                  className={`${
                    path === item?.route && "font-bold"
                  } hover:text-[#DEDEDE] cursor-pointer mx-2 text-xl`}
                >
                  {item?.name}
                </span>
                {i !== navbarRouteData.length - 1 && (
                  <span className="text-xl"> | </span>
                )}
              </Link>
            ))}
          </div>
          <div
            className="md:hidden h-full text-center cursor-pointer flex flex-col items-center gap-1"
            onClick={() => setMenu((show) => !show)}
          >
            <div
              className={`w-[20px] h-[2px] bg-white ${
                showMenu && "rotate-[180deg]"
              } transition ease-in-out delay-150`}
            ></div>
            <div
              className={`w-[20px] h-[2px] bg-white  ${
                showMenu && "-rotate-[180deg]"
              } transition ease-in-out delay-150`}
            ></div>
            <div
              className={`w-[20px] h-[2px] bg-white  ${
                showMenu && "-rotate-[180deg]"
              } transition ease-in-out delay-150`}
            ></div>
            <div>Menu</div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="">
          <nav className="bg-[#06202A] h-[100vh] w-full md:hidden select-none animate-slideDown relative">
            <div className="tracking-wider flex flex-col h-[80vh] items-center text-center justify-evenly text-2xl pt-20 absolute left-1/3 top-0">
              {[
                "Home",
                "Magazines",
                "publish",
                "Gallery",
                "About",
                "Contact",
              ].map((x, i) => (
                <Fragment key={i + 8948}>
                  {i !== 2 ? (
                    <Link href={i === 0 ? "/" : `/${x.toLowerCase()}`}>
                      <span
                        onClick={() => setMenu((show) => !show)}
                        className={` hover:text-[#DEDEDE] cursor-pointer mx-2 text-2xl`}
                      >
                        {x}
                      </span>
                    </Link>
                  ) : (
                    <a
                      className={`hover:text-[#DEDEDE] cursor-pointer mx-2 text-2xl `}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Published
                    </a>
                  )}
                </Fragment>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
