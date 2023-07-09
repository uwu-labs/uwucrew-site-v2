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
import uwu8 from "../assets/browse/8.png";

interface UwuType {
  src: string;
  width: number; // Percentage of screen width
  speed: number; // Percentage of scroll speed
  left: number; // Percentage of screen width
  top: number; // Percentage of screen height
}

const uwus: UwuType[] = [
  {
    src: uwu1,
    width: 25,
    speed: 0.25,
    left: 8,
    top: 10,
  },
  {
    src: uwu2,
    width: 10,
    speed: 0.1,
    left: 20,
    top: 20,
  },
  {
    src: uwu3,
    width: 15,
    speed: 0.15,
    left: 50,
    top: 30,
  },
  {
    src: uwu4,
    width: 20,
    speed: 0.2,
    left: 80,
    top: 40,
  },
  {
    src: uwu5,
    width: 10,
    speed: 0.8,
    left: 90,
    top: 50,
  },
  {
    src: uwu6,
    width: 15,
    speed: 0.15,
    left: 10,
    top: 60,
  },
  {
    src: uwu7,
    width: 20,
    speed: 0.2,
    left: 30,
    top: 70,
  },
  {
    src: uwu8,
    width: 10,
    speed: 0.8,
    left: 70,
    top: 80,
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
              if (containerRef.current === null) return null;
              const windowHeight = containerRef.current.clientHeight;
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
