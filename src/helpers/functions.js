"use strict"

export function filterMoviesOrSeries(series=[],search=""){
    return series.filter(serie => serie.title.toLowerCase().includes(search.toLowerCase()))
}