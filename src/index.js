import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Component/Accordion';


const App = ()=>{
    return <div><Accordion/></div>
};

ReactDOM.render(<App/>,document.querySelector('#root'))