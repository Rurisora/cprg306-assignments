"use client";
import { useState } from "react";      
import Item from "./item";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    let renderedItems;

    //rewrite logic to add sort by group category (3 button with sort by name, category, or group category) and render list base on user click on button.
    //list is render within the logic and push into renderedItems array to display in return instead of applying logic (map) in return.
    //"Uncategorized" is not necessary to have to be in there since user can only choose from the dropdown list of category without adding new category. I added it in to just as reminder that practically it should be there if user can add new category that is not in the dropdown list or not choosing any category from the list at all dispire the default value does inclue Others as misc.
    if (sortBy === "name") {
        const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
        renderedItems = sortedItems.map((item) => <Item key={item.id} {...item}/>);
    } else if (sortBy === "category") {
        const sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
        renderedItems = sortedItems.map((item) => <Item key={item.id} {...item}/>);
    } else if (sortBy === "groupCategory") {
        const groups = {};
        items.forEach((item) => {
            const cat = item.category || "Uncategorized";
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(item);
        });
    
    //sortedCategories is an array that store the category name as string and sort them alphabetically. Object.keys is used to get the keys of the groups object (name of the category) and return  as an array then sort them alphabetically.
        const sortedCategories = Object.keys(groups).sort();
    
    //renderedItems is an array to store the list with category as header and items under the category. forEach to loop through the sortedCategories to push the header and items into the renderedItems array.
        renderedItems = [];
        sortedCategories.forEach((cat) => {
            renderedItems.push(
                <li key={`header-${cat}`} className="text-2xl font-bold ml-4">{cat.toUpperCase()}</li>
            )
     
    //groups[cat] is the array of items that sort them by name alphabetically then render into a list with category as header and items under the category.
        groups[cat]
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach((item) => {
                renderedItems.push(<Item key={item.id} {...item} />);
            });    
        })
    }

    //sortedItems alphabectically base on sortBy Name or Category. localeCompare use to compare string alphabetically. (a and b are the two items to compare) 
    // const sortedItems = [...items].sort((a, b) => {
    //     if(sortBy === "name") {
    //         return a.name.localeCompare(b.name);
    //     } else {
    //         return a.category.localeCompare(b.category);
    //     }
    // });
    //Previous Version with just sort by name or category (simple logic) to run and still need mapping list logic in ul in return

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
            
            <ul>
                {renderedItems}
            </ul>
        </div>
    );
}

// className={`px-3 py-1 rounded-md border-2 border-blue-700 ${sortBy === "groupCategory" ? "bg-blue-300 text-black" : "bg-black"}`} is used to conditionally apply styles to the button based on whether it is the currently selected sorting option. if sortBy is matched by name, category, or groupCategory, the button will have a blue background and black text to show that it is being selected, otherwise it will have the regular setting black background and white text. This should be noted to use for future when I need to show immediate feedback to user on their selection. 
//Format should be className={`base styles ${condition ? "style if true" : "style if false"}`} to apply conditional styling in React. default styles are applied to all buttons, and then additional styles are applied based on the condition that check if the button is the currently selected sorting option.
