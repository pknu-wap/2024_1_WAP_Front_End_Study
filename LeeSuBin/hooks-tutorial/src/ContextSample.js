import React, { createContext, useContext } from 'react';
const ThemeContext = createContext('pink');
const ContextSample = () =>{
    const theme = useContext(ThemeContext);
    const style ={
        width: '124px',
        height: '24px',
        background:theme
    };
    return <div style={style} />
};

export default ContextSample;