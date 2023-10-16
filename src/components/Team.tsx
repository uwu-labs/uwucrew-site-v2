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

import laurDeriv from "../assets/team/derivatives/laur.png";
import kiwiDeriv from "../assets/team/derivatives/kiwi.jpg";
import morelloDeriv from "../assets/team/derivatives/morello.png";
// import chaseDeriv from "../assets/team/derivatives/danny.png";
import omarDeriv from "../assets/team/derivatives/omar.png";
import dannyDeriv from "../assets/team/derivatives/danny.png";
// import ninesDeriv from "../assets/team/derivatives/danny.png";
import julesDeriv from "../assets/team/derivatives/jules.png";

import twitter from "../assets/socials/team/twitter.svg";
import github from "../assets/socials/team/github.svg";

interface TeamMemberType {
  name: string;
  image: string;
  role: string;
  deriv?: string;
  twitter?: string;
  github?: string;
}

const members: TeamMemberType[] = [
  {
    name: "Laur",
    role: "Co-Founder & Artist",
    image: laur,
    twitter: "https://twitter.com/fungibleartist",
    deriv: laurDeriv,
  },
  {
    name: "Kiwi",
    role: "Co-Founder & Dev",
    image: kiwi,
    twitter: "https://twitter.com/0xKiwi_",
    deriv: kiwiDeriv,
  },
  {
    name: "Morello",
    role: "Bit of everything",
    image: morello,
    twitter: "https://twitter.com/morellostorment",
    deriv: morelloDeriv,
  },
  {
    name: "Omar",
    role: "Community Manager",
    image: omar,
    twitter: "https://twitter.com/OmarIbisa",
    deriv: omarDeriv,
  },
  {
    name: "Danny",
    role: "Partnerships Manager",
    image: danny,
    twitter: "https://twitter.com/0xMaple",
    deriv: dannyDeriv,
  },
  {
    name: "Jules",
    role: "Creative assistant",
    image: jules,
    twitter: "https://twitter.com/0xMaple",
    deriv: julesDeriv,
  },
  {
    name: "Chase",
    role: "Front End Dev",
    image: chase,
    twitter: "https://twitter.com/chase_manning_",
  },
  {
    name: "Nines",
    role: "2D & 3D Designer",
    image: nines,
    twitter: "https://twitter.com/nine__s",
  },
];

const Team = () => {
  return (
    <Section id="team">
      <div className="team">
        <h2 className="team-header">Meet the team</h2>
        <div className="team-members">
          {members.map((member, index) => {
            return (
              <div className="team-member" key={index}>
                <div className="team-member-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                  />
                  {member.deriv && (
                    <img
                      src={member.deriv}
                      alt={member.name}
                      className="team-member-image-overlay"
                    />
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
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                    >
                      <img
                        src={github}
                        alt="github"
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
