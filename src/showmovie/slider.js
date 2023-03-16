import React from "react";
import styled from "styled-components";
import Contents from "../components/contents/content";
import ContentTitle from "../components/contenttitle/contenttitle";
import Moviecontent from "../components/moviecontent/moviecontents";
import Title from "../components/title/demotitle";
function Slider() {
  return (
    <Section >
      
      <Title />
      <Moviecontent  />
      <ContentTitle />
      <Contents />
    </Section>
  );
}

export default Slider;
const Section = styled.div`
background-color: #00081c;


`
