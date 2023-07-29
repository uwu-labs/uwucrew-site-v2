import "./Blog.css";
import Section from "./Section";

import blog1 from "../assets/blog/01.png";
import blog2 from "../assets/blog/02.png";
import blog3 from "../assets/blog/03.png";
import blog4 from "../assets/blog/04.png";
import blog5 from "../assets/blog/05.png";
import blog6 from "../assets/blog/06.png";
import Button from "./Button";
import { MIRROR_LINK } from "../app/globals";

interface BlogPostType {
  image: string;
  date: string;
  title: string;
  description: string;
  mirrorId: string;
}

const blogPosts: BlogPostType[] = [
  {
    image: blog1,
    date: "JAN 15, 2023",
    title: "uwu Labs x IROIRO: an uwu Labs Family project",
    description:
      "IROIRO is the 5th uwu Labs Family project! We're incredibly excited to work with their founding company CyberZ and Sashimi as their artist!",
    mirrorId: "_vFRUoPS6eeV3vpRYyjdYcqW6ZGkGTaCWItxQevt_Lw",
  },
  {
    image: blog2,
    date: "MAY 30, 2022",
    title: "Introducing: uwuQuest",
    description:
      "uwu Quest is an interactive stamp trading game heavily inspired by rwx quest! In uwu Quest, players must collect and turn in specific amounts and types of stamps to win various prizes!",
    mirrorId: "_4n9TUszNT23Eiby-vGwcaZDTjGCBWmwooMG9gLCzi0",
  },
  {
    image: blog3,
    date: "MAY 28, 2022",
    title: "Artist Megacollab: Systema Solaris",
    description:
      "Systema Solaris is our first Artist Megacollab, where nine Solar System themed pieces will be auctioned off on Foundation!",
    mirrorId: "_R5xzweyufF3uUaFeTUr_vgmIJ--XPvaKNWA2ajUmXg",
  },
  {
    image: blog4,
    date: "MAY 11, 2022",
    title: "uwucrew x MEGAMI Partnership",
    description:
      "We are extremely proud to announce our partnership between uwucrew and MEGAMI!",
    mirrorId: "nXDgI3RGZQezUVl2GNFy3XokrJ-F5iQeNI_P_MnPC8E",
  },
  {
    image: blog5,
    date: "MAY 3, 2022",
    title: "uwulabs x Aiko Virtual: An uwulabs family project",
    description:
      "Aiko Virtual joins the crew to become the 3rd uwulabs family project! They soon let uwulabs family project NFT holders claim allowlist to mint!",
    mirrorId: "h3LBjG6HXiraoJXmNIa95X7pjuSEa_xxTQikQhv2ciE",
  },
  {
    image: blog6,
    date: "MAY 3, 2022",
    title: "The uwu Art License + Community Collection",
    description:
      "Today, uwulabs is excited to share the uwu art license. It’s designed to encourage derivative works but also respect the holder’s rights, as we believe their NFT is a representation of them!",
    mirrorId: "DwrrmMYgsUT0mXsMEvbWBoLtnKcW0TRKOpwUWjDbZXg",
  },
];

const Blog = () => {
  return (
    <Section id="blog">
      <div className="blog">
        <h2 className="blog-header">Blog</h2>
        <div className="blog-posts">
          {
            // Render blog posts
            blogPosts.map((post, index) => {
              const { image, date, title, description, mirrorId } = post;
              return (
                <a
                  className="blog-post"
                  key={index}
                  href={`${MIRROR_LINK}${mirrorId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt={title} className="blog-post-image" />
                  <div className="blog-post-content">
                    <div className="blog-post-content-date">{date}</div>
                    <h3 className="blog-post-content-header">{title}</h3>
                    <p className="blog-post-content-description">
                      {description}
                    </p>
                  </div>
                </a>
              );
            })
          }
        </div>
        <Button
          primary
          link={MIRROR_LINK}
          label="View all blog posts on Mirror"
        />
      </div>
    </Section>
  );
};

export default Blog;
