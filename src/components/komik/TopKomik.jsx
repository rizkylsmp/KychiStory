import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Top = () => {
  const [topKomik, setTopKomik] = useState([]);

  const getTopKomik = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/top/manga`
    );
    setTopKomik(response.data.data);
  };

  useEffect(() => {
    getTopKomik();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-1 pt-4 bg-[#37404a]">
      {topKomik?.map((tops) => (
        <Card all={tops} />
      ))}
    </div>
  );
};

export default Top;
