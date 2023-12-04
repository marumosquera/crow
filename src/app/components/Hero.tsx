/* eslint-disable @next/next/no-img-element */
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[90vh]  w-full bg-black bg-opacity-95 flex flex-row">
      <div className="col-span-1 w-full flex flex-col  items-center justify-center  pl-16 pr-32">
        <p className=" text-[56px] text-center">
          Create your own escrow smart contract
        </p>
        <p className="text-md text-center pt-8">
          At Crow, we provide cutting-edge escrow smart contract services that
          leverage the power of blockchain technology to ensure the security of
          your cryptocurrency and NFT deposits.
        </p>
        <div className="flex gap-4 pt-16 ">
          <PrimaryButton label="Sign up" />
          <SecondaryButton label="Tutorial" />
        </div>
      </div>
      <div className="col-span-1 w-full">
        <img
          src="./blue_mash.png"
          alt="herosection"
          className=" object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
