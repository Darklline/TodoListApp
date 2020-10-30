import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";


const initialTodos: Array<Todo> = [{text: 'make a dinner', complete: true}, {text: 'go swim', complete: false}]

function App() {
    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if(selectedTodo === todo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const addTodo: AddTodo = newTodo => {
       newTodo.trim() !== '' && setTodos([...todos, {text: newTodo, complete: false}])
    }

    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>
        </React.Fragment>
    );
}

export default App;
