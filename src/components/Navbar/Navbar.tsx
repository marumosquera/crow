import React from "react";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

const Navbar = () => {
  return (
    <div className="fixed z-[45] flex h-20 w-full items-center  shadow-md  bg-black top-0 ">
      <Image
        src="/crow_logo_white.png"
        alt="logo"
        width={250}
        height={20}
        className="hidden md:block"
      />
      <div className="flex mr-8 ml-auto gap-12 items-center">
        <p>Create</p>
        <p>About</p>
        <p>Contact</p>
        <PrimaryButton label="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
