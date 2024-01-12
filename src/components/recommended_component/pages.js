import React from "react";
import Netflix from "../../images/Netflix.jpg";

function pages() {
  return (
    <div>
      <header className="text-lg font-semibold pt-5 pb-1 px-4 flex justify-between items-center text-[#65676B]">
        <div>เพจและโปรไฟล์ของคุณ</div>
        <div className="rounded-items">
          <span class="material-symbols-rounded ">more_horiz</span>
        </div>
      </header>
      <div className="px-3">
        <main className="px-2 flex items-center items">
          <div className="w-12">
            <img
              class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
              src={Netflix}
              alt=""
            />
          </div>
          <div className="py-3">some thing about you</div>
        </main>
        <div className="flex px-4 text-[#65676B] items items-center py-1">
          <span class="material-symbols-rounded p-1.5">cycle</span>
          <div className="p-1.5 text-sm font-semibold">สลับไปใช้บัญชี</div>
        </div>
        <div className="flex items-center px-4 text-[#65676B] items py-1">
          <span class="material-symbols-rounded p-1.5">volume_down</span>
          <div className="p-1.5 text-sm font-semibold">สร้างการโปรโมท</div>
        </div>
      </div>
    </div>
  );
}

export default pages;
