import "./Blog.css";
import Section from "./Section";

import blog3 from "../assets/blog/03.webp";
import blog6 from "../assets/blog/06.webp";
import kusariStamps from "../assets/blog/kusari-stamps.jpg";
import { MIRROR_LINK } from "../app/globals";
import assetUrl from "../utils/assetUrl";

interface BlogPostType {
  image: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

const blogPosts: BlogPostType[] = [
  {
    image: assetUrl(kusariStamps),
    date: "APR 10, 2026",
    title: "Kusari Stamp Airdrops",
    description:
      "All uwucrew holders receive free Kusari Stamps for holding, they are how we show onchain love to everyone who is part of the Kusari Family.",
    href: "https://opensea.io/collection/kusari-stamps",
  },
  {
    image: assetUrl(blog3),
    date: "MAR 6, 2024",
    title: "Dressing Room: Customize your uwus!",
    description:
      "The Dressing Room lets you customize your uwucrew for free with brand new items to look the way you want!",
    href: `${MIRROR_LINK}gVmozjKAQ6Wi4MAdhbl2bpShTvYVOF3bJA9_s_Bcs_U`,
  },
  {
    image: assetUrl(blog6),
    date: "MAY 3, 2022",
    title: "The uwu Art License",
    description:
      "uwucrew uses the uwu art license. It’s designed to encourage derivative works but also respect the holder’s rights, as we believe their NFT is a representation of them!",
    href: `${MIRROR_LINK}DwrrmMYgsUT0mXsMEvbWBoLtnKcW0TRKOpwUWjDbZXg`,
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
              const { image, date, title, description, href } = post;
              return (
                <a
                  className="blog-post"
                  key={index}
                  href={href}
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
      </div>
    </Section>
  );
};

export default Blog;
