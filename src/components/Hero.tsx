import Header from "./Header";
import "./Hero.css";
import HeroBanners from "./HeroBanners";
import Section from "./Section";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="hero">
        <Header />
        <HeroBanners />
      </div>
    </Section>
  );
};

export default Hero;
