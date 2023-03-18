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
  //console.log(data);
  const router = useRouter();
  const lessonData = data.lessons;
  //console.log(lessonData);
  const [videoUrl, setVideoUrl] = useState(data.meta.courseVideoPreview?.link);
  const [nowPlaying, setNowPlaying] = useState("Course Intro");
  const [lockedContent, setLockedContent] = useState(false);
  if (data.meta.courseVideoPreview?.link === void 0)
    useEffect(() => {
      setLockedContent(true);
    }, []);
  const [played, setPlayed] = useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isEnded, setIsEnded] = React.useState(false);
  const playerRef = useRef();
  const [isReady, setIsReady] = React.useState(false);
  const onEnded = useCallback(() => {
    if (!isEnded) {
      playerRef.current.getDuration() == played;
      setIsEnded(true);
      console.log("Lesson Finished!");
    }
  }, [isEnded]);
  const onReady = useCallback(() => {
    if (!isReady) {
      const videoDurations =
        JSON.parse(window.localStorage.getItem("videoDurations")) || {};
      if (JSON.stringify(videoDurations) !== "{}") {
        let timestamp = videoDurations[playerRef.current.props.url];
        if (timestamp > 0) {
          playerRef.current.seekTo(timestamp, "seconds");
          playerRef.current.play();
        }
      }
      setIsReady(true);
    }
  }, [isReady]);
  return (
    <div className="">
      <Header />
      <div className="ml-10">
        <div className="">
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
          <div className="flex flex-col  lg:flex-row lg:justify-between">
            <div>
              <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                onEnded={onEnded}
                playing={isPlaying}
                onReady={onReady}
                muted={false}
                controls={true}
                onProgress={(progress) => {
                  setPlayed(progress.playedSeconds);
                  // console.log(played);
                  const video_url = playerRef.current.props.url;
                  const videoDurations =
                    JSON.parse(window.localStorage.getItem("videoDurations")) ||
                    {};
                  videoDurations[video_url] = played;
                  window.localStorage.setItem(
                    "videoDurations",
                    JSON.stringify(videoDurations)
                  );
                }}
              />
            </div>
          </div>
          <div className="flex flex-col bg-gray-200 h-[560px] lg:w-[500px] overflow-scroll rounded-3xl lg:absolute pb-8 scrollbar-hide md:w-[642px] lg:top-80 lg:right-0">
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
                  onClick={() => {
                    setNowPlaying(
                      "Lesson " + { order }.order + " '" + { title }.title + "'"
                    );
                    if ({ status }.status == "unlocked") {
                      setVideoUrl({ link }.link);
                      setIsEnded(false);
                      setLockedContent(false);
                    } else {
                      setLockedContent(true);
                      setIsEnded(false);
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
    </div>
  );
}

export default course;
export async function getServerSideProps(context) {
  const id = context.query.id;
  // Fetch data from external API
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
