import { movies } from "../../db";

export async function PATCH(
    req: Request,
    { params } : { params: { id: string } }
){
    const { id } = params;
    const movieId = Number(id);

    const movie = movies.find(m => m.id === movieId);

    if(!movie){
        return Response.json({ message: "Movie not found" }, { status: 404 });
    }

    try{
        const updatedMovie = await req.json();

        const index = movies.findIndex(m => m.id === movieId);

        if(index === -1){
            return Response.json({ message: "Movie not found" }, { status: 404 });
        }

        movies[index] = { ...movies[index], ...updatedMovie };

        return Response.json({ message: "Movie updated successfully" }, { status: 200 });
    }catch(error){
        return Response.json({ message: "Invalid data" }, { status: 400 });
    }
}