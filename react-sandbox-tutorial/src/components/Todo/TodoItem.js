import React from 'react'

class TodoItem extends React.Component{


    render(){

        return(
            <div>
                <input 
                    type="checkbox" 
                    checked={this.props.todoItem.completed} 
                    name={this.props.todoItem.text}
                    onChange={() => this.props.handleChange(this.props.todoItem.id)}
                />

                <label>
                    {this.props.todoItem.text}
                </label>
            </div>
        )
    }
}

export default TodoItem
