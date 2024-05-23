import { useEffect, useState } from "react";
import "./todo.css";
import mainDiv from "../style/example.css"

function Todoapp() {

  let Data = JSON.parse(localStorage.getItem("Set_todo")) || [
    { task: "Buy iphone-15", complete: true },
    { task: "Buy Car", complete: true },
    { task: "Learn Guitar", complete: true },
    { task: "Buy Bike", complete: false },
  ]

  const [myArray, setArray] = useState(Data);

  const [todo, setTodo] = useState("");
  const [Ctask, setCtask] = useState(0);
  const [Rtask, setRtask] = useState(0);

  function hnadleTask() {
    if (todo) {
      setArray([...myArray, { task: todo, complete: false }]);
    }

    setTodo("");
  }

  function handleCheck(index) {
    let mynewArray = [...myArray];
    mynewArray[index].complete = !mynewArray[index].complete;

    setArray(mynewArray);

    let completeTask = mynewArray.filter((value, index) => {
      return value.complete;
    });

    let remainingTask = mynewArray.filter((value, index) => !value.complete);

    setCtask(completeTask.length);
    setRtask(remainingTask.length);
  }

  function handleDelete(index){
    console.log(index)
    let deleteTask = myArray.filter((value,id)=>{
           return  id !== index
        })

        setArray(deleteTask)
  }

  useEffect(()=>{
    let myNewarray = [...myArray]
    let completeTask = myNewarray.filter((value, index) => {
        return value.complete;
      });
  
      let remainingTask = myNewarray.filter((value, index) => !value.complete);

      setRtask(remainingTask.length)
      setCtask(completeTask.length)

      localStorage.setItem("Set_todo", JSON.stringify(myNewarray) )

  },[myArray])

  return (
    <>
      <div className={mainDiv.d1}>
        <h1>My todo app</h1>
        <input
          type="text"
          placeholder="Add Task Here"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={hnadleTask}>Add Task</button>
        {myArray.map((value, index) => (
          <ul key={index}>
            <input
              type="checkbox"
              checked={value.complete}
              onClick={() => handleCheck(index)}
            />
            <span
              style={{ textDecoration: value.complete ? "line-through" : "" }}
            >
              {value.task}
            </span>
            <span className="material-symbols-outlined" onClick={()=>{handleDelete(index)}}>delete</span>
          </ul>
        ))}
        <p>Complete Task :- {Ctask} </p>
        <p>Remaining Task :- {Rtask} </p>
      </div>
    </>
  );
}

export default Todoapp;
