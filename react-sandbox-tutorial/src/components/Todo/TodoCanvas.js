import React from 'react'
import TodoItem from './TodoItem'

function TodoCanvas(){
    return(
    <div>
        <TodoItem />
        <input type="checkbox" id="Borns" name="Borns" />
        <label for="Borns">Borns</label>
        <input type="checkbox" id="Corns" name="Corns" />
        <label for="Corns">Corns</label>
    </div>
    )
}

export default TodoCanvas