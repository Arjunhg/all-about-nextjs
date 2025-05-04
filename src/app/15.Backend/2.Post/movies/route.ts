import { movies } from "../../db";

export async function POST(req: Request) {
    let movie = await req.json();

    const newMovie = { ...movie };
    movies.push(newMovie);

    return Response.json(newMovie); //automaticallt stringifies the object
    // return new Response(JSON.stringify(newMovie));
}