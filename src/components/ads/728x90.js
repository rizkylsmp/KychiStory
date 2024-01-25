import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.topcreativeformat.com/a3728693016563aafdf5d9b1df821f03/invoke.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);
};

export default Banner;
