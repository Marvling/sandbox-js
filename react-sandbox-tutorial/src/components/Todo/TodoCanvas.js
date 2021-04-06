import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'

class TodoCanvas extends React.Component{

    constructor(){
        super()

        this.state = {
            itemData: todoData,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        
        console.log(id)
    }
    

    render (){

        return(

            <div>
                {this.state.itemData.map(item => 
                    <TodoItem 
                    key = {item.id}
                    todoItem = {item}
                    handleChange = {this.handleChange(item.id)}
                     />
                )}
            </div>
            
        )
    }
}

export default TodoCanvas
