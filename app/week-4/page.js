import CategoryGroup from "./categorygroup"
import ItemList from "./item-list"

export default function Page() {
    return (
        <main>
            <h1 className="font-bold italic text-2xl text-center mt-4">Shopping List</h1>
            <ItemList></ItemList>
            <h1 className="font-bold italic text-2xl text-center mt-4">Item Name List by Category</h1>
            <CategoryGroup></CategoryGroup>
        </main>
    )
}