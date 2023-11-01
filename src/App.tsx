import React from 'react';
import './App.css';
import Accordion from "./components/Acordion";
import Rating from "./components/Rating";
import Counter from "./components/Counter/Counter";
import Select from "./components/Select/Select";

function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<Accordion titleValue={"Technologies"}/>*/}
            <Select valueId={0} items={[
                {id: 0, title: "JS"},
                {id: 1, title: "CSS"},
                {id: 2, title: "REACT"},
            ]}/>
            {/*<Accordion titleValue={"Dinner"}/>*/}
            {/*<Rating/>*/}
        </div>
    );
}

export default App;
