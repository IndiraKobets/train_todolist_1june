import React, {useState} from 'react';



function TodoList(props) {
  const [taskEdit, setTaskEdit] = useState({});

  // const deleteTask = (id) => {
  //   console.log(id);
  //   props.onTaskDelete(id);
  // };

  const editMode = (task) => {
    setTaskEdit(task);
  };

  const onEditTaskChange = (e) => {
    setTaskEdit({...taskEdit, name: e.target.value});
  };

  const taskSave = () => {
    props.onTaskSave(taskEdit);
    setTaskEdit({});
  }

  return (
    <div>

      {
        props.todos.map(el =>
          <li key={el.id}>
          {el.done ? '✅' : null}

            {
              taskEdit.id === el.id

                ? <>
                  <input type="text" value={el.name} onChange={onEditTaskChange}/>
                  <button onClick={taskSave} disabled={!taskEdit.name.trim()}>Save</button>
                  </>
                : <span onClick={() => editMode(el)}>{el.name}</span>
            }


          <button onClick={() => props.onTaskDoneToggle(el.id)}>
           {el.done ? 'Undone' : 'Done'}
          </button>
          <button onClick={() => props.onTaskDelete(el.id)}>Delete</button>
         </li>)

      }

    </div>
  );
}

export default TodoList;
