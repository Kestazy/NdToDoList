import { useState } from "react";

import FormForTask from "../formForTask/FormForTask";
import TableForTasks from "../tableForTasks/TableForTasks";
import style from "./ToDoMain.module.css"

const ToDoMain = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Clean you room",
            isCompleted: false
        },
        {
            id: 2,
            text: "Do your homework",
            isCompleted: true
        },
        {
            id: 3,
            text: "To go to cinema",
            isCompleted: false
        }
    ])

    const addToDo = (item) => {
        const temList = [...tasks, {text: item, isCompleted: false}]
        setTasks(temList);
    }

    return (
        <div >
            <TableForTasks todolist={tasks} />
            <FormForTask addToDo={addToDo} />
        </div>
    )
}

export default ToDoMain