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
  return (
    <div className="">
      <div className="flex rounded-2xl bg-white h-28 w-[400px] my-2 mx-auto cursor-pointer items-center active:bg-red-400">
        <img
          src={previewImageLink + "/lesson-" + order + ".webp"}
          className="rounded-2xl w-32 h-[75px] mx-4"
        ></img>
        <p className="flex-grow ">
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
