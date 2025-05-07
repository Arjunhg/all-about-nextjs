import { movies } from "../../db";

export async function DELETE(
    req: Request,
    { params } : { params: { id: string } }
){
    const { id } = params;
    const movieId = Number(id);

    const movie = movies.find(m => m.id === movieId);

    if(!movie){
        return Response.json({ message: "Movie not found" }, { status: 404 });
    }

    const index = movies.findIndex(m => m.id === movieId);

    if(index === -1){
        return Response.json({ message: "Movie not found" }, { status: 404 });
    }

    movies.splice(index, 1);

    return Response.json({ message: "Movie deleted successfully" }, { status: 200 });
}