// 
import { AiFillPicture } from "react-icons/ai";

// TODO: make dynamic images' rendering

// element showing before a image
export const LoadImage = ({ alt }) => {
  return (
    <div className="image">
      <AiFillPicture />
      <p>{alt}</p>
    </div>
  );
};
