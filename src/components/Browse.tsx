import { useRef } from "react";
import "./Browse.css";
import Section from "./Section";
import useFixedStyles from "../hooks/use-scroll-data";
import Button from "./Button";

const UWU_OPTIONS = 49;
const OFFSET = Math.round(Math.random() * UWU_OPTIONS);

interface UwuType {
  width: number; // Percentage of screen width
  speed: number; // Percentage of scroll speed
  left: number; // Percentage of screen width
  top: number; // Percentage of screen height
}

const uwus: UwuType[] = [
  {
    width: 25,
    speed: 0.35,
    left: 3,
    top: -5,
  },
  {
    width: 10,
    speed: 0.7,
    left: 75,
    top: 15,
  },
  {
    width: 18,
    speed: 0.2,
    left: 50,
    top: 40,
  },
  {
    width: 20,
    speed: 0.35,
    left: 78,
    top: 60,
  },
  {
    width: 15,
    speed: 0.6,
    left: 25,
    top: 110,
  },
  {
    width: 25,
    speed: 0.35,
    left: -5,
    top: 130,
  },
  {
    width: 15,
    speed: 0.6,
    left: 75,
    top: 180,
  },
  {
    width: 13,
    speed: 0.75,
    left: 30,
    top: 220,
  },
  {
    width: 10,
    speed: 1.4,
    left: 50,
    top: 400,
  },
  {
    width: 40,
    speed: 0.4,
    left: 35,
    top: 180,
  },
  {
    width: 20,
    speed: 0.8,
    left: 80,
    top: 350,
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
              const { width, speed, left, top } = uwu;
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
              const image = `/assets/browse/${
                ((index + OFFSET) % UWU_OPTIONS) + 1
              }.jpg`;
              return (
                <img
                  key={index}
                  className="browse-image"
                  src={image}
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
