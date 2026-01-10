import React from "react";

const About = () => {
  return (
<div className="max-w-6xl mx-auto px-4 py-12">
  
  <h1 className="text-4xl font-bold text-black text-center mb-8">
    Biz haqimizda
  </h1>

  
  <div className="flex justify-center mb-10">
    <img
      src="https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fpages%2F2025%2F06%2F18%2F1750258595660851782.png&w=1080&q=75"
      alt="Feed Upjon"
      className="rounded-2xl shadow-lg max-w-full h-auto"
    />
  </div>

  
  <div className="text-gray-700 text-lg leading-8 space-y-5">
    <p>
      <strong>Feed Up</strong> — O'zbekistondagi eng yirik fast-food tarmoqlaridan biri.
      Hozirda filiallarimiz soni 50 taga yetdi va kompaniyada 1000 dan ortiq
      jonkuyar xodim faoliyat yuritmoqda.
    </p>

    <p>
      Kompaniyaga 2010-yilda <strong>Umid Irgashev</strong> tomonidan asos solingan.
      Dastlab brend “Dastyor”, keyinchalik “Bisyor” nomlari bilan tanilgan.
    </p>

    <p>
      2016-yilda katta rebrending amalga oshirildi — yangi strategiya,
      yangi maqsadlar va yangi nom taqdim etildi. Shundan so'ng brend
      <strong> “Feed Up”</strong> nomi bilan tanildi.
    </p>

    <p className="font-semibold text-black">Bugungi kunda Feed Up — bu:</p>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Haqiqiy ta'm</strong> — burgerlar, donarlar, lavashlar,
        sendvichlar va hot-doglar
      </li>
      <li>
        <strong>Yuqori sifat</strong> — mahsulotlar mahalliy va xorijiy
        yetkazib beruvchilardan olinadi
      </li>
      <li>
        <strong>Xalqqa yaqinlik</strong> — butun respublika bo'ylab filiallar
      </li>
      <li>
        <strong>Tezkor yetkazish</strong> — buyurtmalar issiq holda yetkaziladi
      </li>
    </ul>

    <p className="font-semibold text-black">
      Feed Up — bu oddiy fast-food emas. Bu haqiqiy o'zbekona ta,mga ega
      milliy brend!
    </p>
   
  </div>
</div>
    
  );
};

export default About;
