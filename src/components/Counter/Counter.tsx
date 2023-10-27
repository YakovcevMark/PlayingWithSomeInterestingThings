import React, {useEffect, useState} from 'react';

const Counter = () => {
    let [counter, setCounter] = useState<number>(() => {
        const counterFromLs = localStorage.getItem("counter")
        return counterFromLs ? JSON.parse(counterFromLs) : 0;
    })
    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(counter))
    }, [counter])
    const incHandler = () => {
        setCounter(++counter);
    }
    const clearLsHandler = () => {
        localStorage.clear()
        setCounter(0);
    }
    const resetHandler = () => {
        setCounter(0);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={resetHandler}>reset</button>
            <button onClick={clearLsHandler}>ClearLS</button>

        </div>
    );
};

export default Counter;