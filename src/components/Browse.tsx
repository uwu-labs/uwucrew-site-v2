import { useRef } from "react";
import "./Browse.css";
import Section from "./Section";
import useFixedStyles from "../hooks/use-scroll-data";
import Button from "./Button";

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
        </div>
      </div>
    </Section>
  );
};

export default Browse;
