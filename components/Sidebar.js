import React from "react";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  const openCourses = () => {
    router.push({
      pathname: "/courses",
    });
  };
  return (
    <div className="hidden lg:block p-2 md:p-10 py-6 overflow-y-auto">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-semibold">
          Explore
        </h1>
        <h2 className="hidden md:inline text-center text-xs">
          Start studying right now
        </h2>
      </div>
      <div className="bg-gray-100 px-10 py-8 rounded-3xl w-[250px] text-center font-semibold">
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6 hover:bg-red-400/50 transition duration-150 cursor-pointer">
          <p className="text-gray-700">Arts & Humanities</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer">
          <p className="text-gray-700 ">Business</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer">
          <p className="text-gray-700">Computer Science</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer">
          <p className="text-gray-700">Data Science</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer">
          <p className="text-gray-700">Health</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl  hover:bg-red-400/50 transition duration-150 cursor-pointer">
          <p className="text-red-400" onClick={openCourses}>
            Explore All
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
