import { useParams } from "react-router-dom";

// useParams is a hook provided by React Router that allows you to access the parameters of the
//  current route.
// It returns an object containing key-value pairs of the dynamic segments in the URL.
// For example, if you have a route defined as /user/:id, you can use useParams to access the
//  id parameter in your component.

export default function Users() {
    const { userid } = useParams();
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">User Details : {userid}</h1>
            <p>This page will display user details based on the user ID provided in the URL.</p>
        </div>
    );
}