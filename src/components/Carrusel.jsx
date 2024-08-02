
import CardTrending from "./CardTrending";


function Carrusel({ trending }) {

    return (
        <section className="flex gap-7 hide-scrollbar mb-5">
            {trending.map((item)=><CardTrending element={item} key={item.title}/>)}
            
        </section>
    )
}

export default Carrusel
