import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";
import "./Team.css";

import laur from "../assets/team/laur.png";
import kiwi from "../assets/team/kiwi.png";
import morello from "../assets/team/morello.png";
import chase from "../assets/team/chase.png";
import omar from "../assets/team/omar.png";
import danny from "../assets/team/danny.png";
import nines from "../assets/team/nines.png";
import jules from "../assets/team/jules.png";
import cucurbit from "../assets/team/cucurbit.png";
import catinkleins from "../assets/team/catinkleins.png";

import laurDeriv from "../assets/team/derivatives/laur.png";
import kiwiDeriv from "../assets/team/derivatives/kiwi.jpg";
import morelloDeriv from "../assets/team/derivatives/morello.png";
import chaseDeriv from "../assets/team/derivatives/chase.png";
import omarDeriv from "../assets/team/derivatives/omar.png";
import dannyDeriv from "../assets/team/derivatives/danny.png";
// import ninesDeriv from "../assets/team/derivatives/danny.png";
import julesDeriv from "../assets/team/derivatives/jules.png";
import catinkleinsDeriv from "../assets/team/derivatives/catinkleins.png";

import twitter from "../assets/socials/team/twitter.svg";
import github from "../assets/socials/team/github.svg";
import foundation from "../assets/socials/team/foundation.svg";

interface TeamMemberType {
  name: string;
  image: string;
  role: string;
  deriv?: string;
  derivArtist?: string;
  twitter?: string;
  github?: string;
  foundation?: string;
}

const members: TeamMemberType[] = [
  {
    name: "Kiwi",
    role: "team leader",
    image: kiwi,
    twitter: "https://twitter.com/0xKiwi_",
    foundation: "https://foundation.app/@Kiwi",
    deriv: kiwiDeriv,
    derivArtist: "@_NaokiSaito",
  },
  {
    name: "Laur",
    role: "lead artist",
    image: laur,
    twitter: "https://twitter.com/fungibleartist",
    foundation: "https://foundation.app/@laur",
    deriv: laurDeriv,
    derivArtist: "@onigiriman1998",
  },
  {
    name: "Danny",
    role: "operations",
    image: danny,
    twitter: "https://twitter.com/0xMaple",
    foundation: "https://foundation.app/@0xMaple",
    deriv: dannyDeriv,
    derivArtist: "@lightenbee",
  },
  {
    name: "Omar",
    role: "Community",
    image: omar,
    twitter: "https://twitter.com/OmarIbisa",
    foundation: "https://foundation.app/@omr",
    deriv: omarDeriv,
    derivArtist: "@rakugaki_choo",
  },
  {
    name: "Morello",
    role: "Advisor",
    image: morello,
    twitter: "https://twitter.com/morellostorment",
    foundation: "https://foundation.app/@morello",
    deriv: morelloDeriv,
    derivArtist: "@tsukota888",
  },
  {
    name: "Nines",
    role: "designer",
    image: nines,
    twitter: "https://twitter.com/nine__s",
  },
  {
    name: "Jules",
    role: "illustrator",
    image: jules,
    twitter: "https://twitter.com/BlancPixels",
    foundation: "https://foundation.app/@jujulesblanc",
    deriv: julesDeriv,
    derivArtist: "@BlancPixels",
  },
  {
    name: "Cucurbit",
    role: "Web Dev",
    image: cucurbit,
    twitter: "https://twitter.com/PiperCucu",
    foundation: "https://foundation.app/@milky.eth",
  },
  {
    name: "CatInKleins",
    role: "Solidity Dev",
    image: catinkleins,
    twitter: "https://twitter.com/CatInKleins",
    deriv: catinkleinsDeriv,
    derivArtist: "@Jack0ftrades0_0",
  },
  {
    name: "Chase",
    role: "web Dev",
    image: chase,
    twitter: "https://twitter.com/chase_manning_",
    deriv: chaseDeriv,
    derivArtist: "@shinjuroueth",
  },
];

const Team = () => {
  const [hoverStatus, setHoverStatus] = useState(
    Array(members.length).fill(false)
  );
  const sectionRef = useRef(null);

  const cascadeEffect = (targetState) => {
    let delay = 0;
    hoverStatus.forEach((_, index) => {
      setTimeout(() => {
        setHoverStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[index] = targetState;
          return newStatus;
        });
      }, delay);
      delay += 250;
    });
    return delay;
  };

  const toggleEffect = () => {
    const totalDelayForFirstCascade = cascadeEffect(true);
    setTimeout(() => {
      cascadeEffect(false);
    }, totalDelayForFirstCascade + 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            toggleEffect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef, members.length]);

  return (
    <Section id="team">
      <div className="team" ref={sectionRef}>
        <h2 className="team-header">our team</h2>
        <div className="team-members">
          {members.map((member, index) => {
            return (
              <div
                className={`team-member ${hoverStatus[index] ? "active" : ""}`}
                key={index}
              >
                <div className="team-member-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                  />
                  {member.deriv ? (
                    <div className="team-member-image-overlay">
                      <img src={member.deriv} alt={member.derivArtist} />
                      <div className="team-member-image-overlay-credit">
                        {member.derivArtist}
                      </div>
                    </div>
                  ) : (
                    <div className="team-member-image-overlay">
                      <img src={member.image} alt={member.name} />
                    </div>
                  )}
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <h4 className="team-member-title">{member.role}</h4>
                <div className="team-member-socials">
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                    >
                      <img
                        src={twitter}
                        alt="twitter"
                        className="team-member-social-image"
                      />
                    </a>
                  )}
                  {member.foundation && (
                    <a
                      href={member.foundation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                    >
                      <img
                        src={foundation}
                        alt="foundation"
                        className="team-member-social-image"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Team;
