import { useEffect, useState } from "react"

function useImage(movieImage) {
    const [windowImage, setWindowImage] = useState("")

    useEffect(function () {

        function resizeImage() {
            const width = window.innerWidth
            if (width >= 320 && window.innerWidth <= 768) return setWindowImage(`/assets/thumbnails/${movieImage}/regular/small.jpg`)
            if (width >= 768 && window.innerWidth <= 1024) return setWindowImage(`/assets/thumbnails/${movieImage}/regular/medium.jpg`)
            if (width >= 1024) return setWindowImage(`/assets/thumbnails/${movieImage}/regular/large.jpg`)
        }
        resizeImage()

        window.addEventListener("resize", resizeImage)

        return () => {
            window.removeEventListener("resize", resizeImage)
        }

    }, [movieImage])
    return windowImage
}

export default useImage
