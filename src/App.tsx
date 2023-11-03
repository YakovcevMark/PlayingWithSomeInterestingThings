import React, {useState} from 'react';
import './App.css';
import Select from "./components/Select/Select";

function App() {
    const [value, setValue] = useState(null)
    return (
        <div>
            {/*<Counter/>*/}
            {/*<Accordion titleValue={"Technologies"}/>*/}
            <Select valueId={value}
                    onChange={setValue}
                    items={[
                        {id: "0", title: "JS"},
                        {id: "1", title: "CSS"},
                        {id: "2", title: "REACT"},
                    ]}/>
            {/*<Accordion titleValue={"Dinner"}/>*/}
            {/*<Rating/>*/}
        </div>
    );
}

export default App;
