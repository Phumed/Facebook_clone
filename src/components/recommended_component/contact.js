import React from "react";
import Contact_element from "./contact_element";

function contact() {
  return (
    <div>
      <header className="text-lg font-semibold pt-5 pb-1 px-4 flex justify-between items-center text-[#65676B]">
        <div>ผู้ติดต่อ</div>
        <div className="flex">
          <div className="rounded-items mr-1">
            <span class="material-symbols-rounded">search</span>
          </div>
          <div className="rounded-items">
            <span class="material-symbols-rounded">more_horiz</span>
          </div>
        </div>
      </header>
      <div className="px-3">
        <Contact_element />
        <Contact_element />
        <Contact_element />
        <Contact_element />
        <Contact_element />
        <Contact_element />
      </div>
    </div>
  );
}

export default contact;
