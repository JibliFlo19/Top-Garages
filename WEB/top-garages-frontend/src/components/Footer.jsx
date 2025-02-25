import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: gray;
  color: black;
  display: flex;
  justify-content: center;
  padding: 30px;
  font-size: 15px;
`;
function Footer() {
  return (
    <FooterContainer>
      © Copyright 2025 Top Garages. Toate drepturile rezervate
    </FooterContainer>
  );
}

export default Footer;
