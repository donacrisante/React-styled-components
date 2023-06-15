import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <Align>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
      </Align>
    </div>
  );
}

const Align = styled.div `
display: flex;
flex-direction: row;
`;



