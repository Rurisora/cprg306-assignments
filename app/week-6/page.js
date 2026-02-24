"use client";
import { useState } from "react";
import ItemList from "./itemlist";
import NewItem from "./NewItem";
import itemsData from "./item.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    }

    return (
        <main>
            <h1 className="text-3xl text-center font-bold mt-5">Shopping List</h1>

            <NewItem onAddItem={handleAddItem}/>

            <ItemList items = {items} />
        </main>
    )
}

//const handleAddItem is a function that takes an item as an argument and updates the items state by adding the new item into the existing list of items. setItems is used to update the state.

//onAddItem is a prop that is passed to the newItem component, which allowes the newItem component to call the handleAddItem function when new item is added. 

