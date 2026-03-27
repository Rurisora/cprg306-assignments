'use client';
import { useState, useEffect } from "react";

//this function take on ingredient  as an argument and fetch meal ideas from the mealDB API based on the ingredient. It return an array of meals that contain the ingredient or an empty array if no meals are found.
async function fetchMealIDeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ingredient}) {
    const [mealIdeas, setMealIdeas] = useState([]);
    const [loading, setLoading] = useState(false);

    //this is an async function used to fetch meals from API based on the ingredient. It will check if ingredient is empty before fetching to avoid unncessary API call and set mealIdeas to empty array. Setting loading state here so that we can show loading in the UI while waiting for the API response. fetchMealIdeas was unresponsive so I add setLoading into the function for more visual feedback to make sure that it is actually working and not just unresponsive.
    async function loadMealIdeas() {
        if (!ingredient) {
            setMealIdeas([]);
            return;
        }
        setLoading(true);
        const results = await fetchMealIDeas(ingredient);
        setMealIdeas(results);
        setLoading(false);
    }

    //useFfect is used to call the loadMealIdeas whenever ingredient change. This will allow MealIdeas to fetch new meal based on ingredient selected.
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl text-center pt-15 pb-1.5">Meal Ideas for {ingredient}</h2>

            <div className="max-h-[600px] overflow-y-auto">
                {ingredient === "" ? (
                    <p> Select an item to see meal ideas</p>
                ) : mealIdeas.length === 0 ? (
                    <p>No meals found for "{ingredient}"</p>
                ) : (
                    <ul className="text-[18px] pl-3">
                        {mealIdeas.map((meal) => (
                            <li className="p-2 m-2 border rounded-[5px] border-green-600" key={meal.idMeal}>{meal.strMeal} </li>
                        ))}
                    </ul>
                )
                }
            </div>

        </div>
    )
}