import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'))

//Egghead

function Message({children}) {
    return <div className="message">{children}</div>
  }

function CharacterCount({childeren}) {
    // const textLength = childeren.length ? childeren.length: '0'
    return(
        <div>
            the text, "{childeren}" is <strong>{childeren.length}</strong> characters long
        </div>
    )
}

const element2 = (
    <>
        <CharacterCount childeren="bokum"></CharacterCount>
        <CharacterCount childeren=""></CharacterCount>
    </>
);


const element = (<div className = "container">
    <Message>bok</Message>
    <Message>edep<strong>VE</strong>adap</Message>
</div>
);
console.log(element)

ReactDOM.render(element2, document.getElementById('root'))
