"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    //setting default useState for name, quantity, and category
    // const [name, setName] = useState("");
    // const [quantity, setQuantity] = useState(1);
    // const [category, setCategory] = useState("produce")

    const [item, setItem] = useState ({
        name: "",
        quantity: 1,
        category: "Produce",
    })
    
    //categoriest list to render into option as dropdown list for Category
    const categories = [
        "Produce",
        "Dairy",
        "Bakery",
        "Meat",
        "Frozen",
        "Canned Goods",
        "Dry Goods",
        "Beverages",
        "Snacks",
        "Household",
        "Other",
    ]

    //handleSubmit function
    const handleSubmit = (e) => {e.preventDefault();

    //create a new item object. Adding trim() and toLowerCase() to category to make sure the items added go into the existing category instead of creating a new category with different case or extra space.
    const newItem = { ...item, 
        id: crypto.randomUUID(),
        category: item.category.trim().toLowerCase()    
    };
    
    //call the prop function onAddItem and pass the item object to add into the list in page.js
    onAddItem(newItem);
    
    //reset the to default after finish adding  
    setItem({ name: "", quantity: 1, category: "Produce"});
    }

    //replace the long onChange function with a single one that can handle all the input changes by using the name attribute of the input fields to determine which state to update. Moving quantity logic into handleChange so that it does not go under 1 and over 99.
    const handleChange = (e) => {
        const {name, value} = e.target;
        setItem((prev) =>
            name === "quantity"
                ? { ...prev, [name]: Math.max(1, Math.min(99, Number(value))) }
                : { ...prev, [name]: value }
        );
    }

    //Replace handleChange instead of name, quantity, and category onChange function and value in the input fields to make it easier to manage and adding to scalability if there are more input fields in the future.
    return  (
        <form onSubmit={handleSubmit} className="w-4/5 my-10">
        {/* 1 */}
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Product Name : </label>
                <input type="text" name="name" value={item.name} onChange={handleChange} required className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"></input>
            </div>
        {/* 2     */}
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Quantity (1-99) : </label>
                <input type="number" name="quantity" value ={item.quantity} onChange={handleChange} min="1" max="99" className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"></input>
            </div>
        {/* 3     */}
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Category : </label>
                <select name="category" value={item.category} onChange={handleChange} className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"> 
                    {categories.map((cat, index) => (
                        <option key={index} value ={cat}> {cat}</option>))}
                        </select>
            </div>
            
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Add Item </label>
                <button type="submit" className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">+</button>
            </div>

        </form>
    )
}
