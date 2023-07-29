import "./HeroBanners.css";

import uwu1 from "../assets/uwus/1.png";
import uwu2 from "../assets/uwus/2.png";
import uwu3 from "../assets/uwus/3.png";
import uwu4 from "../assets/uwus/4.png";
import uwu5 from "../assets/uwus/5.png";
import uwu6 from "../assets/uwus/6.png";
import uwu7 from "../assets/uwus/7.png";
import uwu8 from "../assets/uwus/8.png";
import uwu9 from "../assets/uwus/9.png";
import uwu10 from "../assets/uwus/10.png";
import uwu11 from "../assets/uwus/11.png";
import uwu12 from "../assets/uwus/12.png";
import uwu13 from "../assets/uwus/13.png";
import uwu14 from "../assets/uwus/14.png";
import uwu15 from "../assets/uwus/15.png";
import uwu16 from "../assets/uwus/16.png";
import uwu17 from "../assets/uwus/17.png";
import uwu18 from "../assets/uwus/18.png";
import uwu19 from "../assets/uwus/19.png";
import uwu20 from "../assets/uwus/20.png";
import uwu21 from "../assets/uwus/21.png";
import uwu22 from "../assets/uwus/22.png";
import uwu23 from "../assets/uwus/23.png";
import uwu24 from "../assets/uwus/24.png";
import uwu25 from "../assets/uwus/25.png";
import uwu26 from "../assets/uwus/26.png";
import uwu27 from "../assets/uwus/27.png";
import uwu28 from "../assets/uwus/28.png";
import uwu29 from "../assets/uwus/29.png";
import uwu30 from "../assets/uwus/30.png";
import uwu31 from "../assets/uwus/31.png";
import uwu32 from "../assets/uwus/32.png";
import uwu33 from "../assets/uwus/33.png";
import uwu34 from "../assets/uwus/34.png";
import uwu35 from "../assets/uwus/35.png";
import uwu36 from "../assets/uwus/36.png";
import uwu37 from "../assets/uwus/37.png";
import uwu38 from "../assets/uwus/38.png";
import uwu39 from "../assets/uwus/39.png";
import uwu40 from "../assets/uwus/40.png";

const top: string[] = [
  uwu1,
  uwu2,
  uwu3,
  uwu4,
  uwu5,
  uwu6,
  uwu7,
  uwu8,
  uwu9,
  uwu10,
  uwu11,
  uwu12,
  uwu13,
  uwu14,
  uwu15,
  uwu16,
  uwu17,
  uwu18,
  uwu19,
  uwu20,
];

const bottom: string[] = [
  uwu21,
  uwu22,
  uwu23,
  uwu24,
  uwu25,
  uwu26,
  uwu27,
  uwu28,
  uwu29,
  uwu30,
  uwu31,
  uwu32,
  uwu33,
  uwu34,
  uwu35,
  uwu36,
  uwu37,
  uwu38,
  uwu39,
  uwu40,
];

const HeroBanners = () => {
  return (
    <div className="hero-banners">
      <div className="banner-top">
        {[...top, ...top].map((uwu, index) => {
          return (
            <div className="uwu-container" key={index}>
              <img src={uwu} alt="uwu" className="uwu" />
            </div>
          );
        })}
      </div>
      <div className="banner-bottom">
        {[...bottom, ...bottom].map((uwu, index) => {
          return (
            <div className="uwu-container" key={index}>
              <img src={uwu} alt="uwu" className="uwu" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBanners;
