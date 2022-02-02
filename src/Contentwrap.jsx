import React, { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";
import Filter from "./Filter";
import Card from "./card";
import axios from "axios";

const Wrapper = styled.div`

    position: relative;

    .flex-container {
        @media(min-width: 50rem){
            display: flex;
            justify-content: space-between;
        }
    }

    .countries-container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2.188rem;
        padding: 1.25rem;
        margin: 0 auto;
        
        @media(min-width: 43.75rem){
            justify-content: flex-start;
        }
    }
    `
function Contentwrap() {

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectRegion, setSelectRegion] = useState('All')

    useEffect(() => {
        async function fetchData() {
            const response = await axios('https://restcountries.com/v3/all');
            const data = response.data
            setItems(data)
            
        }fetchData()
    },[])
               

        return (
                <Wrapper>
                    <div className="flex-container">
                        <Searchbox  icon={faSearch} 
                                    placeholder="Search for a country..." 
                                    onchange={event => {setSearchTerm(event.target.value)}}>
                                    </Searchbox>

                        <Filter title= {selectRegion}
                                item={["Africa", "Americas", 'Antarctic', "Asia", 'Europe', 'Oceania', 'All']}
                                setSelectRegion = {setSelectRegion}
                                />
                    </div>
                    
                    <div className="countries-container">
                            {items.filter(item => {if (selectRegion === 'All') {
                                return item
                            }return item.region === selectRegion})
                            .filter((item) => {
                                if (searchTerm === ""){
                                    return item
                                }else if (item.name.official.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                    return item
                                }
                            }).map((item) => {
                                return <Card
                                    key = {item.cca2 + " key"} 
                                    flag = {item.flags[1]} 
                                    name={item.name.common}  
                                    capital = {item.capital}
                                    region = {item.region}
                                    population = {item.population.toLocaleString('en')}
                                    cca2 = {item.cca2}/>
                            })}
                    </div>
                    
                </Wrapper>
                )
}
export default Contentwrap