import React, { useState } from "react";

const Callcenter = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const TOKEN = "8243810983:AAHYnXQEaHuw5EFhQqIt1jx3Y-yJx-R6o-w";
    const CHAT_ID = "6571201792";

    const text = `
📩 Yangi murojaat
👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar:
${message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      alert("Xabaringiz yuborildi ✅");
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      alert("Xatolik yuz berdi ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        <div className="p-10">
          <h1 className="text-4xl font-bold mb-6">Biz bilan bog'laning</h1>
          <p className="text-gray-600 mb-4">
            Savollaringiz, takliflaringiz yoki murojaatlaringiz bo'lsa, biz bilan bog'laning.
          </p>
          <p className="text-gray-600 mb-8">
            Quyidagi formani to'ldiring va biz imkon qadar tez siz bilan bog'lanamiz.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📞 +998 71 200 22 11</p>
            <p>✉️ feedup.uz@yandex.ru</p>
            <p>📘 Facebook</p>
            <p>📷 Instagram</p>
            <p>✈️ Telegram</p>
          </div>
        </div>

        <div className="p-10 bg-gray-50">
          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Ism *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <input
              type="tel"
              placeholder="Telefon raqami *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <textarea
              placeholder="Xabaringizni yozing *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <div className="flex justify-center text-gray-400 text-2xl">☆ ☆ ☆ ☆ ☆</div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition"
            >
              Jo'natish
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Callcenter;
