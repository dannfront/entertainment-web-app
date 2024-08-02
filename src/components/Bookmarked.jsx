import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Bookmarked({ element }) {

    const [isMarked, setMarked] = useState(element.isBookmarked)
    const [localStorageData,setLocalStorageData]=useLocalStorage("data")

    function handlerClick() {
        setMarked((isMarked) => !isMarked)
        const newData = localStorageData.map(item => item.title === element.title ? { ...item, isBookmarked: !isMarked } : item)
        setLocalStorageData(newData)
    }

    return (
        <div className="background-bookmarked" onClick={handlerClick}>
            {(isMarked) ?
                <img src="/assets/icon-bookmark-full.svg" alt="" />
                :
                <svg className="bookmark-empty h-4" width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none" />
                </svg>
            }
        </div>
    )
}

export default Bookmarked
