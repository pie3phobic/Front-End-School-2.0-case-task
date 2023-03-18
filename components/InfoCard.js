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
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div
      className="flex flex-col lg:flex-row py-4 lg:py-7 px-4 gap-10 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t last:border-t-0 "
      onClick={openItem}
    >
      <div className="relative w-[380px] h-[190px] lg:w-[380px] lg:h-[220px] md:w-full md:h-[300px] flex-shrink-0 self-center">
        <Image
          src={previewImageLink + "/cover.webp"}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{title}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-black/60 font-semibold">{description}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-red-400">
          Number of lessons: {lessonsCount}
        </p>
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
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
