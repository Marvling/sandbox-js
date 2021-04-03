import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'

// const todoComponents = todoData.map(item => <TodoItem key = {item.id} todoItem={item}/>)
// console.log(todoComponents[0]);

// function TodoCanvas(){
//     return(
//     <div style={{backgroundColor:'#777'}}>
//         {todoComponents}
//     </div>
//     )
// }

class TodoCanvas extends React.Component{

    todoComponents = todoData.map(item => <TodoItem key = {item.id} todoItem={item}/>)

    render (){

        return(

            <div style={{backgroundColor:'#777'}}>
                {this.todoComponents}
            </div>
            
        )
    }
}

export default TodoCanvas
