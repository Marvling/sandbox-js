import React from 'react'

function Joke (props) {
    
    return(
    <div>
        <h3 style={{display: props.question ? 'block':'none'}}>
            Question: {props.question}
        </h3>
        <h3 style={{backgroundColor:'#F1FA98'}}>
            {props.question ? `Answer: ${props.punchline}`:`Punchline: ${props.punchline}`}
        </h3>
        
        <hr/>
    </div>
    )
}

export default Joke