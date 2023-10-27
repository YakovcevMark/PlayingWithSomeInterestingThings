import React, {useState} from 'react';

type PropsType = {
    titleValue: string

}
type PropsAccordionTitleType = {
    title: string
    onDoubleClickHandle: () => void
}

function Accordion(props: PropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return <>
        <AccordionTitle onDoubleClickHandle={() => setCollapsed(!collapsed)} title={props.titleValue}/>
        {collapsed && <AccordionBody/>}
    </>

}


function AccordionTitle(props: PropsAccordionTitleType) {
    return <>
        <h2 onDoubleClick={props.onDoubleClickHandle}>----{props.title}----</h2>
    </>

}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion