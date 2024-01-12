import React from "react";
import Page from "./images/page.jpg";

function sideNav_component() {
  return (
    <div className="cursor-pointer">
      <header className="text-lg font-semibold pt-5 pb-1 px-4 text-[#65676B]">
        <div>ทางลัดของคุณ</div>
      </header>
      <div className="sideNav_list py-3">
        <div className="w-12">
          <img src={Page} alt="..." className=" rounded-md w-9" />
        </div>
        <div className="font-medium">Programming Jokes and Memes</div>
      </div>
      <div className="sideNav_list py-3">
        <div className="w-12">
          <img src={Page} alt="..." className=" rounded-md w-9" />
        </div>
        <div className="font-medium">Programming Jokes and Memes</div>
      </div>
    </div>
  );
}

export default sideNav_component;
