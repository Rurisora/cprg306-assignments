"use client";
import { useState } from "react";
import ItemList from "./itemlist";
import NewItem from "./NewItem";
import itemsData from "./item.json";
import MealIdeas from "./mealIdeas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };
    
    //used to strip unncessary character after comma with split() and replace to remove any non-alphanumeric character and trim extra space for more accurate search from meal API.
    function cleanIngredientName(name) {

        let beforeCommna = name.split(",")[0];

        let cleaned = beforeCommna.replace(/[^\w\s]/gi, "").trim().toLowerCase();

        return cleaned;
    }

    // this function take the selected item as an argument, clean the name of the item using the cleanIngredientName function and then update the selecteItemName state with the cleaned Name to allow the mealIdeas component to fetch meal from the website based on selected Item.
    function handleItemSelect(item) {
        const cleanedName = cleanIngredientName(item.name);
        setSelectedItemName(cleanedName);
    }



    return (
        <main>
            <h1 className="text-3xl text-center font-bold mt-5">Shopping List</h1>
            <div className="flex justify-center min-w-1/2">
                <NewItem onAddItem={handleAddItem}/>
            </div>

            <div className="flex gap-5 mt-5 mx-5 justify-center">
                <div className="w-1/2 max-w-[700px]">
                    <ItemList items = {items} onItemSelect={handleItemSelect}/> 
                </div>

                <div className="w-1/2 max-w-[700px]">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>

            </div>

        </main>
    )
}
// <div> created to flex tthe sorted Item List and Meal ideas into 50/50 side by side layout. max-w to make sure the list does not extend too much on larger screen for better visual.

//const handleAddItem is a function that takes an item as an argument and updates the items state by adding the new item into the existing list of items. setItems is used to update the state.

//onAddItem is a prop that is passed to the newItem component, which allowes the newItem component to call the handleAddItem function when new item is added. 

