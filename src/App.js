import React, {useState} from 'react'
import './App.css';

function App() {
  const [Taskadd, setTaskadd] = useState("")
  const [Fulllist, setFulllist] = useState([])
  const Addtask = (event) => {
    setTaskadd(event.target.value)
  }
  const Deleteitem = (index) => {
    setFulllist(Fulllist.filter((item) => item !== Fulllist[index]))
  }
  const Addedtasks = () => {

      setFulllist((oldList) => {
        return [...oldList, Taskadd]
      })
      setTaskadd("");
  }
  return (
    <>
    <h1>ToDo List App</h1>
    <div className="container">
    <input type="text" placeholder="Enter task" onChange={Addtask} value={Taskadd}></input>
    <button onClick={Addedtasks}> Add task</button>
    <ul>
      {Fulllist.map((item, index) => {
        return (
          <>
        <li>{item}</li>
      <button onClick={() => Deleteitem(index)}>Delete</button>
      </>
      )})}
    </ul>
    </div>
  </>
  );
}

export default App;
