import React from "react";
import House from "../../images/house.jpg";

function sponsored() {
  return (
    <div className="flex py-2 px-2 mx-2 items-center items">
      <div className="basis-2/5">
        <img src={House} alt="house" className="w-full rounded" />
      </div>
      <div className="pl-3 basis-3/5">
        <div className="text-base font-md">เดมิ สาธุ 49 ใกล้สุขุมวิท สาทร</div>
        <div className="text-xs">sansiri.com</div>
      </div>
    </div>
  );
}

export default sponsored;
