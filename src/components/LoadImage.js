// 
import { AiFillPicture } from "react-icons/ai";


// element showing before an image
export const LoadImage = ({ alt }) => {
  return (
    <div className="image">
      <AiFillPicture className="imageIcon" />
      <p>{alt}</p>
    </div>
  );
};
