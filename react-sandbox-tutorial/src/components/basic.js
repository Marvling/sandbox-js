import React, { Component } from 'react'

class Basic extends Component{

    render(){
        return(
            <div>
            <p>{this.props.kemal}</p>
            <h2>{this.props.text}</h2>
            </div>
            )
    }
}

export default Basic