import styled from "styled-components";

const fontSizes = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
};
const BaseButton = styled.button`
  border: none;
  border-radious: 0.15rem;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
`;
const PrimaryButton = styled(BaseButton)`
  background: red;
  color: white;
`;

const App = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <BaseButton size="lg">A Button Button</BaseButton>
      <PrimaryButton size="sm">Primary Button</PrimaryButton>
    </div>
  );
};

export default App;
