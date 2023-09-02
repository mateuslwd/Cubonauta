import './searchBar.css'

function SearchBar(){

    return(
        <div className='searchBar'>
            <div className='container'>
                <input placeholder='Pesquise aqui'></input>
                <div className='VL'></div>
                <div className='icon'></div>
            </div>
        </div>
    )

}

export default SearchBar