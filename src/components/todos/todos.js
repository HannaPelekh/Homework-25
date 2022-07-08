import React from "react";
import "./todos-styles.css"
import Appbutton from "../../shared/button"
import TodosList from "./todo-list/todo-list";
import TodoActions from "./todo-actions/todo-actions";

const todos = [
    {title:"CAT",
    body:"Tom",
    isComplete:false,
    id:1},
    {title:"DOG",
    body:"Bobic",
    isComplete:true,
    id:2},
    {title:"ELEPHANT",
    body:"Jumbo",
    isComplete:false,
    id:3},
    {title:"DUCK",
    body:"DONALDE",
    isComplete:true,
    id:4},
    {title:"HORSE",
    body:"Julius",
    isComplete:false,
    id:5},
    {title:"MOUSE",
    body:"Jerry",
    isComplete:true,
    id:6},
]
export default class Todocomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTodo: null,
            todos,
            isEditeMode: false, 
            isCreateMode: false,  
            todoEmpty: {
                title: '',
                body: '',
            }, 
        };  
        this.onTodoCreate = this.onTodoCreate.bind(this);    
        this.onTodoDelete = this.onTodoDelete.bind(this); 
        this.onTodoEdit = this.onTodoEdit.bind(this);   
        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoComplite = this.onTodoComplite.bind(this);
    }
    render () {
        return (<>        
            <div className="todo_container">
                <Appbutton 
                    className={"button_create"} 
                    cb={this.onTodoCreate}>
                        Create
                </Appbutton>
                <div className="list_container">
                    {this.renderTodoContent()}  
                </div>
            </div>
        </>)
    }
    onTodoCreate(){       
        this.setState({...this.state, 
            isCreateMode: true, 
            isEditeMode: false}); 
    }
    onTodoDelete(id){
        this.setState({...this.state, 
            todos: this.state.todos
            .filter(t => t.id !==id)})
    }
    onTodoEdit(todo){         
        this.setState({...this.state,             
            currentTodo: todo, 
            isEditeMode: true});                  
    }
    onTodoComplite(id){        
        this.setState({...this.state,
            todos: this.state.todos
                .map(todo => {
                    if(todo.id === id) {
                        return {...todo, isComplete:true};
                    }else{
                        return todo;
                    }
                }
            )
        })
    }
    onTodoAdd(todo) {         
        if (!(todo.title === "" && todo.title === "")) {             
            if(!todo.id) {                       
                this.setState({
                    ...this.state, 
                    todos: [...this.state.todos, 
                    {...todo, isComplete: false, id: Date.now()}],
                    isCreateMode: false,                 
                }); 
            } else {            
                this.setState({
                    ...this.state, 
                    todos: [...this.state.todos.map((t) => (t.id === todo.id ? todo : t))],
                    isCreateMode: false,   
                    isEditeMode: false,
                    currentTodo: null,
            });
        }
      } else {
        {this.renderError()}        
      }
    }    
    renderError() {
        console.log("error")        
    }
    renderTodoContent() {        
        if(!this.state.isCreateMode && !this.state.isEditeMode) {                     
            return ( <TodosList 
                        todos={this.state.todos}                  
                        deleteTodo={this.onTodoDelete} 
                        editTodo={this.onTodoEdit}
                        compliteTodo={this.onTodoComplite}                        
                    ></TodosList> )
        }
        if(this.state.isCreateMode || this.state.isEditeMode) {            
            return (
                <TodoActions 
                    cb={this.onTodoAdd} 
                    todo={this.state.currentTodo ? this.state.currentTodo : this.state.todoEmpty}
                    Title = {this.state.isEditeMode ? "Edit Todo" : "Create Todo"}
                    >Add Todo
                </TodoActions>
            )
        }     
             
    }   

}