import "./HeroBanners.css";

import uwu1 from "../assets/uwus/1.png";

interface UwuType {
  color: string;
  image: string;
}

const uwus: UwuType[] = [
  {
    color: "#C27797",
    image: uwu1,
  },
];

const AMOUNT = 7;

const HeroBanners = () => {
  return (
    <div className="hero-banners">
      <div className="banner">
        {Array.from(Array(AMOUNT).keys()).map((i) => {
          const startIndex = Math.floor(Math.random() * uwus.length);
          const index = (startIndex + 1) % uwus.length;
          const uwu = uwus[index];
          return (
            <div
              className="uwu-container"
              style={{ background: uwu.color }}
              key={i}
            >
              <img src={uwu.image} alt="uwu" className="uwu" />
            </div>
          );
        })}
      </div>
      <div className="banner">
        {Array.from(Array(AMOUNT).keys()).map((i) => {
          const startIndex = Math.floor(Math.random() * uwus.length);
          const index = (startIndex + 1) % uwus.length;
          const uwu = uwus[index];
          return (
            <div
              className="uwu-container"
              style={{ background: uwu.color }}
              key={i}
            >
              <img src={uwu.image} alt="uwu" className="uwu" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBanners;
