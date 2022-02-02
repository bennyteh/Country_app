import React, {useEffect, useState} from "react";
import styled from "styled-components"; 
import axios from "axios";
import { Link } from "react-router-dom";

const ActiveScreen = styled.div`
    
`
const DetailScreen = styled.div`
    margin: 1.563rem;
    color: ${props => props.theme.textColor};
    img{
        width: 100%;
        max-width: 40rem;
        box-shadow: 0 0px 6px ${props => props.theme.shadowColor};
    }
    h3{
        margin: 1.563rem 0;
    }

    div{
        margin: 1.563rem 0;
        p{
            margin: 0.625rem 0;
        }
        span{
            font-weight: 600;
        }
    }
    @media only screen and (min-width: 600px){
        .box{
            display: flex;
            flex-wrap: wrap;
            gap: 6.25rem;
            
        }
        .grid{
            display: grid;
            grid-template-rows: 4.688rem 1fr;
            font-size: 1.25rem;
            h3{
                font-size: 2rem;
            }
        }
    }
`
const Button = styled.button`
    display: block;
    background: ${props => props.theme.elementColor};
    color: ${props => props.theme.textColor};
    box-shadow: 0 0px 6px ${props => props.theme.shadowColor};
    margin-bottom: 3.125rem;
    font-size: 1rem;
    border-radius: 0.313rem;
    width: 7.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.531rem;
    text-decoration: none;
    transition: all .5s ease;
`

function CountryDetail({match}) {

    useEffect(() => {
        async function fetchData() {
            const response = await axios(`https://restcountries.com/v3.1/alpha/${match.params.name}`);
            const data = await response.data
            setData(data)
            setLoading(false)
        }
        fetchData()
    },[])

   

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    function listName(list){
        let stringList = []
        Object.values(list).forEach(val => 
            stringList.push(val.name)
          )
        return stringList.join(", ")
    }

    function listLanguage(list){
        let stringList = []
        Object.values(list).forEach(val => 
            stringList.push(val)
          )
        return stringList.join(", ")
    }
    console.log(data)
    return (
        <ActiveScreen>
            {loading? <div className="loading">321</div> 
            : 
            <DetailScreen>
                <Button as={Link} to={`/`}>Back</Button>
                <div className="box">
                    <img src={data[0].flags.svg} alt={data[0].flag}/>                      
                    <div className="grid">
                        <h3>{data[0].name.common}</h3>
                        <div>
                        <p><span>Native Name: </span>{data[0].name.official}</p>
                        <p><span>Population: </span>{data[0].population.toLocaleString('en')}</p>
                        <p><span>Region: </span>{data[0].region}</p>
                        <p><span>Sub Region: </span>{data[0].subregion}</p>
                        <p><span>Capital: </span>{(data[0].capital)}</p>
                        </div>
                    </div>
                    <div className="grid">
                        <div></div>
                        <div>
                        <p><span>Top Level Domain: </span>{data[0].tld.join(" / ")}</p>
                        <p><span>Currencies: </span>{listName(data[0].currencies)}</p>
                        <p><span>Language: </span>{listLanguage(data[0].languages)}</p>
                        </div>
                    </div>
                </div>
            </DetailScreen>}
        </ActiveScreen>
    )
}

export default CountryDetail