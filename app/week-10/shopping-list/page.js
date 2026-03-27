"use client";
import { useState, useEffect } from "react";
import ItemList from "./itemlist";
import NewItem from "./NewItem";
import MealIdeas from "./mealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "@/app/contexts/AuthContext";


export default function Page() {
    const {user} = useUserAuth();

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (!user?.uid) return;

        try {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        } catch (error) {
            console.error("Failed to load items: ", error);
        }
    };

    useEffect(() => {
        if (user?.uid) {
            loadItems();
        }
    }, [user?.uid]);

    const handleAddItem = async (item) => {
        if (!user?.uid) return;

        try {
            const id = await addItem(user.uid, item);

            const newItem = {id, ...item};

            setItems((prevItems) => [...prevItems, newItem]);
        } catch (error) {
                console.error("Failed to add item: ", error);
            }
        }

    function cleanIngredientName(name) {

        let beforeCommna = name.split(",")[0];

        let cleaned = beforeCommna.replace(/[^\w\s]/gi, "").trim().toLowerCase();

        return cleaned;
    }


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

