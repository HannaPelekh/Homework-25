import "./todo.css"
import Appbutton from "../../../shared/button"

export default function Todo ({todo, onTodoDelete, onTodoEdit, onTodoComplite}) {   
    return <>
            <div className={todo.isComplete ? "isComplete" : "todo_items"}> 
                <Appbutton className={"close_btn"} cb={onTodoDelete}></Appbutton>  
                <div className="todo-box">
                    <Appbutton className={todo.isComplete ? "hidden_btn" : "complite_btn"} cb={!todo.isComplete ? onTodoComplite : null}></Appbutton>            
                    <div className="text-box">
                        <h2 className="title">{todo.title}</h2>
                        <p className="body">{todo.body}</p> 
                    </div>
                </div>        
                <Appbutton className={"edit_btn"} cb={onTodoEdit}>Edit Todo</Appbutton> 
            </div>
        </>
}