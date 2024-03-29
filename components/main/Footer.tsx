import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/Loupthevenin"
              className="flex flex-row items-center my-[15px] cursor-pointer z-[30]"
              target="_blank"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/loup_thevenin/"
              className="flex flex-row items-center my-[15px] cursor-pointer z-[30]"
              target="_blank"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">À Propos</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer z-[30]">
              <span className="text-[15px] ml-[6px]">
                loup.thevenin.1@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Loup thevenin Dev 2024 Inc. All rights reserved
          <p className="my-[15px]">06 70 32 13 12</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
