//Ps: I create comments to remind me.

import React, { useState} from  "react";

function TodoList() {
    const [tasks, setTasks] = useState(() =>{//state to Store task
        const savedeTasks = localStorage.getItem("tasks");
        return savedeTasks ? JSON.parse(savedeTasks) : [];
    });
    const [newTask, setNewTask] = useState("");// state to a new task

    //array to change tasks colors
    const colors = ["#c6c7c448", "#353b3c8e"];


    //function to add new task
    const addTask = () => {
        if (newTask.trim() !== ""){
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            setNewTask("") // clean input
        }
    }


    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          addTask();
        }
      };

    return(

        <div className="row">
            <h2>Task List</h2>
            <div className="inputbox">
                <input 
                type ="text"
                placeholder="write a task..."
                value ={newTask}
                onChange ={(e)=> setNewTask(e.target.value)}  onKeyPress={handleKeyPress}
                />

                <button className="addbutton"onClick = {addTask}> + </button>

                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} style={{ backgroundColor: colors[index % colors.length] }}>
                            {task} <button className="xbutton" onClick={() => removeTask(index)}> X </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

};

export default TodoList