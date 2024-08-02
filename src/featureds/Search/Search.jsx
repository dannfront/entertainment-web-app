function Search({setSearch}) {
    return (
        <input className="input-search mb-10" type="text" placeholder="Search for movies or TV series" onChange={(e)=>setSearch(e.target.value)}/>
    )
}

export default Search
