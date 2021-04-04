import React, { Component } from 'react'

class Basic extends Component{

    render(){
        return(
            <div>
            <h1>{this.props.kemal}</h1>
            <h2>{this.props.text}</h2>
            </div>
            )
    }
}

export default Basic