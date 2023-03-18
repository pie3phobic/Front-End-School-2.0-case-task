import Image from "next/image";
function Banner() {
  return (
    <div className="m-10 flex justify-center align-center flex-col">
      {/* relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px] */}
      {/* <Image
        src="https://links"
        layout="fill"
        objectFit="cover"
      /> */}
      <div className="bg-gray-100 p-6 md:p-10 lg:p-16 rounded-3xl flex flex-col align-center">
        <img src="student-cr.jpg" width="700px" className="rounded-3xl"></img>
      </div>
      <div className=""></div>
    </div>
  );
}
export default Banner;
