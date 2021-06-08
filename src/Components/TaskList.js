'eslint-disable-next-line'
import React from 'react';
import Task from './Task';



const TaskList = ({tasks, setId}) => {
    return (
        <div>
            <h3>Tasks</h3>
            {tasks.map(task => (
                <Task task={task} setId={setId} />
            ))}
        </div>
    );
};

export default TaskList;