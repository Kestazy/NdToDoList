import style from "./TableForTasks.module.css"

const TableForTasks = (props) => {
    console.log(props.todolist);

    return(
        <div>
            <table className={style.table}>
                <thead>
                    <tr className={style.rowes} >
                        <th>Task.nr</th>
                        <th>Task name</th>
                        <th>Whether done?</th>
                    </tr>
                </thead>
                {
                    props.todolist.map((oneTask, index) => (
                        <tbody key={index}>
                    <tr className={style.rowes}>
                        <td> {index + 1} </td>
                        <td> {oneTask.text} </td>
                        <td> {oneTask.isCompleted ? "Done" : "In progres"} </td>
                    </tr>
                </tbody>
                    ))
                }
            </table>
        </div>
    )
}

export default TableForTasks