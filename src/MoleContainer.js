import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
 
function MoleContainer(props) {
    let [popMole, setPopMole] = useState(false)
 
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setPopMole(false)
    }
 
    let displayMole = popMole ? <Mole setScore={props.setScore} toggle={setPopMole} handleClick={handleClick} /> : <EmptySlot toggle={setPopMole} />
 
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}
 
export default MoleContainer
