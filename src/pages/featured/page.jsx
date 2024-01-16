"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/utilities/headerMenu";
import Pagination from "@/utilities/pagination";
import Featured from "@/components/Featured";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topNovel, setTopNovel] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?page=${page}`
    );
    const data = await response.json();
    setTopNovel(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`MANGA TERPOPULER #${page}`} />
      <Featured api={topNovel} />
      <Pagination page={page} lastPage={page} />
    </>
  );
};

export default Page;
