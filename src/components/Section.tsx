interface Props {
  children: React.ReactNode;
  id: string;
}

const Section = ({ children, id }: Props) => {
  return (
    <div style={{ width: "100%" }} id={id}>
      {children}
    </div>
  );
};

export default Section;
