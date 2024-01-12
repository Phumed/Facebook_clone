import React from "react";
import Sponsored from "./recommended_component/sponsored";
import Pages from "./recommended_component/pages";
import Contact from "./recommended_component/contact";

function recommend() {
  return (
    <div className="bg-slate-100 xs:pl-0 lg:pl-16 2xl:pl-8">
      <header className="text-lg font-semibold pt-5 pb-1 px-4 text-[#65676B]">
        ได้รับการสนับสนุน
      </header>
      <div className="py-2">
        <Sponsored />
        <Sponsored />
      </div>
      <div>
        <Pages />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default recommend;
