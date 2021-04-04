import React from 'react'
import Basic from './components/basic'


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            text: 'bu da bir state'
        }
    }

    render (){

        return(
            <div>
                <Basic kemal="bu bir prop ama children prop değil" text={this.state.text} />
                <h2>Bunda var mı?</h2>
            </div>
        )
    }
}

export default App