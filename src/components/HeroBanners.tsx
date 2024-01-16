import "./HeroBanners.css";

import uwu1 from "../assets/uwus/1.webp";
import uwu2 from "../assets/uwus/2.webp";
import uwu3 from "../assets/uwus/3.webp";
import uwu4 from "../assets/uwus/4.webp";
import uwu5 from "../assets/uwus/5.webp";
import uwu6 from "../assets/uwus/6.webp";
import uwu7 from "../assets/uwus/7.webp";
import uwu8 from "../assets/uwus/8.webp";
import uwu9 from "../assets/uwus/9.webp";
import uwu10 from "../assets/uwus/10.webp";
import uwu11 from "../assets/uwus/11.webp";
import uwu12 from "../assets/uwus/12.webp";
import uwu13 from "../assets/uwus/13.webp";
import uwu14 from "../assets/uwus/14.webp";
import uwu15 from "../assets/uwus/15.webp";
import uwu16 from "../assets/uwus/16.webp";
import uwu17 from "../assets/uwus/17.webp";
import uwu18 from "../assets/uwus/18.webp";
import uwu19 from "../assets/uwus/19.webp";
import uwu20 from "../assets/uwus/20.webp";
import uwu21 from "../assets/uwus/21.webp";
import uwu22 from "../assets/uwus/22.webp";
import uwu23 from "../assets/uwus/23.webp";
import uwu24 from "../assets/uwus/24.webp";
import uwu25 from "../assets/uwus/25.webp";
import uwu26 from "../assets/uwus/26.webp";
import uwu27 from "../assets/uwus/27.webp";
import uwu28 from "../assets/uwus/28.webp";
import uwu29 from "../assets/uwus/29.webp";
import uwu30 from "../assets/uwus/30.webp";
import uwu31 from "../assets/uwus/31.webp";
import uwu32 from "../assets/uwus/32.webp";
import uwu33 from "../assets/uwus/33.webp";
import uwu34 from "../assets/uwus/34.webp";
import uwu35 from "../assets/uwus/35.webp";
import uwu36 from "../assets/uwus/36.webp";
import uwu37 from "../assets/uwus/37.webp";
import uwu38 from "../assets/uwus/38.webp";
import uwu39 from "../assets/uwus/39.webp";
import uwu40 from "../assets/uwus/40.webp";

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
              <img src={uwu} alt="uwu" className="uwu" loading={index < 10 ? "eager" : "lazy"} />
            </div>
          );
        })}
      </div>
      <div className="banner-bottom">
        {[...bottom, ...bottom].map((uwu, index) => {
          return (
            <div className="uwu-container" key={index}>
              <img src={uwu} alt="uwu" className="uwu" loading={index < 10 ? "eager" : "lazy"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBanners;
