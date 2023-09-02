import './Filter.css'

function Filter(){

    return (
        <>
            <div className='container_Filter'>

                <div className='meth'>
                    <div>
                        <h1>Method</h1>
                        <h2>Frederich</h2>
                    </div>
                    <div className='filters_Holder'>
                        <span>Fastest</span>
                        <span>News</span>
                        <span>Liked</span>
                        <span>Shortest</span>
                        <span>Easiest</span>
                        <span>Olds</span>
                        <span>Funny</span>
                        <span>Record</span>
                    </div>
                </div>

                <div className='cube'>
                    <div>
                        <h1>3x3</h1>
                        <h2>classic</h2>
                    </div>

                    <div className='cube_selector'>

                        <div className='arrow'></div>
                        <img src='img.png'></img>
                        <div className='arrow'></div>

                    </div>

                    <div className='controls_cube_holder'>

                        <div className='control_Cube'></div>
                        <div className='control_Cube'></div>

                    </div>

                </div>

            </div>
        </>
    )

}

export default Filter