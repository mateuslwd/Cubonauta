import { useState } from 'react'
import './searchBarClose.css'
import './searchBarOpen.css'

import Filter from './Filter'

function SearchBar(){

    function toggle(){

        if(state == 'Close'){
            setState('Open')
        } else {
            setState('Close')
        }
    
    }

    const [state, setState] = useState('Close')

    return(
        <>
            <div className='search'>
                <div className={'searchBar' + state}>
                    <div className='container'>
                        <input placeholder='Pesquise aqui'></input>
                        <div className='VL'></div>
                        <div onClick={toggle} className='icon'></div>
                    </div>
                </div>
                <hr></hr>
                {state === 'Open' && <Filter />}
            </div>
        </>
    )

}

export default SearchBar