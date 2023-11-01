import React, {useState} from 'react';

type ItemType = {
    id: number
    title: string
}

type SelectPropsType = {
    valueId: number
    items: ItemType[]

}
function Select(props: SelectPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [title, setTitle] = useState<string>(() => {
        const item = props.items.find((i) => i.id === props.valueId) || ""
        return item && item.title
    })
    const setValueHandler = (id: number) => {
        const item = props.items.find(i => i.id === id) || ""
        setTitle(item && item.title)
    }
    return <>
        <SelectTitle onDoubleClickHandler={() => setCollapsed(!collapsed)}
                     title={title}/>
        {collapsed && <SelectBody
            setValue={setValueHandler}
            items={props.items}/>}
    </>

}

type SelectTitlePropsType = {
    title: string
    onDoubleClickHandler: () => void
}
function SelectTitle(props: SelectTitlePropsType) {
    return <>
        <h2 onDoubleClick={props.onDoubleClickHandler}>----{props.title}----</h2>
    </>

}
type SelectBodyPropsType = {
    items: ItemType[]
    setValue: (id: number) => void
}
const SelectBody: React.FC<SelectBodyPropsType> = ({items, setValue}) => {
    return <ul>
        {items.map((i) => <li key={i.id} onClick={() => setValue(i.id)}>{i.title}</li>)}
    </ul>
}

export default Select