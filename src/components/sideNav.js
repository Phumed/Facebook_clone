import { React, useState } from "react";
import SideNav_component from "../sideNav_component";

function SideNav() {
  const [expand, setExpand] = useState(false);
  const expandHandle = () => {
    setExpand(!expand);
  };
  return (
    <div className="pt-4 h-full bg-slate-100">
      <div>
        <div className="px-2 h-14 flex items-center pr-4 rounded-l-lg ml-2 hover:bg-slate-200 cursor-pointer">
          <div className="flex items-center">
            <img
              className="inline-block rounded-full h-9 w-9 mr-2"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-base font-medium">
              Dutchie Phumed Thumtechanon
            </div>
          </div>
        </div>
        <div>
          <ul className="text-sm cursor-pointer">
            <li>
              <div className="sideNav_list">
                <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                  group
                </span>
                เพื่อน
              </div>
            </li>
            <li>
              <div className="sideNav_list">
                <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                  history
                </span>
                ความทรงจำ
              </div>
            </li>
            <li>
              <div className="sideNav_list">
                <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                  bookmark
                </span>
                ที่บันทึกไว้
              </div>
            </li>
            <li>
              <div className="sideNav_list">
                <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                  groups
                </span>
                กลุ่ม
              </div>
            </li>
            <li>
              <div className="sideNav_list">
                <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                  smart_display
                </span>
                วิดีโอ
              </div>
            </li>
          </ul>
          {expand && (
            <ul className="text-sm cursor-pointer">
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    storefront
                  </span>
                  Marketplace
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    maps_ugc
                  </span>
                  Messenger
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    maps_ugc
                  </span>
                  Messenger Kids
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    cell_merge
                  </span>
                  กิจกรรมโฆษณาล่าสุด
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    credit_card
                  </span>
                  คำสั่งซื้อและการชำระเงิน
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    favorite
                  </span>
                  โครงการระดมทุน
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    today
                  </span>
                  งานกิจกรรม
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    bar_chart
                  </span>
                  ตัวจัดการโฆษณา
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    flag
                  </span>
                  เพจ
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    rate_review
                  </span>
                  ฟีด
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    stadia_controller
                  </span>
                  เล่นเกม
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    branding_watermark
                  </span>
                  วิดีโอเกี่ยวกับเกม
                </div>
              </li>
              <li>
                <div className="sideNav_list">
                  <span className="material-symbols-rounded text-4xl h-14 pr-2 flex items-center">
                    spa
                  </span>
                  ศูนย์ภูมิอากาศวิทยา
                </div>
              </li>
            </ul>
          )}
          <li
            onClick={expandHandle}
            className="list-none text-sm cursor-pointer"
          >
            {!expand && (
              <div className="sideNav_list py-2">
                <div className="w-9 h-9 rounded-full bg-gray-300 mr-2">
                  <span class="material-symbols-rounded text-4xl h-14 pr-2 flex items-center h-full w-full">
                    expand_more
                  </span>
                </div>
                ดูเพิ่มเติม
              </div>
            )}
            {expand && (
              <div className="sideNav_list py-2">
                <div className="w-9 h-9 rounded-full bg-gray-300 mr-2">
                  <span class="material-symbols-rounded text-4xl h-14 pr-2 flex items-center h-full w-full">
                    expand_less
                  </span>
                </div>
                ดูน้อยลง
              </div>
            )}
          </li>
        </div>

        <div>
          <SideNav_component />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
