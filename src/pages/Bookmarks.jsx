import ListSeriesMovies from "../components/ListSeriesMovies"
import TitlePage from "../components/TitlePage"
import useLocalStorage from "../hooks/useLocalStorage"

function Bookmarks() {

    const [localStorageData,] = useLocalStorage("data")

    const bookmarkedMovies = localStorageData.filter(movie => movie.category === "Movie" && movie.isBookmarked === true)

    const bookmarkedSeries = localStorageData.filter(movie => movie.category === "TV Series" && movie.isBookmarked === true)

    console.log(bookmarkedSeries);
    return (
        <main>

            <section>
                <TitlePage>
                    Bookmarked Movies
                </TitlePage>

                <ListSeriesMovies moviesAndSeries={bookmarkedMovies} />
            </section>

            <section>
                <TitlePage>
                    Bookmarked TV Series
                </TitlePage>

                <ListSeriesMovies moviesAndSeries={bookmarkedSeries} />
            </section>
        </main>
    )
}

export default Bookmarks
