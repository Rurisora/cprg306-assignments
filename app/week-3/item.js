export default function Item({name, quantity, category}) {
    return (
        <li className="bg-red-300 text-black border-4 border-blue-500 m-3 pl-4 rounded-[10px]">
            <div><span className="font-bold text-[20px]">Name:</span> {name}</div>
            <div><span className="font-bold text-[18px]">Quantity:</span> {quantity}</div>
            <div><span className="font-bold text-[18px]">Category:</span> {category}</div>
        </li>
        
        //testing color to see if I like blue bg or red bg better
        // <li className="bg-blue-800 text-white border-4 border-red-300 m-3 pl-4 rounded-[10px]">
        //     <div><span className="font-bold text-[20px]">Name:</span> {name}</div>
        //     <div><span className="font-bold text-[15px]">quantity:</span> {quantity}</div>
        //     <div><span className="font-bold text-[15px]">category:</span> {category}</div>
        // </li>
    )
}

//if I want to create a Item with multi attribute within Make sure to put them inside {} so it will match the array. Otherwise it will not work
//Another way is to put props inside then go into the div and do props.name <- name, props.quantity <- quantity and props.category <- category
//tailwind styling should be <tag className="input styling"> remember this syntax