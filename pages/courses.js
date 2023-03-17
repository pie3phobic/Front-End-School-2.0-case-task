import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InfoCard from "../components/InfoCard";
import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import Pagination from "../components/Pagination";
import { paginate } from "../helpers/paginate";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

function courses({ data }) {
  console.log(data);
  const coursesData = data.courses;
  console.log(coursesData);
  const router = useRouter();
  //ES6 Destructuting
  //   const
  //{
  //     containsLockedLessons,
  //     description,
  //     duration,
  //     id,
  //     launchDate,
  //     lessonsCount,
  //     meta,
  //     prewiewImageLink,
  //     rating,
  //     status,
  //     tags,
  //     title,
  //   } = data;
  //   console.log(description);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(coursesData, currentPage, pageSize);
  console.log(paginatedPosts);
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        {paginatedPosts.map(
          ({
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
          }) => (
            <InfoCard
              key={id}
              containsLockedLessons={containsLockedLessons}
              description={description}
              duration={duration}
              id={id}
              launchDate={launchDate}
              lessonsCount={lessonsCount}
              meta={meta}
              previewImageLink={previewImageLink}
              rating={rating}
              status={status}
              tags={tags}
              title={title}
            />
          )
        )}
        <Pagination
          items={coursesData.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default courses;
export async function getServerSideProps() {
  // Fetch data from external API
  const host = "http://api.wisey.app";
  const version = "api/v1";
  const accessToken = await fetch(
    `${host}/${version}/auth/anonymous?platform=subscriptions`
  );
  const accesData = await accessToken.json();
  const token = accesData.token;
  const res = await fetch(`${host}/${version}/core/preview-courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, accesData } };
}
