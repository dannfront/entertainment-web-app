import Bookmarked from "./Bookmarked"

function HeaderCard({element,windowImage,title}) {
    return (
        <header className="header-card relative cursor-pointer">
            <img className="image-m-s w-full rounded-xl aspect-[5/3]" src={windowImage} alt={title} />
            <button className="absolute top-3 right-5">
                <Bookmarked element={element} />
            </button>
            <button className="play-button absolute rounded-3xl top-[40%] right-[50%] transform translate-x-1/2 flex gap-5 items-center p-2">
                <img src="/assets/icon-play.svg" alt="icon-play" />
                <p className="text-pure-white">Play</p>
            </button>
        </header>
    )
}

export default HeaderCard
