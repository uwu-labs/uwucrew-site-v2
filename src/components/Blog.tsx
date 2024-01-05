import "./Blog.css";
import Section from "./Section";

import blog1 from "../assets/blog/01.png";
import blog3 from "../assets/blog/03.png";
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
    image: blog3,
    date: "MAY 28, 2022",
    title: "Artist Megacollab: Systema Solaris",
    description:
      "Systema Solaris is our first Artist Megacollab, where nine Solar System themed pieces will be auctioned off on Foundation!",
    mirrorId: "_R5xzweyufF3uUaFeTUr_vgmIJ--XPvaKNWA2ajUmXg",
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
        <h2 className="blog-header">wanna learn more?</h2>
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
          label="check out our blog!"
        />
      </div>
    </Section>
  );
};

export default Blog;
