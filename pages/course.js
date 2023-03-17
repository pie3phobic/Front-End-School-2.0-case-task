import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ReactPlayer from "react-player";
import Image from "next/image";
import LessonCard from "../components/LessonCard";
import { FireIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

function course({ data }) {
  console.log(data);
  const router = useRouter();
  console.log(data.meta.courseVideoPreview.link);
  console.log(data.lessons[0].previewImageLink);
  console.log(data.lessons[0].order);
  const lessonData = data.lessons;
  console.log(lessonData);
  console.log(lessonData.length);
  const [videoUrl, setVideoUrl] = useState(data.meta.courseVideoPreview.link);
  const [nowPlaying, setNowPlaying] = useState("Course Intro");
  const [lockedContent, setLockedContent] = useState(false);
  const [played, setPlayed] = useState(0);
  //console.log(data.previewImageLink);
  const [isPlaying, setIsPlaying] = React.useState(true);
  // const [isEnded, setIsEnded] = React.useState(
  //   typeof window !== "undefined"
  //     ? window.localStorage.getItem("isEnded")
  //     : false
  // );
  const [isEnded, setIsEnded] = React.useState(false);
  const playerRef = useRef();
  const lessonRef = useRef(null);
  const onEnded = useCallback(() => {
    if (!isEnded) {
      //const timeToStart = 7 * 60 + 12.6;
      playerRef.current.getDuration() == played;
      setIsEnded(true);
      //window.localStorage.setItem("isEnded", isEnded);
      console.log("Lesson Finished!");
    }
  }, [isEnded]);
  return (
    <div className="">
      <Header />
      <div className="ml-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold pb-2">{data.title}</h1>
          <p className="pb-6 text-lg">{data.description}</p>
          <div className="pb-4">
            <a className="bg-red-400/80 px-2 py-1 rounded-3xl text-black/60">
              #{data.tags}
            </a>
            <div className="flex align-middle mt-2 mb-8">
              <FireIcon className="h-5 text-red-400" />
              <a className="text-red-400 text-sm font-semibold">
                Launched on: {data.launchDate.split("T")[0]}
              </a>
            </div>
            <div className="flex">
              <StarIcon className="h-6 text-red-400" />
              <a className="font-bold">{data.rating}</a>
            </div>
            <div className="flex-grow">
              {[data.meta.skills]?.map((item, value) =>
                item?.map((value) => <p className="text-black/70">{value}</p>)
              )}
            </div>
            <p className="font-semibold pt-4 text-lg">
              Now Playing: {nowPlaying}
            </p>
            <div className="pt-4">
              {lockedContent == true && (
                <a className="bg-red-400/80 px-24 py-1 rounded-3xl text-white">
                  This content is locked
                </a>
              )}
              {isEnded == true && (
                <a className="bg-green-400/80 px-24 py-1 rounded-3xl text-white">
                  Lesson finished ✔
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          {/* <img
          src={data.lessons[0].previewImageLink + "/0.webp"}
          className="rounded-2xl"
        /> */}
          <div>
            {/* {useEffect(() => {
            setIsPlaying(true);
          }, [])} */}
            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              onEnded={onEnded}
              playing={isPlaying}
              // onReady={onReady}
              // light={true}
              //playing={true}
              controls={true}
              onProgress={(progress) => {
                setPlayed(progress.playedSeconds);
                // console.log(played);
              }}
            />
          </div>
          <div className="flex flex-col bg-gray-200 h-[560px] w-[400px] overflow-y-auto rounded-3xl absolute top-80 right-0 pb-8">
            <p className="pl-10 pt-6 pb-4 text-xl font-semibold">Lessons:</p>
            {lessonData.map(
              ({
                duration,
                id,
                link,
                meta,
                order,
                previewImageLink,
                status,
                title,
                type,
              }) => (
                <div
                  ref={lessonRef}
                  onClick={() => {
                    console.log(lessonRef.current.id);
                    setNowPlaying(
                      "Lesson " + { order }.order + " '" + { title }.title + "'"
                    );
                    if ({ status }.status == "unlocked") {
                      setVideoUrl({ link }.link);
                      setIsEnded(false);
                      setLockedContent(false);
                    } else {
                      setLockedContent(true);
                      setVideoUrl("");
                    }
                  }}
                >
                  <LessonCard
                    key={id}
                    duration={duration}
                    id={id}
                    link={link}
                    meta={meta}
                    order={order}
                    previewImageLink={previewImageLink}
                    status={status}
                    title={title}
                    type={type}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default course;
export async function getServerSideProps(context) {
  const id = context.query.id;
  // Fetch data from external API
  //const courseId = "352be3c6-848b-4c19-9e7d-54fe68fef183";
  const host = "http://api.wisey.app";
  const version = "api/v1";
  const accessToken = await fetch(
    `${host}/${version}/auth/anonymous?platform=subscriptions`
  );
  const accesData = await accessToken.json();
  const token = accesData.token;
  const res = await fetch(`${host}/${version}/core/preview-courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, accesData } };
}
