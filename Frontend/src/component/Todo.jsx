import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
const Todo = () => {
    const[task,setTask]=useState("");
    const [todos,setTodos]=useState([]);
    const [editing,setEditing] = useState(null);
    const fetchData=async(req,res)=>{
        const responce = await axios.get(`http://localhost:3000/api/todo/`)
        setTodos(responce.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    const handleAddOrUpdate=(e)=>{
        e.preventDefault();
        if (editing!==null){
            const updatedTodo=todos;
            updatedTodo[editing].task=task;
            setTodos(updatedTodo);
            setEditing(null);

        }else{
            const newTodo ={
                task:task,
                completed:false
            }
            setTodos([...todos,newTodo]);
        }
        setTask("")
    };
    const handleDelete=(index)=>{
        const updatedTodo=todos.filter((_,i)=>i!==index);
        setTodos(updatedTodo);

    };
    const handleToggleComplete=(index)=>{
        const updatedTodo = todos;
        updatedTodo[index].completed=!updatedTodo[index].completed;
        setTodos(updatedTodo)
    };
    const handleEdit=(index)=>{
        setTask(todos[index].task);
        setEditing(index);
    }
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input type ="text" placeholder ='Enter the Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAddOrUpdate}>{editing!==null?"Update":"Add"}</button> 
        </form>
        <ul>
            {todos.map((todo,index)=>(
                <li key ={index}>
                    <span style={{cursor:"pointer",textDecoration:todo.completed?"line-through":"none"}} onClick={()=>handleToggleComplete(index)}>{todo.task}</span>
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default Todo