"use client";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const {user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    //Function to handle login by github based on snippet
    const handleGithubLogin = async () => {
        try {
            await gitHubSignIn();
            //open github popup for sign in
            // router.push("week-9/shopping-list");
        } catch (error) {
            console.error("Github login failed", error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleSignIn();
            // router.push("week-9/shopping-list");
        } catch(error) {
            console.error("Google login failed", error)
        }
    }

    //Function to handle logout 
    const handleLogout = async() => {
        try {
            await firebaseSignOut();
            //logs user out of the firebase
            router.push("/week-10")
            //redirect to landing page
        } catch (error) {
            console.error("Logout failed" , error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black p-4"> 
            {!user ? (
                <div className="flex flex-col gap-4 p-2 items-center bg-red-400 border-2 rounded-2xl">
                    <h1 className="py-2 text-xl ">Welcome to Shopping List, Please Login</h1>
                    <button onClick={handleGithubLogin} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"> Login with GitHub</button>
                    <button onClick={handleGoogleLogin} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"> Login with Google</button>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-xl text-black">Welcome to the Shopping List, {user.displayName || user.email}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href="/week-10/shopping-list" className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors text-center">Go to Shopping List</a>
                        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-700 transition-colors">Logout</button>
                    </div>

                </div>
            )}
        </div>
    )
}

//!user ? is used to show login button if we have not log in yet..
//transition:colors animate changes in color smoother than changing them instantly (testing out) by default it used 150ms duration but can add duration-[time] to adjust. ease-in-out can be used to smoothe acceleration/deceleration
//Added GoogleLogin with modified on AuthContext/ Firebase website provider and a new Login button for GoogleLogin. Modified GithubLogin function from handleLogin -> handleGithubLogin.