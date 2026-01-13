import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WorkPlace = () => {
  const [open, setOpen] = useState(false);

  const [inputsData, setData] = useState({
    firstName: "",
    lastName: "",
    jobType: "",
    jobSeat: "",
    birthday: "",
    gender: "",
    phone: "",
    email: "",
    city: "",
    aboutMe: "",
    photo: "",
  });

  function saveValue(type, value) {
    setData((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  useEffect(() => {
    console.log(inputsData);
  }, [inputsData]);

  return (
    <>
      <section className=" py-16 w-full h-100"> </section>
      <img
        src="https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fpages%2F2025%2F06%2F18%2F1750258595660851782.png&w=1080&q=75"
        alt="Feed Upjon"
        className=""
      />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">FeedUp jamoasi qo'shiling</h2>

          <p className="text-gray-800 mb-6">
            Biz tajribali mutaxassislarni va yangi kelganlarni ham yo‘llashdan
            xursandmiz. Oshpazlar, kassirlar va kuryerlar uchun ochiq
            vakansiyalar mavjud. Nega biz? Bozorda 25 yildan ortiq. Biz
            muvaffaqiyatli ishning uzoq tarixi va xodimlarimizga kafolat
            beradigan barqarorlik bilan faxrlanamiz. Moslashuvchan ish jadvali.
            Biz har bir xodimning shaxsiy sharoitlari borligini tushunamiz,
            shuning uchun biz sizga ish va hayot muvozanatini topishga yordam
            beradigan moslashuvchan ish sharoitlarini taklif etamiz.
            <span className="text-black">Raqobatbardosh ish haqi.</span> Biz
            sizning mehnatingizni qadrlaymiz va kompaniyamiz muvaffaqiyatiga
            qo'shgan hissangizga mos keladigan munosib ish haqini taklif
            qilamiz. Karyera o'sishi va kasbiy tayyorgarlik istiqbollari. FeedUp
            - da siz har doim kasbiy rivojlanish va martaba ko'tarilish
            imkoniyatlariga ishonishingiz mumkin. Biz xodimlarimizni o'qitish va
            rivojlantirishga sarmoya kiritamiz. Qulay ish sharoitlari va samimiy
            mutaxassis.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Anketa ochish
          </button>
        </div>

        <div className="flex justify-center">
          <img src="/" alt="" className="max-w-sm w-full" />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Anketani to'ldirish</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                onChange={(e) => saveValue("jobSeat", e.target.value)}
                value={inputsData.jobSeat}
                className="input"
              >
                <option>Ish o'rnini tanlang *</option>
                  <option>POvar*</option>
              </select>

              <select className="input">
                <option>Ish turini tanlang *</option>
              </select>

              <input className="input" placeholder="Ism *" />
              <input className="input" placeholder="Familiya *" />

              <input type="date" className="input" />

              <div className="flex items-center gap-4 border rounded-lg px-3 py-2">
                <span className="text-gray-500">Jinsi *</span>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Erkak
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Ayol
                </label>
              </div>

              <input className="input" placeholder="Telefon raqami *" />
              <input className="input" placeholder="E-mail" />
            </div>
            <input className="input mt-4" placeholder="Yashash shahri *" />
            <textarea
              className="input mt-4 h-24 resize-none"
              placeholder="Men haqimda *"
            />

            <textarea
              className="input mt-4 h-24 resize-none"
              placeholder="Nima uchun siz biz bilan ishlashni xohlaysiz? *"
            />

            <input type="file" className="input mt-4" />

            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Anketani jo'natish
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkPlace;
