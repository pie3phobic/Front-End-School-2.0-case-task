import {
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const openCourses = () => {
    router.push({
      pathname: "/courses",
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <img src="logo-study.png" width="100px"></img>
      </div>
      {/* Middle - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <p
          className="hidden md:inline cursor-pointer text-lg"
          onClick={openCourses}
        >
          Courses
        </p>
        <div className=" flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
export default Header;
