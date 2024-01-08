import "./ExitButton.css";

interface LineProps {
  color?: string;
  right?: boolean;
}

const Line = ({ color, right }: LineProps) => {
  const lineStyle = {
    width: "100%",
    height: "3px",
    transition: "background-color 1s",
    backgroundColor: color,
    transform: right
      ? "translateY(0px) rotate(45deg)"
      : "translateY(-3px) rotate(-45deg)",
  };

  return <div style={lineStyle} />;
};

interface Props {
  color: string;
  action: () => void;
}

const ExitButton = ({ color, action }: Props) => {
  return (
    <button className="exit-button" onClick={action}>
      <Line color={color} right />
      <Line color={color} />
    </button>
  );
};

export default ExitButton;
