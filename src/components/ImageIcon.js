import React from "react";

// import icons
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";


export const ImageIcon = ({ alt }) => {
  // 
  let IconEl;

  if (alt === "cloud_icon") IconEl = FaCloudDownloadAlt;
  if (alt === "gears_icon") IconEl = GiGears;
  if (alt === "wrench_icon") IconEl = FaWrench;

  return <IconEl className="imageIcon"/>;
};
