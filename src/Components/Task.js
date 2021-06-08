import React from 'react';

const Task = ({task, setId}) => {
    
    const handleId =() => {
        setId(task.id)
    }

    return (
        <li className="task" onClick={handleId}>
            <p>Id: {task.id}</p>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
        </li>
    );
};

export default Task;