import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="z-50 sticky top-0 w-full md:w-[95%] md:my-5 md:mx-auto lg:hidden">

            <nav className="bg-semi-dark-blue flex items-center justify-between p-5 md:rounded-xl lg:flex-col lg:min-h-[93vh] lg:justify-start lg:gap-10">
                <Link to='/'>
                    <img className="size-6 md:size-8" src="/assets/logo.svg" alt="logo" />
                </Link>

                <div className="flex items-center justify-center gap-5 lg:flex-col">
                    <Link to='/'>
                        <img className="size-4 md:size-5" src="/assets/icon-nav-home.svg" alt="icon-home" />
                    </Link>
                    <Link to='/movies'>
                        <img className="size-4 md:size-5" src="/assets/icon-nav-movies.svg" alt="logo" />
                    </Link>
                    <Link to='/series'>
                        <img className="size-4 md:size-5" src="/assets/icon-nav-tv-series.svg" alt="logo" />
                    </Link>
                    <Link to='/bookmarks'>
                        <img className="size-4 md:size-5" src="/assets/icon-nav-bookmark.svg" alt="logo" />
                    </Link>
                </div>

                <Link to="#" className="lg:mt-auto">
                    <img className="h-6 md:h-8" src="/assets/image-avatar.png" alt="avatar" />
                </Link>
            </nav>
        </header>
    )
}

export default Header
