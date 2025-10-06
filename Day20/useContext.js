import {createContext, useContext } from "react";

const ThemeContext = createContext();

function Demo(){
    return(
    <ThemeContext.Provider value="dark">
    <Toolbar/>
    </ThemeContext.Provider>
    );
}
function Toolbar(){
    return <ThemedButton/>
}
function ThemedButton(){
    const theme = useContext(ThemeContext);
    return <button style={{background: theme === 'dark' ? '#333' : 'FFF', 
        color: theme ==='dark' ? '#FFF' : '000'}}>Theme: {theme}
           </button>
}
export default Demo;


