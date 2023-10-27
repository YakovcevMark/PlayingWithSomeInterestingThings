import React, {useState} from 'react';

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    return <div>
        <Star setSelected={() => setValue(1)} selected={value > 0}/>
        <Star setSelected={() => setValue(2)} selected={value > 1}/>
        <Star setSelected={() => setValue(3)} selected={value > 2}/>
        <Star setSelected={() => setValue(4)} selected={value > 3}/>
        <Star setSelected={() => setValue(5)} selected={value > 4}/>
    </div>

}

type StarPropsType = {
    selected: boolean
    setSelected: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setSelected}>{props.selected ? <b>star</b> : <>start</>} </span>
}

export default Rating;