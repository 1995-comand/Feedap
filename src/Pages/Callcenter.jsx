import React from 'react'

const Callcenter = () => {
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left side */}
        <div className="p-10">
          <h1 className="text-4xl font-bold mb-6">Biz bilan bog‘laning</h1>
          <p className="text-gray-600 mb-4">
            Savollaringiz, takliflaringiz yoki murojaatlaringiz bo‘lsa, biz bilan bog‘laning.
          </p>
          <p className="text-gray-600 mb-8">
            Quyidagi formani to‘ldiring va biz imkon qadar tez siz bilan bog‘lanamiz.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📞 +998 71 200 22 11</p>
            <p>✉️ feedup.uz@yandex.ru</p>
            <p>📘 Facebook</p>
            <p>📷 Instagram</p>
            <p>✈️ Telegram</p>
          </div>
        </div>

        {/* Right side */}
        <div className="p-10 bg-gray-50">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Ism *"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <input
              type="tel"
              placeholder="Telefon raqami *"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <textarea
              placeholder="Xabaringizni yozing *"
              className="w-full p-4 border rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <div className="flex justify-center text-gray-400 text-2xl">☆ ☆ ☆ ☆ ☆</div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition"
            >
              Jo‘natish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Callcenter