import React from 'react'
import Basic from './components/basic'


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            text: 'bu bir state'
        }
    }

    render (){

        return(
            <div>
                <h2>Bu ne nedir?</h2>
                <h3>{this.state.text}</h3>
                <Basic kemal={this.state.text}/>
            </div>
        )
    }
}

export default App