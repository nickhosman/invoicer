import { useForm } from "react-hook-form";
import pb from "./lib/pocketbase";
import { useState } from "react";

export default function SignUpForm() {
    const { register, handleSubmit } = useForm();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const signUp = async ({ username, email, password, passwordConfirm }) => {
        return await pb.collection("users").create({ username, email, password, passwordConfirm });
    }

    return (
        <div>
            <form className="flex flex-col items-center gap-2" >
                <span>Sign Up</span>
                <input className="border" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="border" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="border" type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded w-full py-1 px-3 hover:cursor-pointer" type="button" onClick={(e) => {
                    e.preventDefault();
                    signUp({ username, email, password, passwordConfirm });
                }}>Sign Up</button>
            </form>
        </div>
    )
}
