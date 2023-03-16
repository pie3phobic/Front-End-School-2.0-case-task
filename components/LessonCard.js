import React, { useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

function LessonCard({
  duration,
  id,
  link,
  meta,
  order,
  previewImageLink,
  status,
  title,
  type,
}) {
  //   const handleClick = () => {
  //     console.log(link);
  //   };
  return (
    <div>
      <div
        className="flex rounded-2xl bg-white h-24 w-[300px] py-8 my-2 mx-auto cursor-pointer align-middle active:bg-red-400"
        // onClick={handleClick}
      >
        {/* <img src={previewImageLink + "/" + order + ".webp"}></img> */}
        <img src="https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview/1.webp"></img>
        <p className="flex-grow">
          {order}. {title}
        </p>
        {status == "locked" && (
          <LockClosedIcon className="h-6 pr-10 text-red-400" />
        )}
      </div>
    </div>
  );
}

export default LessonCard;
