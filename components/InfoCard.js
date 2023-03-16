import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
function InfoCard({
  containsLockedLessons,
  description,
  duration,
  id,
  launchDate,
  lessonsCount,
  meta,
  previewImageLink,
  rating,
  status,
  tags,
  title,
}) {
  console.log(description);
  console.log(meta);
  const router = useRouter();
  const openItem = (e) => {
    router.push({
      pathname: "/course",
      query: {
        id,
      },
    });
  };
  // const { slug, skills, courseVideoPreview } = meta;
  //console.log(skills);
  //console.log(courseVideoPreview);
  //console.log(skills);
  const [playVideo, setPlayVideo] = useState(false);
  const handleMouseEnter = (e) => {
    // const vid = e.target;
    // vid.muted = true;
    // vid.play();
  };

  // handle mouse leave
  const handleMouseLeave = (e) => {
    // const vid = e.target;
    // vid.muted = false;
    // vid.currentTime = 0;
    // vid.pause();
  };
  return (
    // <div className="">
    //   <p>{description}</p>
    //   {/* <p>{previewImageLink}</p> */}
    //   <img src={previewImageLink + "/cover.webp"}></img>
    // </div>
    <div
      className="flex py-7 px-2 pr-4 gap-10 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t last:border-t-0"
      // onMouseEnter={useEffect((e) => {
      //   setPlayVideo(true);
      // }, [])}
      // onMouseLeave={useEffect((e) => {
      //   setPlayVideo(false);
      // }, [])}
    >
      <div className="relative h-24 w-40 md:h-64 md:w-[400px] flex-shrink-0">
        {/* {playVideo == true && (
          <ReactPlayer url={this.meta.courseVideoPreview} />
        )}
        {playVideo == false && (
          <img
            src={previewImageLink + "/cover.webp"}
            className="rounded-2xl"
          ></img>
        )} */}
        <Image
          src={previewImageLink + "/cover.webp"}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-xl font-semibold" onClick={openItem}>
            {title}
          </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-black/60 font-semibold">{description}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-red-400">
          Number of lessons: {lessonsCount}
        </p>
        {/* {console.log(skills)} */}
        {/* {console.log(skills)} */}
        {/* {skills.map((item) => console.log(item))} */}
        {/* {[meta.skills].map((item) => console.log(item))} */}
        {/* {[meta.skills]?.map((item, value) =>
          item?.map((value) => console.log(value))
        )} */}
        <div className="flex-grow">
          {[meta.skills]?.map((item, value) =>
            item?.map((value) => <p className="text-black/70">{value}</p>)
          )}
        </div>
        <div className="flex items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {rating}
          </p>
          {/* <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
