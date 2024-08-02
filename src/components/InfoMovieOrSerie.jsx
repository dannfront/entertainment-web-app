function InfoMovieOrSerie(props) {

    const info = Object.values(props).join(" • ")
    return (
        <p className="info-text">{info}</p>
    )
}

export default InfoMovieOrSerie
