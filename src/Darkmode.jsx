import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon  } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const Button = styled.div `
    display: inline-flex;
    justify-content: space-between;

    .icon {
        margin-right: 5px;
        color: ${props => props.theme.textColor};
        transition: all 1s ease;
    }
`
const Paragraph = styled.p `
    font-weight: 600;
    vertical-align: text-top;
    font-size: 0.75rem;
    color: ${props => props.theme.textColor};
    transition: all .5s ease;

    @media (min-width: 800px) {
        font-size: 0.813rem;
    }
`;

function Darkmode(props) {

    return (
        <Button className="darkmode__button" onClick= {props.onClick} style={{cursor : "pointer", userSelect: "none"}}>
            <FontAwesomeIcon className="icon" icon ={ props.icon === "light"? faMoon : faSun }/>
            <Paragraph>{props.icon === "light"? "Dark Mode": "Light Mode"}</Paragraph>
        </Button>
    ) 
}

export default Darkmode