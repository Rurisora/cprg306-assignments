"use client";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    //Function to handle login by github based on snippet
    const handleLogin = async () => {
        try {
            await gitHubSignIn();
            //open github popup for sign in
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    //Function to handle logout 
    const handleLogout = async() => {
        try {
            await firebaseSignOut();
            //logs user out of the firebase
        } catch (error) {
            console.error("Logout failed" , error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-grey-100 p-4"> 
            {!user ? (
                <button onClick={handleLogin} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"> Login with GitHub</button>
            ) : (
                <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-xl text-black">Welcome to the Shopping List</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href="/week-9/shopping-list" className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors text-center">Go to Shopping List</a>
                        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-700 transition-colors">Logout</button>
                    </div>

                </div>
            )}
        </div>
    )
}

//!user ? is used to show login button if we have not log in yet..
//transition:colors animate changes in color smoother than changing them instantly (testing out) by default it used 150ms duration but can add duration-[time] to adjust. ease-in-out can be used to smoothe acceleration/deceleration
