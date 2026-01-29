import GroceryItemList from "./GroceryItem";

export default function Page() {
    return (
        <main>
            <h1 className="font-bold italic text-2xl text-center mt-4">Shopping List</h1>
            <GroceryItemList></GroceryItemList>
        </main>
    )      
}