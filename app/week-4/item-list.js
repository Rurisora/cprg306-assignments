import items from "./item.json";
import Item from "./item";

export default function ItemList() {
    return(
        <ul>
            {items.map(item => (
                <Item key = {item.id} {...item} />
            ))}
        </ul>
    );
}

// import from json file be sure to keep it as plurals so items from ./item.json (intent to load multiple items from the list)
// <Item key> should be unique key in this case item.id works since it is unique. Name can be used too as long as you can guarantee all name is unique (Not recommend). 
// <Item Key> loading from database should prioritize Primary Key for unique and no exceptionthrow (multiple result of the same key lead to not loading on localhost)
// ...item => ... is spread operator and item is creating a copy of the item to load in the map() <--- need recomfirm if I understand this correctly