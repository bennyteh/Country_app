import React, { useState } from "react";
import Heading from "./Heading";
import {ThemeProvider}  from "styled-components";
import Contentwrap from "./Contentwrap"
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CountryDetail from "./CountryDetail";

const lightTheme = {
    backgroundColor: "hsl(0, 0%, 98%)",
    elementColor : "hsl(0, 0%, 100%)",
    inputColor: "hsl(0, 0%, 52%)",
    textColor: "hsl(200, 15%, 8%)",
    shadowColor: "hsl(0, 0%, 90%)",
    hoverColor: "hsl(0, 0%, 90%)"
}
const darkTheme = {
    backgroundColor:'hsl(207, 26%, 17%)',
    elementColor : 'hsl(209, 23%, 22%)',
    inputColor: 'hsl(0, 0%, 100%)',
    textColor: 'hsl(0, 0%, 100%)',
    shadowColor: "hsl(207, 26%, 17%)",
    hoverColor: "hsl(209, 23%, 10%)"
}

const Relative = styled.div`
 position: relative
 `

function App() {
    const [theme, setTheme] = useState('light')

    return (
        
            <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
                <GlobalStyle />
                <Relative>
                    <Heading theme={theme} setTheme={setTheme}/>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Contentwrap}/>
                            <Route path="/:name" component={CountryDetail}/>
                        </Switch>
                    </BrowserRouter>
                </Relative>
            </ThemeProvider>
    )
}

export default App

