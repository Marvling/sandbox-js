import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'

// function mapper (item) {
//     return(
//         <TodoItem todoItem={item}/>
//     )
// }
// const todoComponents = todoData.map(mapper)

const todoComponents = todoData.map(item => <TodoItem key = {item.id} todoItem={item}/>)
console.log(todoComponents[0]);

function TodoCanvas(){
    return(
    <div style={{backgroundColor:'#777'}}>
        {todoComponents}
    </div>
    )
}

export default TodoCanvas
