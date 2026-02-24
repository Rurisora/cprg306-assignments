"use client";
import { useState } from "react";      
import Item from "./item";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    //sortedItems alphabectically base on sortBy Name or Category. localeCompare use to compare string alphabetically. (a nd b are the two items to compare)
    const sortedItems = [...items].sort((a, b) => {
        if(sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else {
            return a.category.localeCompare(b.category);
        }
    });

    return(
        <div>
            <div className="flex justify-center gap-3 mb-5">
                <div>
                    <button onClick={() => setSortBy("name")}className={`px-3 py-1 rounded-md border-2 border-blue-700 ${sortBy === "name" ? "bg-blue-300 text-black" : "bg-black"}`}>Sort By Name</button>
                </div>
                <div>
                    <button onClick={() => setSortBy("category")} className={`px-3 py-1 rounded-md border-2 border-blue-700 ${sortBy === "category" ? "bg-blue-300 text-black" : "bg-black"}`}>Sort By Category</button>
                </div>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item key = {item.id} {...item} />
                ))}
            </ul>
        </div>
    );
}
