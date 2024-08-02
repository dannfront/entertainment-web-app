import InfoMovieOrSerie from "./InfoMovieOrSerie"
import HeaderCard from "./HeaderCard"
import useImage from "../hooks/useImage"

function CardTrending({ element }) {
    const { year, category, rating, title, thumbnail } = element
    const movieImage = thumbnail.regular.small.split('/')[3]
    const windowImage=useImage(movieImage)

   
    return (
        <article className="relative flex-shrink-0  w-[244px] rounded-xl md:w-[280px] lg:w-[350px]">

           <HeaderCard title={title} windowImage={windowImage} element={element}/>

            <section className="absolute bottom-5 p-5">
                <InfoMovieOrSerie rating={rating} category={category} year={year} />
                <h3 className="text-pure-white font-semibold text-xl">{title}</h3>
            </section>
        </article>
    )
}

export default CardTrending
