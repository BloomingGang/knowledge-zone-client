import React from "react";
import img1 from "../../img/assets/card1.png";
import img2 from "../../img/assets/card2.png";
import img3 from "../../img/assets/card3.png";
import logo1 from "../../img/assets/cnn-logo.png";
import logo2 from "../../img/assets/forbs-logo.png";
import logo3 from "../../img/assets/wef-logo.png";

const CardOne = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 py-16 px-10">
        <div className="bg-white rounded-xl p-5">
          <img src={logo1} alt="" className="w-[100px] h-[80px] pb-5" />
          <img src={img1} alt="" className="rounded-lg pb-5" />
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            eius? Quidem nemo atque pariatur esse quis aut vitae. Similique
            quisquam voluptatem doloribus minus, sunt soluta. Voluptate
            quibusdam ducimus mollitia suscipit inventore. Non eum fuga
            accusamus rerum, aliquid nesciunt iste obcaecati ut tempora deleniti
            in fugiat inventore harum. Tempora, tempore iusto?
          </p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <img src={logo2} alt="" className="w-[100px] h-[80px] pb-5" />
          <img src={img2} alt="" className="rounded-lg pb-5" />
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            eius? Quidem nemo atque pariatur esse quis aut vitae. Similique
            quisquam voluptatem doloribus minus, sunt soluta. Voluptate
            quibusdam ducimus mollitia suscipit inventore. Non eum fuga
            accusamus rerum, aliquid nesciunt iste obcaecati ut tempora deleniti
            in fugiat inventore harum. Tempora, tempore iusto?
          </p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <img src={logo3} alt="" className="w-[100px] h-[80px] pb-5" />
          <img src={img3} alt="" className="rounded-lg pb-5" />
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            eius? Quidem nemo atque pariatur esse quis aut vitae. Similique
            quisquam voluptatem doloribus minus, sunt soluta. Voluptate
            quibusdam ducimus mollitia suscipit inventore. Non eum fuga
            accusamus rerum, aliquid nesciunt iste obcaecati ut tempora deleniti
            in fugiat inventore harum. Tempora, tempore iusto?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
