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