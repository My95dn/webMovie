import React from "react";
import styled from "styled-components";
function Title() {
  return (
    <Section className="title-name">NOMINATION MOVIES</Section>
  )
}

export default Title;
const Section = styled.div`
color: #dacb46;
font-size: 2rem;
margin-left: 20px;
font-weight: 700;
padding-top: 30px;
padding-bottom: 20px;
border-bottom: 1px solid #878589;

@media (max-width: 48em) {
  font-size: 1.3rem;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media (min-width: 48em) and (max-width: 64em) {
      font-size: 1.5rem;
  
}
`
