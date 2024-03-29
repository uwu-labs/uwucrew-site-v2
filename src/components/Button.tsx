import "./Button.css";

interface Props {
  action?: () => void;
  link?: string;
  outLink?: string;
  label: string;
  icon?: string;
  primary?: boolean;
}

const Button = ({ label, action, icon, link, outLink, primary }: Props) => {
  const content = (
    <>
      {icon && <img className="icon" src={icon} alt={label} />}
      <div className="label">{label}</div>
    </>
  );

  const className = `button${primary ? " primary" : ""}`;
  return (
    <div className="button-container">
      {action && (
        <button className={className} onClick={action}>
          {content}
        </button>
      )}
      {link && (
        <a className={className} href={link}>
          {content}
        </a>
      )}
      {outLink && (
        <a className={className} href={outLink} target="_blank" rel="noreferrer">
          {content}
        </a>
      )}
    </div>
  );
};

export default Button;
