
import useFetchSolution from "../hook/useFetchSolution";
import { Link } from "react-router";

export default function GenresDropdown() {
    const initialUrl = "https://api.rawg.io/api/genres?key=7c6b34cb19e346b29c0038eb1bb18d32";
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);
    

    return (
        <aside className="sidebar">
        <details className="w-full border border-gray-700 rounded-lg p-2 bg-gray-800 open:bg-gray-800 ">
          <summary className="cursor-pointer text-lg font-semibold">Genres</summary>
          {error && <small className="text-red-400">{error}</small>}
          <ul className="mt-2 space-y-2 p-0">
            {data && data.results.map((genre) => (
              <li key={genre.id}>
                <Link 
                  to={`/games/${genre.slug}`} 
                  className="flex p-2 rounded-lg hover:bg-gray-500 "
                >
                  <div className="genre-custom-container me-2">
                    <img className="img-genre" src={genre.image_background} alt="" />
                  </div>
                 <p className="m-1">{genre.name}</p> 
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </aside>
      );
}
