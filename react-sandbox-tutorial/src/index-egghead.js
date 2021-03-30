import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Egghead tutorial

function Message({children}) {
    return <div className="message">{children}</div>
  }

function CharacterCount({text}) {
    // const textLength = text.length ? text.length: '0'
    return(
        <div>
            the text, "{text}" is <strong>{text.length}</strong> characters long
        </div>
    )
}

const element2 = (
    <>
        <CharacterCount text="bokum"></CharacterCount>
        <CharacterCount text="heleloy"></CharacterCount>
    </>
);


const element = (<div className = "container">
    <Message>bok</Message>
    <Message>edep<strong>VE</strong>adap</Message>
</div>
);
console.log(element)

ReactDOM.render(element2, document.getElementById('root'))
