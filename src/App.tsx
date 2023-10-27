import React from 'react';
import './App.css';
import Accordion from "./components/Acordion";
import Rating from "./components/Rating";
import Counter from "./components/Counter/Counter";

function App() {
    return (
        <div className="App">
            <Counter/>
            {/*<Accordion titleValue={"Menu"}/>*/}
            {/*<Accordion titleValue={"Dinner"}/>*/}
            {/*<Rating/>*/}
        </div>
    );
}

export default App;
