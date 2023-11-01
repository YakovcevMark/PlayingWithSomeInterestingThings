import React, {useState} from 'react';

type ItemType = {
    id: number
    title: string
}
type AccordionBodyPropsType = {
    items: ItemType[]
}
type AccordionPropsType = {
    titleValue: string

}
type PropsAccordionTitleType = {
    title: string
    onDoubleClickHandle: () => void
}

function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return <>
        <AccordionTitle onDoubleClickHandle={() => setCollapsed(!collapsed)} title={props.titleValue}/>
        {collapsed && <AccordionBody
            items={[
                {id: 1, title: "JS"},
                {id: 2, title: "CSS"},
                {id: 3, title: "REACT"},
            ]}/>}
    </>

}


function AccordionTitle(props: PropsAccordionTitleType) {
    return <>
        <h2 onDoubleClick={props.onDoubleClickHandle}>----{props.title}----</h2>
    </>

}

const AccordionBody: React.FC<AccordionBodyPropsType> = ({items}) => {
    return <ul>
        {items.map((i) => <li key={i.id}>{i.title}</li>)}
    </ul>
}

export default Accordion