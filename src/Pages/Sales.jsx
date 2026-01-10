import React from "react";

const Sales = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <div className="w-full px-6 pt-6 text-sm text-gray-400 text-left">
        Bosh sahifa <span>›</span> Aksiyalar
      </div>

      <h1 className="w-full text-left text-3xl font-semibold mb-10 px-6">
        Aksiyalar
      </h1>

      <div className="w-24 h-24 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9s9-4.03 9-9c0-1.7-.47-3.3-1.3-4.65M12 7v5l3 3"
          />
        </svg>
      </div>

      <h2 className="text-lg font-medium mb-2">
        Aksiyalar hali chop etilmagan
      </h2>
      <p className="text-gray-500 max-w-md">
        Lekin biz tez orada mega aksiyani ishga tushiramiz. Albatta habardor
        bo‘ling qiling!
      </p>
    </div>
  );
};

export default Sales;
