import { useRef, useState } from "react";
import style from "./FormForTask.module.css"

const FormForTask = ( {addToDo} ) => {
    const [newTask, setNewTask] = useState('');
    const inputRef = useRef('')
    const prevNewTask = useRef('')

    function focus(e) {
        e.preventDefault();
        if (!newTask) return;

        setNewTask('');
        inputRef.current.focus()
        prevNewTask.current = newTask
        addToDo(prevNewTask.current)
    }

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <form className={style.form} onSubmit={focus}>

            <input ref={inputRef} className={style.input} type="text" 
            placeholder="Enter new Task" 
            value={newTask}
            onChange={handleChange}/>

        </form>
    )
}

export default FormForTask