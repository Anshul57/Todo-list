import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";

export const Form = () => {
    // initializing object which contain tasks
    const data = { task: "" }

    // using useState to change values of task in data 
    const [inputTask, setInputTask] = useState(data)

    // using useState to add id to each object of inputTask
    const [tasks, setTasks] = useState([])

    // handle the Change in input
    const handleChange = (e) => {
        setInputTask({ ...inputTask, [e.target.name]: e.target.value })
        console.log(e.target.name);
    }

    // handles the submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTask.task){
            alert("Task can't be empty!")

        }else{

            const newTask = { ...inputTask, id: new Date().getTime().toString(), completed: false }
            setTasks([...tasks, newTask])
            setInputTask({ task: "" })
        }


    }

    // filter is used to delete the task and then add that to setTasks
    const removeTask = (id) => {
        const updatedTaskList = tasks.filter(currTask => {
            return currTask.id !== id
        })
        setTasks(updatedTaskList)
    }

    //add checkMark to task if set completed
    const checkMark = (id) => {
        const updatedTaskListAgain = tasks.map((currTask) => {
            if (id === currTask.id) {
                return { ...currTask, completed: !currTask.completed };
            }
            return currTask
        })
        setTasks(updatedTaskListAgain)
    }


    
    

    return (
        <div className='container'>
            <Fade direction='down'>
            <form onSubmit={handleSubmit}>
                <input value={inputTask.task} name='task' type="text" placeholder='Add task...' autoComplete='off' onChange={handleChange} />
                <button type="submit"><i className='bx bx-chevrons-right' ></i></button>
            </form>
            </Fade>
            
            <div className="containerTask">
                <ul>
                    {tasks.map((currTask) => (
                        <Fade direction='up'>
                        <div key={currTask.id} className='todoList'>
                            {/* eslint-disable-next-line */}
                            <Fade direction='up'>
                            <li className={currTask.completed ? "completed" : null}>
                                <p>{currTask.task}</p>
                            </li>
                            <div className='btn-m'>
                            <button className="btn btn-l" onClick={() => removeTask(currTask.id)}>
                                    <i className='bx bx-trash-alt'></i>
                            </button>
                                <button className="btn" onClick={() => checkMark(currTask.id)}>
                                    <i className='bx bx-check'></i>
                                </button>
                                </div>
                                </Fade>

                        </div>
                        </Fade>
                    ))}
                </ul>
            </div>

        </div>

    )
}
