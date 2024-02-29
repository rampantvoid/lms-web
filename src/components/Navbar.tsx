import React, { ReactEventHandler, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Link } from "react-router-dom";
import { Input } from "./ui/input";

const Navbar = () => {
  const isAuth = false;
  const [searchText, setSearchText] = useState("");

  const onTyping = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    console.log(searchText);
  };

  return (
    <div className="w-full p-3 shadow-md flex justify-center items-center bg-white  z-[999]">
      {/* Dekstop menue */}

      <div className="hidden w-full xl:mx-14 items-center justify-between lg:flex ">
        <div className="flex">
          <img src="/assets/logo.svg" alt="" />

          <p className="ml-3 text-4xl font-bold font-inter">
            EDU<span className=" text-[#3772ff] font-inter">.</span>
          </p>

          <div className="flex ml-14 items-center border rounded-md">
            <img className="mx-2" src="/assets/search-solid.svg" alt="" />
            <Input
              type="text"
              className="p-2 pl-0 font-inter w-[300px] xl:w-[500px] border-none focus:!ring-0 focus:!ring-offset-0"
              placeholder="Search for courses"
              value={searchText}
              onChange={onTyping}
            />
          </div>
        </div>

        <div className="flex gap-4 items-center ">
          <Link to="login">
            <p className="font-inter text-[#3772ff] font-semibold ">Login</p>
          </Link>
          <Link to="register">
            <button className="bg-[#3772ff] py-3 px-4 rounded-sm text-secondary font-semibold hover:bg-[#3f64b9] transition ease-in-out">
              Join For Free
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menue */}
      <Drawer>
        <div className="flex w-full items-center justify-between lg:hidden ">
          <DrawerTrigger
            className="hamburger-icon space-y-1.5"
            //   onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-7  bg-gray-500"></span>
            <span className="block h-0.5 w-7  bg-gray-500"></span>
            <span className="block h-0.5 w-7  bg-gray-500"></span>
          </DrawerTrigger>

          <p className=" text-2xl font-bold font-inter md:text-4xl">
            EDU<span className=" text-[#3772ff] font-inter">.</span>
          </p>

          <DrawerContent>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-end  p-8">
              <li className="font-semibold my-4 uppercase">
                <Link to="/login">Login</Link>
              </li>
              <li className="text-[#3772ff] my-4 font-semibold uppercase">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </DrawerContent>

          <Drawer>
            <DrawerTrigger>
              <img src="/assets/search-solid.svg" alt="" />
            </DrawerTrigger>

            <DrawerContent className="h-svh">
              <div className="p-8 flex w-full flex-col">
                <div className="flex border rounded-md">
                  <img className="mx-2" src="/assets/search-solid.svg" alt="" />
                  <Input
                    type="text"
                    className="p-2 pl-0 font-inter w-[300px] xl:w-[500px] border-none focus:!ring-0 focus:!ring-offset-0"
                    placeholder="Search for courses"
                    value={searchText}
                    onChange={onTyping}
                  />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </Drawer>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      @keyframes slide-in {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
    </div>
  );
};

export default Navbar;
