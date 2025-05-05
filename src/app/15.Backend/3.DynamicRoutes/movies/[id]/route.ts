import { movies } from "../../../db";

export async function GET(
    _req: Request,
    { params } : { params: { id: string } }
){
    const { id } = params;
    const movie = movies.find(m => m.id === parseInt(id));

    return movie ? Response.json(movie) : Response.json({ message: "Movie not found" }, { status: 404 });
}

/*
Client:
    async function fetchMovie(id) {
    const res = await fetch(`/api/movies/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
    }

    // Usage
    fetchMovie(3)
    .then(movie => console.log(movie))
    .catch(err => console.error(err.message));

*/

/*

---

When you name something `_req` (underscore in front), it's a **common developer convention** meaning:

> "I'm **accepting** this argument because the framework (Next.js) **expects** it,  
> but **I'm not actually using** it inside my function."

✅ You **have** to include it because the **function signature must match** what Next.js expects for a route handler:

```typescript
export async function GET(req: Request, context: { params: { id: string } })
```

- **First argument** must be a `Request`
- **Second argument** must be `{ params: { ... } }`

Even if you're not using `req` right now, you **can't remove it** because Next.js will call your function with **two arguments** — so you have to accept both.

🧹 The underscore `_req` just tells *other developers* (and yourself later!) that:
- This is required
- But we don't use it inside

---

### 🔥 Tiny Example:

| Code | Meaning |
|:---|:---|
| `req` | you're **probably** using the request somewhere |
| `_req` | you're **accepting** it but **ignoring** it |
| omit it | ❌ causes error: wrong function signature |

---

**TL;DR:**  
- We **must** accept `req` because Next.js **calls** the function with it.
- We **rename it** `_req` to **show that it's unused**.
- It's **good style**, not required by TypeScript, but makes your intent super clear. ✅

---

*/