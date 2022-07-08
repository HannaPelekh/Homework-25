import { useState } from "react";
import Appbutton from "../../../shared/button";
import AppInput from "../../../shared/input.control";


import "./todo-actions.css"

export default function TodoActions ({
    cb,
    todo = {title:"", body:"", isComplete:false,},
    Title = "Create Todo"    
}) {
    todo = todo ?? {title:"", body:""}    
    const [state, setstate] = useState(todo);  
    
    function setProperty(e){
        const newState = {...state}
        newState[e.target.name] = e.target.value;
        setstate(newState);
    }   
    
    return (        
            <div className="actions-container">
                <div className="actions_box">
                    <h2 className="title_actions">{Title}</h2>
                    
                    <AppInput 
                        name={"title"}
                        className={"input_title"} 
                        placeholder="ToDo Title"                        
                        value={state.title}
                        onChange={setProperty}
                        >                                             
                    </AppInput>
                    <AppInput 
                        name={"body"}
                        className={"input_body"} 
                        placeholder="ToDo Body"                       
                        value={state.body}
                        onChange={setProperty}
                        >
                    </AppInput>
                    <Appbutton 
                        className={"btn_add_todo"}  
                        cb={() =>cb(state)}                                         
                        >{Title}
                    </Appbutton>                
                </div> 
            </div>
        );
}

