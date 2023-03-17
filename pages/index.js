import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SideTab from "../components/SideTab";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import MediumCard from "../components/MediumCard";

export default function Home() {
  const router = useRouter();
  const openCourses = () => {
    router.push({
      pathname: "/courses",
      // query: {
      // },
    });
  };
  return (
    // <div className={styles.container}>
    <div className="">
      <Head>
        <title>My Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex">
        <Sidebar />
        <div className="max-w-7xl mx-auto overflow-y-auto">
          <Banner />
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <a className="text-5xl font-semibold text-red-400">Improve</a>
        <a className="text-5xl font-semibold"> your skills faster</a>
        <div className="flex justify-center align-middle pt-8">
          <img src="study-img.png" className="w-[700px]"></img>
        </div>
        <a className="text-5xl font-semibold absolute right-[520px]">
          Study with
        </a>
        <a className="text-5xl font-semibold absolute right-24 text-red-400">
          your own schedule
        </a>
        <div className="flex justify-center pt-24 align-middle">
          <img src="stud2-img.png" className="w-[700px]"></img>
        </div>
        <div className="flex justify-center pt-10">
          <button
            className="bg-red-400 rounded-full text-white font-semibold px-6 py-2 text-4xl shadow-md hover:shadow-lg active:scale-105 transform transition duration-200 ease-out"
            onClick={openCourses}
          >
            Go To Courses
          </button>
        </div>
        <MediumCard />
      </main>
      <Footer />
    </div>
  );
}
