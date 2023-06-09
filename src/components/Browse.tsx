import { useRef } from "react";
import "./Browse.css";
import Section from "./Section";
import useFixedStyles from "../hooks/use-scroll-data";
import Button from "./Button";

import uwu1 from "../assets/browse/1.png";
import uwu2 from "../assets/browse/2.png";
import uwu3 from "../assets/browse/3.png";
import uwu4 from "../assets/browse/4.png";
import uwu5 from "../assets/browse/5.png";
import uwu6 from "../assets/browse/6.png";
import uwu7 from "../assets/browse/7.png";

interface UwuType {
  src: string;
  width: number; // Percentage of screen width
  speed: number; // Percentage of scroll speed
  left: number; // Percentage of screen width
  top: number; // Percentage of screen height
}

const uwus: UwuType[] = [
  {
    src: uwu2,
    width: 25,
    speed: 0.35,
    left: -5,
    top: 130,
  },
  {
    src: uwu1,
    width: 25,
    speed: 0.35,
    left: 3,
    top: -5,
  },
  {
    src: uwu6,
    width: 15,
    speed: 0.6,
    left: 25,
    top: 110,
  },
  {
    src: uwu3,
    width: 18,
    speed: 0.2,
    left: 50,
    top: 40,
  },
  {
    src: uwu4,
    width: 20,
    speed: 0.35,
    left: 78,
    top: 60,
  },
  {
    src: uwu5,
    width: 10,
    speed: 0.7,
    left: 75,
    top: 15,
  },
  {
    src: uwu7,
    width: 15,
    speed: 0.6,
    left: 75,
    top: 180,
  },
];

const Browse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { fixedStyles, percentScrolled } = useFixedStyles(containerRef);

  return (
    <Section id="browse">
      <div className="browse" ref={containerRef}>
        <div className="browse-content" style={fixedStyles}>
          <h2 className="browse-header">Browse anime art from the community</h2>
          <Button
            link="https://uwucrew.art/derivatives"
            label="View derivative gallery"
          />
          {
            // Render uwus
            uwus.map((uwu, index) => {
              const { src, width, speed, left, top } = uwu;
              const zIndex = speed > 0.5 ? 3 : 1;
              const windowHeight = containerRef.current?.clientHeight || 0;
              const translateY = percentScrolled * speed * windowHeight;
              const style = {
                width: `${width}%`,
                left: `${left}%`,
                top: `${top}%`,
                transform: `translateY(${-translateY}px)`,
                zIndex,
              };
              return (
                <img
                  key={index}
                  className="browse-image"
                  src={src}
                  alt="uwu"
                  style={style}
                />
              );
            })
          }
        </div>
      </div>
    </Section>
  );
};

export default Browse;
