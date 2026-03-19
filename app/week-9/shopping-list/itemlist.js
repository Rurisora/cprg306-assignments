"use client";
import { useState } from "react";      
import Item from "./item";

export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");

    let renderedItems;

    //rewrite logic to add sort by group category (3 button with sort by name, category, or group category) and render list base on user click on button.
    //list is render within the logic and push into renderedItems array to display in return instead of applying logic (map) in return.
    //"Uncategorized" is not necessary to have to be in there since user can only choose from the dropdown list of category without adding new category. I added it in to just as reminder that practically it should be there if user can add new category that is not in the dropdown list or not choosing any category from the list at all dispire the default value does inclue Others as misc.
    if (sortBy === "name") {
        const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
        renderedItems = sortedItems.map((item) => <Item key={item.id} {...item} onSelect={() => onItemSelect && onItemSelect(item)}/>);
    } else if (sortBy === "category") {
        const sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
        renderedItems = sortedItems.map((item) => <Item key={item.id} {...item} onSelect={() => onItemSelect && onItemSelect(item)}/>);
    } else if (sortBy === "groupCategory") {
        const groups = {};
        items.forEach((item) => {
            const cat = item.category || "Uncategorized";
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(item);
        });
    
    //sortedCategories is an array that store the category name as string and sort them alphabetically. Object.keys is used to get the keys of the groups object (name of the category) and return  as an array then sort them alphabetically.
        const sortedCategories = Object.keys(groups).sort();
    
    //replace forEach with flatMap to render the category header and items within it. The categories and items are sorted alphabetically within the function instead of having to create an extra sorter outside of the function like before. Testing flatMap() since it seem interesting (newer method) because I just want it to return a single array of elements to render instead of having to use map() to return an array of arrays and then flatten it with flat().
        renderedItems = sortedCategories.flatMap((cat) => {
            const sortedGroups = [...groups[cat]].sort((a, b) => a.name.localeCompare(b.name));

            return [
                <li key={`header-${cat}`} className="text-2xl font-bold ml-4">{cat.toUpperCase()}</li>,
                ...sortedGroups.map((item) => <Item key={item.id} {...item} onSelect={() => onItemSelect && onItemSelect(item)}/>)
            ];
        });
    }

    //Update onSelect prop to allow the ItemList component to call the onItemSelect function when an item is selected. This will allow page.js to update the selectedItemName state and pass it to Mealideas to fetch meals to display

    return(
        <div>
            <div className="flex justify-center gap-3 mb-5">
                <div>
                    <button onClick={() => setSortBy("name")}className={`px-3 py-1 rounded-md border-2 border-blue-700 ${sortBy === "name" ? "bg-blue-300 text-black" : "bg-black"}`}>Sort By Name</button>
                </div>
                <div>
                    <button onClick={() => setSortBy("category")} className={`px-3 py-1 rounded-md border-2 border-blue-700 ${sortBy === "category" ? "bg-blue-300 text-black" : "bg-black"}`}>Sort By Category</button>
                </div>
                <div>
                    <button onClick={() => setSortBy("groupCategory")} className={`px-3 py-1 rounded-md border-2 border-blue-700 ${sortBy === "groupCategory" ? "bg-blue-300 text-black" : "bg-black"}`}>Group By Category</button>
                </div>
            </div>
            <div>
                {/* //max-h used to set the max height of the list and overflow-y-auto to make it scrollable when content exceed the maxheight. */}
                <h3 className="text-2xl text-center pb-2">Sorted Item List</h3>
                <ul className="max-h-[600px] overflow-y-auto border p-2 rounded">
                    {renderedItems}
                </ul>
            </div>

        </div>
    );
}

