import React from "react";

function MyPost() {
  return (
    <div className="flex sm:flex-col post_container px-4 sm:py-0 py-2">
      <header className="flex items-center h-full w-full border-2 border-white">
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
      <footer className="flex py-2 text-[#65676B] sm:h-full h-12">
        <div className="hidden sm:flex flex-auto justify-center items-center hover:bg-slate-200 rounded-lg py-1 cursor-pointer">
          <div class="material-symbols-rounded footer_icon text-red-600">
            videocam
          </div>
          <div className="footer_text">วิดีโอถ่ายทอดสด</div>
        </div>
        <div className="flex-auto flex flex-col sm:flex-row justify-center items-center hover:bg-slate-200 rounded-lg py-1 cursor-pointer">
          <span className="material-symbols-rounded footer_icon text-green-500 text-3xl sm:text-2xl">
            photo_library
          </span>
          <div className="footer_text hidden sm:block">รูปภาพ/วิดีโอ</div>
        </div>
        <div className="hidden sm:flex flex-auto justify-center items-center hover:bg-slate-200 rounded-lg py-1 cursor-pointer">
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
