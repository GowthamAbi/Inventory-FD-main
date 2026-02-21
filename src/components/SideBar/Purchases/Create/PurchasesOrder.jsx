import React from "react";

export default function PurchasesOrder() {
  return (
    <div>
      <form action="">
        {/*Vendor name and address*/}
        <div className="flex ">
          <h4 className="text-red-500">Vendor Name*</h4>
          <div className="flex justify-center items-center">
            <input type="text" className="border border-gray-500" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/*PurchasesOrder Details*/}
        <div></div>

        {/*Items Details*/}
        <div></div>
      </form>
    </div>
  );
}
