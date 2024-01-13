import React from "react";

function story() {
  return (
    <div className="w-32 h-52 sm:h-64 sm:w-36 mr-2 flex-none overflow-hidden relative rounded-lg">
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <img
          src="https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg"
          alt="img"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="relative">
        <img
          className="inline-block rounded-full h-9 w-9 mr-2 ml-4 mt-4 ring-4 ring-blue-600"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 pb-2 pt-5 pl-2 flex text-sm font-medium text-white bg-gradient-to-t from-black opacity-60">
        Phumed Thumtechanon
      </div>
    </div>
  );
}

export default story;
