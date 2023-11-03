import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    id: string
    title: string
}

type SelectPropsType = {
    valueId?: any
    items: ItemType[]
    onChange: (id: any) => void

}

function Select(props: SelectPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [hoveredElementValue, setHoveredElementValue] = useState<string>(props.valueId)
    useEffect(() => {
        setHoveredElementValue(props.valueId)
    }, [props.valueId])

    const selectedItem = props.items.find(i => i.id === props.valueId)

    const toggleCollapsed = () => setCollapsed(!collapsed);
    const onItemClicked = (id: string) => {
        props.onChange(id)
        toggleCollapsed()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++)
                if (hoveredElementValue === props.items[i].id) {
                    const pretendent = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendent) {
                        props.onChange(pretendent.id)
                        return;
                    }
                }
            if (!selectedItem)
                props.onChange(props.items[0].id)
        }
        if (e.key === "Escape" || e.key === "Enter") setCollapsed(false)
    }
    return <>
        <div
            className={s.select}
            onKeyUp={onKeyUp}
            tabIndex={0}>
            <span className={s.main}
                  onDoubleClick={toggleCollapsed}>
                {selectedItem && selectedItem.title}
            </span>
            {collapsed &&
                <div className={s.items}>
                    {props.items.map((i) => <div
                        onMouseEnter={() => setHoveredElementValue(i.id)}
                        className={hoveredElementValue === i.id ? s.selected : ''}
                        key={i.id}
                        onClick={() => onItemClicked(i.id)}
                    >{i.title}
                    </div>)}
                </div>
            }
        </div>
    </>

}


export default React.memo(Select)