import ListSeriesMovies from "../components/ListSeriesMovies";
import TitlePage from "../components/TitlePage";
import Search from "../featureds/Search/Search"
import useFilter from "../hooks/useFilter";
import useLocalStorage from "../hooks/useLocalStorage";

function Movies() {
    
    const [localStorageData,]=useLocalStorage("data")
    const { searchSeriesOrMovies, setSearch } = useFilter(localStorageData)
    
    const movies = searchSeriesOrMovies.filter((movie) => movie.category === "Movie")

    return (
        <main>
            <Search setSearch={setSearch} />
            <TitlePage>
                Movies
            </TitlePage>
            <section>
                <ListSeriesMovies moviesAndSeries={movies} />
            </section>
        </main>
    )
}

export default Movies
