import images1 from "../../images/images1.jpg";
import images2 from "../../images/images2.jpg";
import images3 from "../../images/images3.jpg";
import images4 from "../../images/images4.jpg";
// import { Icons } from '../icons'

export const Hero = () => {
  return (
    <>
      {/* <div>
        <a>
          <Icons name="spotify-icon" className="myFistSvg"/>
        </a>
      </div> */}
      <div>
        <img src={images1} alt="img" width={300} />
        <img src={images2} alt="img" width={300} />
        <img src={images3} alt="img" width={300} />
        <img src={images4} alt="img" width={300} />
      </div>
    </>
  );
};
