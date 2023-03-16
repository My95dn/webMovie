import React from "react";
import styled from "styled-components";
function ContentTitle() {
    return ( <Section className="title-name">MOVIE THEATERS</Section> );
}

export default ContentTitle;
const Section = styled.div`
padding-bottom: 10px;
border-bottom: 1px solid #878589;
border-top: 1px solid #878589;
padding-top: 10px;
color: #dacb46;
font-size: 2rem;
margin-left: 11px;
font-weight: 700;
@media (max-width: 48em) {
    font-size: 1.3rem;
}
@media (min-width: 48em) and (max-width: 64em) {
        font-size: 1.5rem;
}
`