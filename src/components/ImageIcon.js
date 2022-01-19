import React from "react";

// import icons
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";


export const ImageIcon = ({ alt }) => {
  if (alt === "cloud_icon") return <FaCloudDownloadAlt />;
  if (alt === "gears_icon") return <GiGears />;
  if (alt === "wrench_icon") return <FaWrench />;
};
