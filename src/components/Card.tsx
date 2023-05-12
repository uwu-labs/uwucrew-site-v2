import "./Card.css";

interface Props {
  title: string;
  body: string;
  href: string;
}

const Card = ({ title, body, href }: Props) => {
  return (
    <li className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  );
};

export default Card;
