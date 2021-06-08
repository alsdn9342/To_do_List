import React from 'react';

const Form = ({setName, setDescription, addTask, updateTask, deleteTask}) => {
    
    return (
        <div>
            <form method="get">
            Name: <input type="text" placeholder="Insert Name" className="name" onChange={(event) => {setName(event.target.value)}} />
            Description: <input type="text" placeholder="Insert description" onChange={(event) => {setDescription(event.target.value)}} />
            <div className="buttons">
                <input type="submit" value="Insert" onClick={addTask}  />
                <input type="submit" value="Update" onClick={updateTask} />
                <input type="submit" value="Delete"  onClick={deleteTask} />
            </div>
            </form>
        </div>
    );
};

export default Form;