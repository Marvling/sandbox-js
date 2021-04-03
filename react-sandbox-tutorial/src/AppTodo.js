import React from 'react'

import TodoCanvas from './components/Todo/TodoCanvas'


// function App() {
//     return(
//         <div>
//             <TodoCanvas />
//         </div>
//     )
// }

class App extends React.Component{
    render (){
        
        return(
            
            <div>
                <TodoCanvas />
            </div>
        )
    }
}

export default App