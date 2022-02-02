import React from 'react';
import Darkmode from './Darkmode';
import styled from 'styled-components';

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.688rem 1.875rem;
    background-color: ${props => props.theme.elementColor};
    box-shadow: 0 0px 6px ${props => props.theme.shadowColor};
    transition: background-color .5s ease, box-shadow .5s ease;
    width: 100%;
`;

const Text = styled.h3 `
    font-weight: 800;
    font-size: 0.875rem;
    vertical-align: text-top;
    color: ${props => props.theme.textColor};
    transition: color .5s ease;

    @media (min-width: 800px) {
        font-size: 1rem;
    }
`;


function Body(props) {

    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme('dark')
        }else{
            props.setTheme('light')
        }
        
    }

    return (
        <Title className="heading">
            <Text>Where is the country?</Text> 
            <Darkmode icon = {props.theme} onClick= {changeTheme} />
        </Title>
    )
}

export default Body