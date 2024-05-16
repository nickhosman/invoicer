import { useState } from "react";
import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";

export default function Auth() {
    const { register, handleSubmit } = useForm();
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
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <h1>Logged in: {pb.authStore.isValid.toString()}</h1>

            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder="Email" {...register("email")}/>
                <input type="password" placeholder="Password" {...register("password")}/>

                <button type="submit" disabled={isLoading}>{isLoading ? "isLoading..." : "Login"}</button>
            </form>
        </>
    );
}
