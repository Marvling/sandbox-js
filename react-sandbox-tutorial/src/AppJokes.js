import React from 'react'

import Joke from './components/Joke'
import jokesData from './components/jokesData'


function App() {


    let jokesWithQuestionsSize = jokesData.filter(joke => joke.question)
    jokesWithQuestionsSize = jokesWithQuestionsSize.filter(joke => joke.question.length < 7)



    const jokeComponents = jokesWithQuestionsSize.map( joke => 
    <Joke key={joke.id} question= {joke.question}punchline= {joke.punchline} />)


    return(
        <div>
            {jokeComponents}
        </div>
    )
}

export default App