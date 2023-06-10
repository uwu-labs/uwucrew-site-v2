import Header from "./Header";
import "./Hero.css";
import HeroBanners from "./HeroBanners";
import HeroContent from "./HeroContent";
import Section from "./Section";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="hero">
        <Header />
        <HeroBanners />
        <HeroContent />
      </div>
    </Section>
  );
};

export default Hero;
