
import InfoMovieOrSerie from "./InfoMovieOrSerie";
import HeaderCard from "./HeaderCard";
import useImage from "../hooks/useImage";

function CardMovie({ element = {} }) {
    const { year, category, rating, title, thumbnail } = element
    const movieImage = thumbnail.regular.small.split('/')[3]
    const windowImage=useImage(movieImage)


    return (
        <article >
            <HeaderCard title={title} windowImage={windowImage} element={element}/>
            <section>
               <InfoMovieOrSerie rating={rating} category={category} year={year}/>
                <h3 className="text-pure-white">{title}</h3>
            </section>
        </article>
    )
}

export default CardMovie
