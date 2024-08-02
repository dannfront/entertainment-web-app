import ListSeriesMovies from "../components/ListSeriesMovies"
import TitlePage from "../components/TitlePage"
import Search from "../featureds/Search/Search"
import useFilter from "../hooks/useFilter"
import useLocalStorage from "../hooks/useLocalStorage"

function Series() {
    const [localStorageData,] = useLocalStorage("data")
    const { searchSeriesOrMovies, setSearch } = useFilter(localStorageData)
    const series = searchSeriesOrMovies.filter((series) => series.category === "TV Series")

    return (
        <main className="" >
            <Search setSearch={setSearch} />

            <TitlePage>
                TV Series
            </TitlePage>

            <ListSeriesMovies moviesAndSeries={series} data={searchSeriesOrMovies} />
        </main>
    )
}

export default Series
