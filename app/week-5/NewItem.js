"use client";
import { useState } from "react";

export default function NewItem() {
    //setting default useState for name, quantity, and category
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")
    
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
    const handleSubmit = (e) => {e.preventDefault()
    const item = {name, quantity, category,};
    console.log(item);
    alert(`Adding Item:
        Name: ${name} 
        Quantity: ${quantity}
        Category: ${category}`);
    
    //reset the to default after finish adding    
    setName("");
    setQuantity(1);
    setCategory("Produce");};

    return  (
        <form onSubmit={handleSubmit} className="w-4/5 my-10">
        {/* 1 */}
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Product Name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"></input>
            </div>
        {/* 2     */}
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Quantity (1-99) : </label>
                {/* <input type="number" value={quantity} onChange={(i) => setQuantity(i.target.value)} min="1" max="99" className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"></input> */}
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, Math.min(99, Number(e.target.value))))} min="1" max="99" className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"></input>
            </div>
        {/* 3     */}
            <div className="flex items-center mx-5 my-3">
                <label className="text-right font-bold w-36 mr-5">Category : </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"> 
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

//1: creating input name field with label. tailwind making sure they are in the same line.

//2: creating quantity fields with min:1 and max:99. Math.min set any value over 99 down to 99 and Math.max set any value under 1 return to 1 (when input '-' it will not show -sign but return 1).
// the commented code is the version where you can input-10 but when press add it will not go through since codition is set to min 1 max 99

//3: this under code is hard code version on first try.
{/* <label className="text-right font-bold w-36 mr-5">Category : </label>
<select value={category} onChange={(o) => setCategory(o.target.value)} className="flex-1 bg-gray-200 hover:bg-white text-black w-full p-2 rounded-md"> 
    <option value="Produce">Produce</option>
    <option value="Dairy">Dairy</option>
    <option value="Bakery">Bakery</option>
    <option value="Meat">Meat</option>
    <option value="Frozen">Frozen</option>
    <option value="Canned Goods">Canned Goods</option>
    <option value="Dry Goods">Dry Goods</option>
    <option value="Beverages">Beverages</option>
    <option value="Snacks">Snacks</option>
    <option value="Household">Household</option>
    <option value="Other">Other</option>
</select> */}

//the map(cat,index) making sure the option go through categories list by index and show {cat} as value. Cleaner code and easier to scale by just adding into the list instead of creating a whole new line like hard code one.