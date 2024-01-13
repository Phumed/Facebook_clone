import React from "react";
import MyPost from "./MyPost";
import Post from "./Post";
import Story from "./story";

function content() {
  // const components = Array.from({ length: 5 }, () => <MyComponent />);
  return (
    <div className="px-2 sm:px-2 md:px-10 lg:px-0 xl:px-10 2xl:px-16 bg-slate-100">
      <div className="sm:hidden block">
        <MyPost />
      </div>
      <div className="pt-6 flex overflow-x-scroll">
        {/* my Story */}
        <div className="w-32 h-52 sm:h-64 sm:w-36 mr-2 relative rounded-lg overflow-hidden flex-none">
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
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className="sm:block hidden">
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
