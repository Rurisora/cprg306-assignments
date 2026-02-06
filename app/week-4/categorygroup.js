import items from "./item.json";

export default function CategoryGroup() {
    const categoryGroup = items.reduce((groups, {category, name}) => {
        (groups[category] ??= []).push(name);
        return groups;
    }, {});

    const categories = [];
    for (let category in categoryGroup) {
        categories.push(
            <div key={category} className="bg-blue-200 text-black border-5 border-red-300 rounded-[10px] m-4 p-[8px]">
                <h3 className="font-bold">{category.toUpperCase()}</h3>
                <ul className="list-disc list-inside">
                    {categoryGroup[category].map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        );
    }
        return (
            <div>{categories}</div>
        )
}

// reduce() reduce an array to a single value. In this case groups is the accumulator, starts as {} empty object at the end of the function (after returngroups} , {} <--- this part)
//{category, name} is the current item from items array (so we are pulling these 2 values if I understand it correctly)
//(groups[category] ??= []).push(name) making sure if the category does not exist yet it will create an array then push the name in the list
//return groups keep building object as you iterate through items
// once its done, reduce() return a single object that has all items groupped by category
// in this case it will 

//list-disc -> tailwind for classic bullet points. You can do ml-10 inside the li to make it move however you want or add list-inside on the ul to make the bulletpoint inside the padding

//Another way to process by using Object.entries https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//It works but not throughly understood it yet. Keeping it as comment for future research if needed to use.
//by running object.entries and map category, names it create a library with category as key and names and values (as far as I understand)
// reduce() will first group items into an object (category and names in this case)
// Object.entries(categoryGroup) will loop over that object for rendering the listing 

// return (
//     <div > 
//         {Object.entries(categoryGroup).map(([category, names]) => (
//             <div key={category}  className="bg-blue-200 border-5 border-red-300 rounded-[10px] pl-[4px]">
//                 <h3 className="text-black font-bold">{category.toUpperCase()}</h3>
//                 <ul>
//                     {names.map(name => (
//                         <li key={name} className="text-black">{name}</li>
//                     ))}
//                 </ul>
//             </div>
//         ))}
//     </div>
// )

