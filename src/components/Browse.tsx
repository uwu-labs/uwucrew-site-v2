import { useEffect, useRef, useState } from "react";
import "./Browse.css";
import Section from "./Section";
import useFixedStyles from "../hooks/use-scroll-data";
import Button from "./Button";

const UWU_OPTIONS = 49;

interface UwuType {
  width: number; // Percentage of screen width
  speed: number; // Percentage of scroll speed
  left: number; // Percentage of screen width
  top: number; // Percentage of screen height
  over: boolean;
}

const artists: string[] = [
  "@Noname_Naname_", 
  "@sornjaa",
  "@0xWISHarie",
  "@ssm_a_u",
  "@garridspen",
  "@wakamepiza",
  "@thx_r308",
  "@sawawse",
  "@yowayowaxx",
  "@SugarBee_nft",
  "@seradoar",
  "@KRY_Peach",
  "@tsuru_oden",
  "@KRY_Peach",
  "@sawawse",
  "@_nnwnoiros",
  "@sawawse",
  "@ppraewithme",
  "@_KucingKecil_",
  "@RollyChanArt",
  "@sai7",
  "@AoyaNFT",
  "@sooon_TD",
  "@nft_ryo",
  "@tonakai_art",
  "@heichanart",
  "@Seekgoliath",
  "@NaninnaTH",
  "@HoshiShan",
  "@benangbaja",
  "@1JO_0",
  "@ninegiri_",
  "@sai7",
  "@BlancPixels",
  "@smolmeiji",
  "@SWHEATZ1",
  "@helena_mizu",
  "@karindrops_nft",
  "@cryingqiqi",
  "@x_arisse",
  "@ArtgifB",
  "@jamesmakan",
  "@cryingqiqi",
  "@RhoXifer",
  "@tonakai_art",
  "@ruriNFT",
  "@Yun_Aria55",
  "@sai7",
  "@hyow00",
];

const uwus: UwuType[] = [
  {
    width: 25,
    speed: 0.25,
    left: 8,
    top: 2,
    over: false,
  },
  {
    width: 25,
    speed: 0.15,
    left: 42,
    top: 22,
    over: false,
  },
  {
    width: 20,
    speed: 0.35,
    left: 75,
    top: 65,
    over: false,
  },
  {
    width: 20,
    speed: 0.51,
    left: 23,
    top: 115,
    over: true,
  },
  {
    width: 25,
    speed: 0.375,
    left: 1,
    top: 120,
    over: false,
  },
  {
    width: 40,
    speed: 0.39,
    left: 35,
    top: 170,
    over: false,
  },
  {
    width: 20,
    speed: 0.6,
    left: 78,
    top: 250,
    over: true,
  },
];

const Browse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(null);
  const { fixedStyles, percentScrolled } = useFixedStyles(containerRef);

  useEffect(() => {
    setOffset(Math.round(Math.random() * UWU_OPTIONS));
  }, []);

  if (!offset) return null;

  return (
    <Section id="browse">
      <div className="browse" ref={containerRef}>
        <div className="browse-content" style={fixedStyles}>
          <div className="browse-highlight" />
          <h2 className="browse-header">browse artists from all over the world</h2>
          <Button
            link="/gallery"
            label="view the art gallery!"
          />
          {
            // Render uwus
            uwus.map((uwu, index) => {
              const { width, speed, left, top } = uwu;
              const zIndex = uwu.over ? 3 : 1;
              const windowHeight = containerRef.current?.clientHeight || 0;
              const translateY = percentScrolled * speed * windowHeight;
              const style = {
                width: `${width}%`,
                left: `${left}%`,
                top: `${top}%`,
                transform: `translateY(${-translateY}px)`,
                zIndex,
              };
              const uwuIndex = ((index + offset) % UWU_OPTIONS) + 1;
              const image = `/assets/browse/${uwuIndex}.webp`;
              return (
                <div
                  key={index}
                  className="browse-image-container"
                  style={style}
                >
                  <img className="browse-image" src={image} alt="uwu" />
                  <a 
                    href={`https://twitter.com/${artists[uwuIndex-1]}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="browse-image-credit"
                  >
                    {artists[uwuIndex-1]}
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
    </Section>
  );
};

export default Browse;
