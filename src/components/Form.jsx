import { useState } from 'react';

function Item({value, onItemChange}) {
    return <input type="text" value={value} onChange={onItemChange} placeholder="url"/>;
}

export default function Form(props) {
    const [items, setItems] = useState(Array(4).fill(""));
    const [itemList, setItemList] = useState(Array(4).fill(""));

    function handleChange(e, i) {
        const newItem = items.slice();
        newItem[i] = e.target.value;
        console.log(newItem);
        setItems(newItem);
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        setItemList(items);
        setItems(Array(4).fill(""));
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <Item value={items[0]} onItemChange={(e) => handleChange(e, 0)}/>
                <Item value={items[1]} onItemChange={(e) => handleChange(e, 1)}/>
                <Item value={items[2]} onItemChange={(e) => handleChange(e, 2)}/>
                <Item value={items[3]} onItemChange={(e) => handleChange(e, 3)}/>
                <div>
                    <button type="submit" onClick={handleSubmit}>Make List</button>
                </div>
            </form>
            <div>
                <ul className="list">
                    {itemList.map((item, index) => {
                        return <img src={item} key={index} />
                    })}
                </ul>
            </div>
        </>
    )
}