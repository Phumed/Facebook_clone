import React from "react";
import Netflix from "../images/Netflix.jpg";
import PostPic from "../images/postPic.jpg";
function Post() {
  return (
    <div className="mt-6 mb-6 post_container">
      <header className="flex justify-between px-4">
        <div className="flex">
          <div className="w-12">
            <img
              class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src={Netflix}
              alt="Netflix"
            />
          </div>
          <div className="flex flex-col">
            <div className="test-sm font-medium">Netflix</div>
            <div className="text-xs  text-[#65676B]">3 ชม.</div>
          </div>
        </div>
        <div>
          <span class="material-symbols-rounded">more_horiz</span>
          <span class="material-symbols-rounded">close</span>
        </div>
      </header>
      <main className="sm:text-base xs:text-sm">
        <div className="px-4 pt-2 pb-2">
          เมื่อ พัคซอจุน-ฮันโซฮี ต้องร่วมภารกิจพิเศษตามหาผู้สูญหาย ก่อนพบกันใน
          Gyeongseong Creature สัตว์สยองกยองซอง ภาค 2 ที่ Netflix
        </div>
        <img src={PostPic} alt="postPic" />
      </main>
      <div className="flex justify-between mx-4 text-[#65676b] py-2 border-solid border-b-2 border-gray-300 sm:text-base xs:text-xs">
        <div>1.8 พัน</div>
        <div className="flex">
          <div className="pr-3">113 ความคิดเห็น</div>
          <div>แชร์ 1.8 พัน ครั้ง</div>
        </div>
      </div>
      <footer className="flex py-2 text-[#65676B]">
        <div className="flex flex-auto justify-center items-center rounded-lg hover:bg-slate-200 ml-4 cursor-pointer">
          <span class="material-symbols-rounded footer_icon">thumb_up</span>
          <div className="footer_text">ถูกใจ</div>
        </div>
        <div className="flex flex-auto justify-center items-center rounded-lg hover:bg-slate-200 cursor-pointer">
          <span class="material-symbols-rounded footer_icon">mode_comment</span>
          <div className="footer_text">แสดงความคิดเห็น</div>
        </div>
        <div className="flex flex-auto justify-center items-center rounded-lg hover:bg-slate-200 mr-4 cursor-pointer">
          <span class="material-symbols-rounded footer_icon">send</span>
          <div className="footer_text">แชร์</div>
        </div>
      </footer>
    </div>
  );
}

export default Post;
