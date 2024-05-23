import { useState } from "react";
import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";

export default function Auth() {
    const { register, handleSubmit } = useForm();
    const [ isLoggedIn, setIsLoggedIn ] = useState(pb.authStore.isValid);
    const [ isLoading, setLoading ] = useState(false);

    async function login(data) {
        setLoading(true);
        try {
            const authData = await pb
                .collection("users")
                .authWithPassword(data.email, data.password);
        } catch (e) {
            alert(e);
        }
        setLoading(false);
        setIsLoggedIn(pb.authStore.isValid);
    }

    function logout() {
        pb.authStore.clear();
        setIsLoggedIn(pb.authStore.isValid);
    }

    function signUp(data) {
        return pb.collection("users").create(data);
    }

    function createInvoice(id, client, ...items) {
        return pb.collection("invoices").create({
            client,
            items,
        });
    }

    function createItem(name, price) {
        return pb.collection("items").create({
            name,
            price,
        });
    }

    if (isLoggedIn) {
        return (
            <>
                <h1>Logged in: {pb.authStore.model.email}</h1>
                <button onClick={logout}>Logout</button>

                <div>
                    <h2>Add item:</h2>
                    <form>
                        <input type="text" placeholder="Item name" {...register("name")}/>
                        <input type="number" placeholder="Price" {...register("price")}/>
                    </form>
                </div>
            </>
        );
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <h1>Please Log In</h1>

            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder="Email" {...register("email")}/>
                <input type="password" placeholder="Password" {...register("password")}/>

                <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
            </form>
        </>
    );
}
