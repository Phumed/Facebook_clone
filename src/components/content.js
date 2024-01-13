import React from "react";
import MyPost from "./MyPost";
import Post from "./Post";

function content() {
  // const components = Array.from({ length: 5 }, () => <MyComponent />);
  return (
    <div className="xs:px-2 sm:px-2 md:px-10 lg:px-0 xl:px-10 2xl:px-16 bg-slate-100">
      <div className="sm:hidden xs:block">
        <MyPost />
      </div>
      <div className="pt-6 flex overflow-x-scroll">
        {/* my Story */}
        <div className="xs:w-32 xs:h-52 sm:h-64 sm:w-36 mr-2 relative rounded-lg overflow-hidden flex-none">
          <div className="h-full w-full mr-2 shadow-md">
            {/* image */}
            <img
              src="https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg"
              alt="img"
              className="object-cover h-52 w-full rounded-md"
            />
          </div>
          {/* add mark */}
          <div className="absolute top-0 w-full h-full flex justify-center">
            <div className=" bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center absolute bottom-8 ring-4 ring-white ring-offset">
              <div className="material-symbols-rounded mx-auto">add</div>
            </div>
            <div className="absolute bottom-2 text-sm font-semibold">
              สร้างสตอรี่
            </div>
          </div>
        </div>

        {/* story */}

        <div className="xs:w-32 xs:h-52 sm:h-64 sm:w-36 mr-2 flex-none overflow-hidden relative rounded-lg">
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
        <div className="xs:w-32 xs:h-52 sm:h-64 sm:w-36 mr-2 flex-none overflow-hidden relative rounded-lg">
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
        <div className="xs:w-32 xs:h-52 sm:h-64 sm:w-36 mr-2 flex-none overflow-hidden relative rounded-lg">
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
        <div className="xs:w-32 xs:h-52 sm:h-64 sm:w-36 mr-2 flex-none overflow-hidden relative rounded-lg">
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
      </div>
      <div className="sm:block xs:hidden">
        <MyPost />
      </div>
      <div>
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default content;
