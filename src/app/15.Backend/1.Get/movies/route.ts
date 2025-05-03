// export async function GET(){
//     return new Response('Hello World!')
//     // http://localhost:3000/15.Backend/1.Get/movies
// }

import { movies } from "../../db";

export async function GET(){
    return  Response.json(movies);
}