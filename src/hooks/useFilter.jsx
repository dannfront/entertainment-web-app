import { useState } from "react"
import { filterMoviesOrSeries } from "../helpers/functions"

function useFilter(localStorageData=[]) {
    const [search, setSearch] = useState("")
    // const [seriesOrMovie, setSeriesOrMovie] = useState([])
    
    const searchSeriesOrMovies = search ? filterMoviesOrSeries(localStorageData,search) : localStorageData

    

    return {searchSeriesOrMovies,setSearch}
}

export default useFilter
