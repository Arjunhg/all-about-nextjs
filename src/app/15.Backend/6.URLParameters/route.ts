import { NextRequest } from "next/server";
import { movies } from "../db";

export async function GET(req: NextRequest){
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query") || "";

    const filteredMovies = query ? movies.filter(m => m.name.toLowerCase().includes(query.toLowerCase())) : movies;

    return Response.json(filteredMovies);
}
// /api/movies/?query=avengers

/*
URL: /api/movies?query=batman&genre=action&page=2
query string: query=batman&genre=action&page=2
searchParams: {
  query: "batman",
  genre: "action",
  page: "2"
}
*/