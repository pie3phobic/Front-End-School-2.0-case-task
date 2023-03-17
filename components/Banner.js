import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid";
import SideTab from "../components/SideTab";
function Banner() {
  return (
    <div className="m-10 flex justify-center align-center flex-col">
      {/* relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px] */}
      {/* <Image
        src="https://links"
        layout="fill"
        objectFit="cover"
      /> */}
      {/* <h1 className="text-4xl text-center py-3 rounded-3xl font-semibold text-red-400">
        Improve your skills faster
      </h1> */}
      <div className="bg-gray-100 p-16 rounded-3xl flex flex-col align-center">
        {/* <h1 className="text-center">Improve your skills faster</h1> */}
        <img src="student-cr.jpg" width="700px" className="rounded-3xl"></img>
      </div>
      {/* <div className="flex justify-between">
        <h1 className="text-2xl font-semibold pt-6">
          Improve your skills faster
        </h1> */}
      {/* <SideTab /> */}
      {/* </div> */}
      <div className=""></div>
      {/* <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg"></p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Start
        </button>
      </div> */}
    </div>
  );
}
export default Banner;
