import Production from "./Production";

export default function Header() {
    return <div>
        Hello Devfest Lille!! 
        <Production/>
        <div>
            {import.meta.env.VITE_TEST_ENV_VARIABLE}
        </div>
        </div>
}