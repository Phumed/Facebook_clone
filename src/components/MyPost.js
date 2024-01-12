import React from "react";

function MyPost() {
  return (
    <div className="flex flex-col post_container px-4">
      <header className="flex w-full border-2 border-white h-10 mb-3">
        <div className="flex-none">
          <img
            class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex-auto pl-2">
          <input
            className="bg-slate-200 w-full h-full rounded-full px-2.5 py-3"
            placeholder="คุณคิดอะไรอยู่ Dutchie"
          />
        </div>
      </header>
      <footer className="flex py-2 border-2 border-t-slate-200 border-white text-[#65676B]">
        <div className="flex flex-auto justify-center items-center hover:bg-slate-200 rounded-lg py-1 cursor-pointer">
          <div class="material-symbols-rounded footer_icon text-red-600">
            videocam
          </div>
          <div className="footer_text">วิดีโอถ่ายทอดสด</div>
        </div>
        <div className="flex flex-auto justify-center items-center hover:bg-slate-200 rounded-lg py-1 cursor-pointer">
          <span className="material-symbols-rounded footer_icon text-green-500">
            photo_library
          </span>
          <div className="footer_text">รูปภาพ/วิดีโอ</div>
        </div>
        <div className="flex flex-auto justify-center items-center hover:bg-slate-200 rounded-lg py-1 cursor-pointer">
          <span className="material-symbols-rounded footer_icon text-amber-400">
            mood
          </span>
          <div className="footer_text">ความรู้สึก/กิจกรรม</div>
        </div>
      </footer>
    </div>
  );
}

export default MyPost;
