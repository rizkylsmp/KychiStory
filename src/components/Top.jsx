import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Top = () => {
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const topAnime = await axios.get(
      `${process.env.REACT_APP_BASEURL}/top/anime`
    );
    setTopAnime(topAnime.data.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-1 pt-4">
      {topAnime?.map((tops) => (
        <Card all={tops} />
      ))}
    </div>
  );
};

export default Top;
