import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Countrycard = styled.div`
    border-radius: 0.313rem;
    min-height: 25rem;
    background-color: ${props => props.theme.elementColor} ;
    box-shadow: 0 0px 6px ${props => props.theme.shadowColor};
    transition: background-color .5s ease, box-shadow .5s ease;
    cursor: pointer;
    width: 95%;

    @media (min-width: 43.75rem){
        width: 46%;
    }

    @media(min-width: 56.25rem){
        width: 30%;
    }

    @media(min-width: 81.25rem){
        width: 23%;
    }

    :hover {
        background-color: ${props => props.theme.hoverColor}
    }
    img{
        width: 100%;
        border-radius: 0.313rem 0.313rem 0 0;
    }

    div{
        color: ${props => props.theme.textColor};
        transiton: color .5s ease;
        padding: 1.5rem 1.875rem;

        h4{
            margin-bottom: 1.25rem;
            font-size: 1.125rem;
        }

        p {
            margin-bottom: 0.188rem;

            span{
                font-weight: 600
            }
        }
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function Card(props) {
    return (
            <Countrycard onClick = {props.onclick}>
                <StyledLink to={`/${props.cca2}`}>
                <img src={props.flag} alt={props.name + " flag"}/>
                <div>
                    <h4>{props.name}</h4>
                    <p><span>Population: </span>{props.population}</p>
                    <p><span>Region: </span>{props.region}</p>
                    <p><span>Capital: </span>{props.capital}</p>
                </div>
                </StyledLink>
            </Countrycard>
    )
}

export default Card