import React from 'react'

// function TodoItem(props) {
//     return(
//         <div>
//             <input type="checkbox" checked={props.todoItem.completed} name={props.todoItem.text} />
//             <label>{props.todoItem.text}</label>
//         </div>
//     )
// }

class TodoItem extends React.Component{


    render(){

        return(
            <div>
                <input 
                    type="checkbox" 
                    checked={this.props.todoItem.completed} 
                    name={this.props.todoItem.text}
                />

                <label>
                    {this.props.todoItem.text}
                </label>
            </div>
        )
    }
}

export default TodoItem
