import NewItem from "./NewItem";

export default function Page() {
    return (
        <main className="w-auto h-screen">
            <h1 className="text-center text-3xl my-10 ">New Item</h1>
            <div className="flex justify-center w-1/3 dark:bg-green-900 bg-purple-300 mx-auto rounded-md" >
                <NewItem/>
            </div>
        </main>
    )
}