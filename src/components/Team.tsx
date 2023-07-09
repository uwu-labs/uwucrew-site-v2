import Section from "./Section";
import "./Team.css";

import laur from "../assets/team/laur.png";
import kiwi from "../assets/team/kiwi.png";
import morello from "../assets/team/morello.png";
import chase from "../assets/team/chase.png";
import omar from "../assets/team/omar.png";
import danny from "../assets/team/danny.png";
import spori from "../assets/team/spori.png";
import jules from "../assets/team/jules.png";

import twitter from "../assets/socials/team/twitter.svg";
import github from "../assets/socials/team/github.svg";

interface TeamMemberType {
  name: string;
  image: string;
  role: string;
  twitter?: string;
  github?: string;
}

const members: TeamMemberType[] = [
  {
    name: "Laur",
    role: "Co-Founder & Artist",
    image: laur,
    twitter: "https://twitter.com/fungibleartist",
  },
  {
    name: "Kiwi",
    role: "Co-Founder & Dev",
    image: kiwi,
    twitter: "https://twitter.com/0xKiwi_",
    github: "https://github.com/0xKiwi",
  },
  {
    name: "Morello",
    role: "Bit of everything",
    image: morello,
    twitter: "https://twitter.com/morellostorment",
  },
  {
    name: "Omar",
    role: "Community Manager",
    image: omar,
    twitter: "https://twitter.com/OmarIbisa",
  },
  {
    name: "Danny",
    role: "Partnerships Manager",
    image: danny,
    twitter: "https://twitter.com/0xMaple",
  },
  {
    name: "Jules",
    role: "Creative assistant",
    image: jules,
    twitter: "https://twitter.com/0xMaple",
  },
  {
    name: "Chase",
    role: "Front End Dev",
    image: chase,
    twitter: "https://twitter.com/chase_manning_",
    github: "https://github.com/chase-manning",
  },
  {
    name: "Spori",
    role: "Full Stack Dev",
    image: spori,
    twitter: "https://twitter.com/0xSpori",
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
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
