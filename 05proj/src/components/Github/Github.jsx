import { useLoaderData } from "react-router-dom";
import { useState } from "react";
// useLoaderData is a hook provided by React Router that allows you to access the data returned by 
// a loader function.
// A loader function is a function that is executed before a route is rendered, and it can be used to 
// fetch data or perform any asynchronous operations needed for the route.
// The data returned by the loader function can then be accessed in the component using the useLoaderData
//  hook.

export default function Github() {
        const data = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Github Page</h1>
            <p>This page will display GitHub-related information and features.</p>
            <p>Through UseLoader</p>
            <p>Here are the Followers of {data.login}  : {data.followers} </p>
            <p>{data.followers_url}</p>
            
        </div>
    );
}

export async function GithubApi(){
    const res = await fetch("https://api.github.com/users/harmeetsran01");

    return res.json();

}