import "./todo-list.css"
import Todo from "../todo/todo"

export default function TodosList ({todos, editTodo, deleteTodo, compliteTodo}){
    return (
        <>
            {todos.map((t) => (
                <Todo
                    key={t.id} 
                    todo={t} 
                    onTodoDelete={() => deleteTodo(t.id)}
                    onTodoEdit={() => editTodo(t)}
                    onTodoComplite={() => compliteTodo(t.id)}       
                ></Todo>
            ))}
        </>
    );
}