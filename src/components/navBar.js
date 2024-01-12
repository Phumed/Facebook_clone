import React from "react";

function navBar() {
  return (
    <div>
      <nav className="flex sm:h-14 xs:h-10 border-solid sm:flex-row xs:flex-col xs:pt-3 sm:mt-0">
        <header className="flex md:basis-1/4 xs:basis-full xs:justify-between sm:basis-1/2 sm:justify-start items-center border-solid">
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="facebook"
            className="w-10 h-10 ml-4"
          />
          <div className="flex xs:mr-2 sm:mr-0">
            <div>
              <input
                className="bg-slate-200 w-full h-full rounded-full px-2.5 py-2 ml-2 xs:hidden xl:block"
                placeholder="ค้นหาบน Facebook:"
              />
              <div className="xs:block xl:hidden bg-gray-200 rounded-full w-10 h-10 ml-2">
                <span class="material-symbols-rounded flex justify-center items-center w-full h-full">
                  search
                </span>
              </div>
            </div>
            <div className="cursor-pointer rounded-full w-10 h-10 flex justify-center items-center hover:bg-red-200 ">
              <span class="material-symbols-rounded md:hidden text-[#65676b] text-3xl">
                menu
              </span>
            </div>
          </div>
        </header>
        <main className=" xs:flex md:flex sm:hidden md:basis-1/2 xs:justify-between sm:justify-center xs:pt-2 sm:pt-0 sm:px-16 items-center text-[#65676b]">
          <div className="flex-1 justify-center flex items-center border-b-4 h-full border-b-[#0866ff]  cursor-pointer">
            <span className="material-symbols-rounded text-3xl text-[#0866ff]">
              home
            </span>
          </div>
          <div className="flex-1 justify-center flex items-center cursor-pointer">
            <span className="material-symbols-rounded text-2xl">group</span>
          </div>
          <div className="flex-1 justify-center flex items-center cursor-pointer">
            <span className="material-symbols-rounded text-2xl ">
              smart_display
            </span>
          </div>
          <div className="flex-1 justify-center flex items-center cursor-pointer">
            <span className="material-symbols-rounded text-2xl ">
              storefront
            </span>
          </div>
          <div className="flex-1 justify-center flex items-center cursor-pointer">
            <span className="material-symbols-rounded text-2xl ">
              sports_esports
            </span>
          </div>
        </main>
        <footer className="sm:flex md:basis-1/4 xs:hidden sm:basis-1/2 justify-end pr-4 pl-1 flex items-center">
          <div className="bg-gray-300 rounded-full w-10 h-10 mr-2 icons-items">
            <span className="material-symbols-rounded w-full h-full flex justify-center items-center text-[#65676b]">
              apps
            </span>
          </div>
          <div className="bg-gray-300 rounded-full w-10 h-10 mr-2 icons-items">
            <span className="material-symbols-rounded w-full h-full flex justify-center items-center text-[#65676b]">
              maps_ugc
            </span>
          </div>
          <div className="bg-gray-300 rounded-full w-10 h-10 mr-2 icons-items">
            <span className="material-symbols-rounded w-full h-full flex justify-center items-center text-[#65676b]">
              notifications
            </span>
          </div>
          <div>
            <img
              class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </footer>
      </nav>
    </div>
  );
}

export default navBar;
