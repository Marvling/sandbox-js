import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'

const todoComponents = todoData.map(todoComponent => <TodoItem /> )

function TodoCanvas(){
    return(
    <div>
        {todoComponents}

    </div>
    )
}

export default TodoCanvas