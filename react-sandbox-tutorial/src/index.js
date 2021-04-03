import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import AppTodo from './AppTodo'

class Greeting extends React.Component{

    date = new Date();
    hours = this.date.getHours()
    
    render(){


        return(
            <div>
                <h3>{this.hours}</h3>
            </div>
        )
    }
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
