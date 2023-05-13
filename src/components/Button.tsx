import "./Button.css";

interface Props {
  action?: () => void;
  link?: string;
  label: string;
  icon?: string;
}

const Button = ({ label, action, icon, link }: Props) => {
  const content = (
    <>
      {icon && <img className="icon" src={icon} alt={label} />}
      <div className="label">{label}</div>
    </>
  );
  return (
    <>
      {action && (
        <button className="button" onClick={action}>
          {content}
        </button>
      )}
      {link && (
        <a className="button" href={link} target="_blank" rel="noreferrer">
          {content}
        </a>
      )}
    </>
  );
};

export default Button;
