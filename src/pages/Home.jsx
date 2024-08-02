
import Carrusel from "../components/Carrusel";
import ListSeriesMovies from "../components/ListSeriesMovies";
import TitlePage from "../components/TitlePage";
import Search from "../featureds/Search/Search"

import useFilter from "../hooks/useFilter";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {

    const [localStorageData,] = useLocalStorage("data")
    const { searchSeriesOrMovies, setSearch } = useFilter(localStorageData)

    const trending = localStorageData.filter((ele) => ele.isTrending === true)
    const forYou = searchSeriesOrMovies.filter((ele) => ele.isTrending != true)

    return (
        <>
            <main>
                <Search setSearch={setSearch} />
                <section>
                    <TitlePage>
                        Trending
                    </TitlePage>
                    <Carrusel trending={trending} />
                </section>
                <section>
                    <TitlePage>
                        Recommended for you
                    </TitlePage>
                    <ListSeriesMovies moviesAndSeries={forYou} />
                </section>

            </main>
        </>
    )
}

export default Home
