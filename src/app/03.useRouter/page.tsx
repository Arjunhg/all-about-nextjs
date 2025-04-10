'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {

    const router = useRouter();
    console.log(router);

    const navigate = (page: string) => {
        router.push(`/03.useRouter/${page}`);

    }

    return (
        <div>
            <button onClick={() => navigate("login")}>Go to login page</button>
            <br/>
            <Link href="/03.useRouter/colors">Go to colors page</Link>
        </div>
    )
}

export default Home;

/*

### 🧠 Summary

| Feature                    | `<Link>`                   | `router.push()`            |
|----------------------------|----------------------------|----------------------------|
| Prefetching                | ✅ (automatic in viewport) | ❌                         |
| Renders anchor tag         | ✅                          | ❌                         |
| Used in JSX                | ✅                          | ❌                         |
| Used in logic/handlers     | ❌                          | ✅                         |
| Ideal for static links     | ✅                          | ❌                         |
| Ideal for dynamic routing  | ❌                          | ✅                         |

*/