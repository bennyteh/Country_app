import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react/cjs/react.development";

const Dropdown = styled.div`
    margin: 2.5rem 1.25rem;
    width: 12.679rem;
    position: relative;
    cursor: pointer;

    button:focus{
        .icon{
            animation: 1s rotate forwards;
        }
    }



    @media (min-width: 50rem){
        margin-top: 0.938rem;
    }

    @keyframes fade-in{
        from {opacity: 0;}
        to {opacity: 1}
    }

    @keyframes rotate{
        from {transform: rotate(0deg);}
        to {transform: rotate(180deg);}
    }

    .dropdown-button{
        outline: none;
        border: none;
        width: 100%;
        text-align: left;
        padding: 0.938rem 1.25rem;
        padding-left: 1.25rem; 
        position: relative;
        border-radius: 0.625rem;
        background-color: ${props => props.theme.elementColor};
        color: ${props => props.theme.textColor};
        font-size: 0.938rem;     
        box-shadow: 0 0px 6px ${props => props.theme.shadowColor};
        transition: background-color .5s ease, box-shadow .5s ease;
        cursor: pointer;

        .icon{
            position: absolute;
            right: 0.875rem;
            top: 1.125rem;
            font-size: 0.625rem;
        }
        
    }
    .dropdown-content{
        background-color: ${props => props.theme.elementColor};
        width: 100%;
        margin-top: 0.313rem;
        border-radius: 0.625rem;
        color: ${props => props.theme.textColor};
        position: absolute;
        box-shadow: 0 0px 6px ${props => props.theme.shadowColor};

        .dropdown-item {
            width: 100%;
            padding: 0.313rem;
            padding-left: 1.25rem;
            font-size: 0.875rem;
            cursor: pointer;

            &:first-child:hover{
                border-radius: 0.625rem 0.625rem 0px 0px;
            }

            &:last-child{
                border-top: 1px solid ${props => props.theme.textColor};
                :hover {border-radius: 0px 0px 0.625rem 0.625rem;};
            }

            :hover{
              background-color: ${props => props.theme.hoverColor};          
            }

        }
    }
    `

function Filter({title, item = [], setSelectRegion}) {

    const [open, setOpen] = useState(false)

    return (
        <Dropdown onClick={() => {open? setOpen(false): setOpen(true)}}>
            <button className="dropdown-button">{title}<FontAwesomeIcon className="icon" icon ={ faChevronUp } /></button>
            <div className="dropdown-content">
                {open && item.map(item => {
                        return <div 
                                key={item + "key"} 
                                className="dropdown-item" 
                                value={item}
                                onClick= {() => {setSelectRegion(item)}}
                                >{item}</div>})}  
            </div>
        </Dropdown>
    )
}

export default Filter