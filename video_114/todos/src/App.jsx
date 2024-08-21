import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [InputShake, setInputShake] = useState(false)
  const [finished, setFinished] = useState(true)
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if (todosString) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth <= 770); // Adjust the width threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const saveToLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setFinished(!finished)
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure to delete this todo?")) {
      let newTodos = todos.filter(item => {
        return item.id !== id;
      });
      setTodos(newTodos)
      saveToLS()
    }
  }
  const handleAdd = (e) => {
    if (e.key === "Enter" ||  e.type === 'click') {
      if (todo.trim() === "") {
        setInputShake(true); // add the shake class to the input box
        setTimeout(() => {
          setInputShake(false); // remove the shake class after 500ms
        }, 500);
        return;
      }
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
      saveToLS();
    }
    
  }
  const handleChange = (e) => {
    setTodo(e.target.value);

  }

  const handleCheckbox = (e) => {
    let id = e.target.name;

    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="bg-violet-200 mx-auto my-5 msm:my-2 rounded-xl p-5 mmd:w-3/4 msm:w-[95%] w-1/2 min-h-[80vh]">
        <h1 className='text-center text-violet-800 font-extrabold text-2xl msm:text-[19px] mb-6'>iTask - Manage your todos at one place</h1>
        <div className="addTodo">
          <h2 className='text-xl font-bold my-4 msm:my-2 msm:text-center text-violet-800 mx-3'>Add a Todo</h2>
          <div className="flex justify-center msm:w-full msm:flex-col msm:gap-[10px] msm:my-3">
          <input onChange={handleChange} value={todo} type="text" className={`w-[80%] msm:py-2 msm:w-full rounded-full outline-violet-500 px-2 ${InputShake ? "shake" : ""}`} autoFocus onKeyDown={handleAdd} />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-3'>Save</button>
          </div>
        </div>
        <input id='show' className='mx-3 my-3 accent-violet-800' onChange={toggleFinished} type="checkbox" checked={finished} /> <label htmlFor="show"><span className='text-lg text-violet-800'>Show Finished </span></label>
        <div className="h-[1.2px] bg-violet-950 w-[95%] mx-auto"></div>
        <h2 className='text-lg font-bold text-violet-800'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 font-bold text-violet-800 text-xl'>No Todos to display</div>}
          {todos.map(item => {
            return (finished || !item.isCompleted) && <div key={item.id} className="todo flex mxl:w-full w-1/2 my-3 justify-between ">
              <div className='flex gap-5 items-center text-lg text-violet-800'>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id={item.id} className='accent-violet-800' />
                <div className={item.isCompleted ? "line-through text-violet-800" : ""}><label htmlFor={item.id}>{item.todo}</label></div>
              </div>
              <div className="button flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-1'>{isWideScreen ? (<FaEdit />) : ("Edit")}</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-1'>{isWideScreen ? (<MdDeleteSweep />) : ("Delete")}</button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
