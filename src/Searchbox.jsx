import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Searchbar = styled.div`
    margin: 0.938rem 1.25rem;
    position: relative;
    
    input {
        background-color: ${props => props.theme.elementColor};
        color: ${props => props.theme.textColor};
        width: 100%;
        max-width: 31.25rem;
        height: 3.125rem;
        outline: none;
        border: none;
        font-size: 1rem;
        padding-left: 3.125rem;
        border-radius: 0.625rem;
        box-shadow: 0 0px 6px ${props => props.theme.shadowColor};
        transition: background-color .5s ease, box-shadow .5s ease;

        ::placeholder {
            color: ${props => props.theme.inputColor};
            transition: color .5s ease;
        }

        @media (min-width: 50rem){
            width: 31.25rem;
        }
    }

    .icon {
        color: ${props => props.theme.textColor};
        position: absolute;
        left: 1.063rem;
        top: 1.063rem;
        transition: all .5s ease;
        font-size: 16px;
        transition: color .5s ease;
    }
    `


export default function Searchbox(props) {
    return (
        <Searchbar>
            <input placeholder={props.placeholder} onChange = {props.onchange}></input>
            <FontAwesomeIcon className="icon" icon={props.icon}/>
        </Searchbar>
        
    )
}