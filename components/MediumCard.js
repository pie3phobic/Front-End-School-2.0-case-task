import React from "react";

function MediumCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20 pb-14">
      <div className="bg-gray-200/80 p-8 pb-14 rounded-3xl hover:scale-105 transform transition duration-200 ease-out flex flex-col justify-center align-middle">
        <img
          src="pic-11.png"
          className="rounded-3xl sm:w-[300px] md:w-[300px]"
        ></img>
        <p className="font-semibold text-lg pt-4">Qualified lecturers</p>
      </div>
      <div
        className="bg-gray-200/80 p-8 pb-14 rounded-3xl
      hover:scale-105 transform transition duration-200 ease-out flex flex-col justify-center align-middle"
      >
        <img src="pic-12.png" className="rounded-3xl sm:w-[300px]"></img>
        <p className="font-semibold text-lg pt-4">Technical support 24/7</p>
      </div>
      <div
        className="bg-gray-200/80 p-8 pb-14 rounded-3xl
      hover:scale-105 transform transition duration-200 ease-out flex flex-col justify-center align-middle"
      >
        <img src="pic-13.png" className="rounded-3xl sm:w-[300px]"></img>
        <p className="font-semibold text-lg pt-4">Challenges</p>
      </div>
    </div>
  );
}

export default MediumCard;
