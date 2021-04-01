import React from 'react'

import Joke from './components/Joke'


function App() {
    return(
        <div>
            <Joke 
            question = 'kim o?'
            punchline = 'öcü'
            />
            <Joke 
            punchline = 'Kazana düşmüş'
            />
            <Joke
            question = 'Adam neden sınıfta kalmış'
            punchline = 'Adamin biri varmış'
            />
        </div>
    )
}

export default App