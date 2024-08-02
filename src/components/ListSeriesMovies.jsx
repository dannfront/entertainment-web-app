import CardMovie from "./CardMovie"

function ListSeriesMovies({moviesAndSeries = []}) {
    return (
        <ul className="grid-movies-series">
            {moviesAndSeries.map((element,i,moviesAndSeries) => <li className="w-full last-of-type:mb-10" key={i}><CardMovie element={element}  moviesAndSeries={moviesAndSeries} /></li>)}
        </ul>
    )
}

export default ListSeriesMovies
