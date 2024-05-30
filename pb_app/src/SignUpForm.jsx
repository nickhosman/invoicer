import { useForm } from "react-hook-form";
import pb from "./lib/pocketbase";

export default function SignUpForm() {
    const { register, handleSubmit } = useForm();

    async function signUp({ username, email, password, confirm_password }) {
        if (password !== confirm_password) {
            return { error: "Passwords do not match" };
        }
        return await pb.collection("users").create({ username, email, password });
    }

    return (
        <div>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(signUp)}>
                <span>Sign Up</span>
                <input className="border" type="text" placeholder="Username" {...register("username")} />
                <input className="border" type="email" placeholder="Email" {...register("email")} />
                <input className="border" type="password" placeholder="Password" {...register("password")} />
                <input className="border" type="password" placeholder="Confirm Password" {...register("confirm_password")}/>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded w-full py-1 px-3 hover:cursor-pointer" type="submit">Sign Up</button>
            </form>
        </div>
    )
}
