import { useEffect, useState } from "react"
import { data } from "../data"


function useLocalStorage(key) {

    const[localSotageData,setLocalSotageData]=useState(()=>{
        try {
          const dataLocal = window.localStorage.getItem(key)
          return dataLocal?JSON.parse(dataLocal):data
        } catch (error) {
            console.log(error);
            return data
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key,JSON.stringify(localSotageData))
        } catch (error) {
            console.log(error);
        }
    }, [key,localSotageData]);


    return [localSotageData,setLocalSotageData]
}
export default useLocalStorage
