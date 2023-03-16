import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        {/* <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        /> */}
        <img src={img} className="rounded-3xl absolute w-[700px] left-72"></img>
      </div>
      <div className="absolute top-32 left-28">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-lg text-white bg-red-400 px-4 py-2 rounded-3xl mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
