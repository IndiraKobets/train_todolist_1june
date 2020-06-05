import React, {useState} from 'react';



function TodoCreateForm(props) {
    const [task, setTask] = useState('')

    const addTask = () => {
        console.log(task);
        props.onTaskCreate(task);
        setTask('');
    };

  return (
    <div>
     <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
     <button onClick={addTask} disabled={task.trim() === ''}> Add Task </button>
      
    </div>
  );
}

export default TodoCreateForm;
