import './App.css';
import { useEffect, useState } from 'react';
import TaskList from './Components/TaskList';
import Form from './Components/Form';
import Axios from 'axios';



function App() {
  
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addTask =() => {

    Axios.post("http://localhost:8090/api/create", {
      name: name, 
      description: description
    }).then(()=> {
      console.log("success");
    })
  };

  const updateTask = () => {
    Axios.put("http://localhost:8090/api/update", {
      id: id,
      name: name,
      description: description
    }).then(() => {
      console.log("successfully updated!")
    })
  };
  
  const deleteTask = () => {
    Axios.delete("http://localhost:8090/api/delete", {
      id: id
    }).then(() => {
      console.log("successfully deleted!")
    }).catch(err => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetch('http://localhost:8090/api/tasks')
    .then(res => {
      return res.json()
    })
    .then(task => {      
      setTasks(task);
    })
  },[])

  return (
    <div className="App">
      <Form 
      setName={setName} 
      setDescription={setDescription}  
      addTask={addTask}
      updateTask ={updateTask}
      deleteTask={deleteTask}

      />
     <TaskList tasks={tasks} setId={setId} />
    </div>
  );
}

export default App;
