import React from 'react'

function TodoItem(props) {
    return(
        <div>
            <input type="checkbox" name={props.todoItem.text} />
            <label>{props.todoItem.text}</label>
        </div>
    )
}

export default TodoItem
