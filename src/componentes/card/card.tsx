import Controls from './controls'
import Formula from './form'
import './card.css'

interface Props{

    children: string

}

function Card({children} : Props){

    return(
        <div className='card'>
            <Formula formula={children} selected={0}></Formula>
            <img src='/img.png'></img>
            <Controls></Controls>
        </div>
    )

}

export default Card 