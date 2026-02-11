import NewItem from "./NewItem";

export default function Page() {
    return (
        <main className="bg-black w-auto h-screen">
            <h1 className="text-center text-3xl my-10">New Item</h1>
            <div className="flex justify-center w-1/3 bg-green-900 mx-auto rounded-md" >
                <NewItem></NewItem>
            </div>
        </main>
    )
}