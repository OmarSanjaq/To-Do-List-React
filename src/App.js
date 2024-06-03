import './App.css';
import {useRef, useState} from 'react';
function App() {
  const [todo,setTodos] = useState([]);

  const inputRef = useRef()
  const handleAddItem = ()=>{
    const text = inputRef.current.value.trim();
    if (text === "") {
      alert("Please enter a non-empty item.");
      return;
    }
    const newItem = { completed: false, text };
    setTodos([...todo, newItem]);
    inputRef.current.value = "";
  };
  const handleItemDone =(index)=>{
    const newToDos = [...todo]
    newToDos[index].completed = !newToDos[index].completed
    setTodos(newToDos)
  }
  const handleDeleteItem = (index)=>{
    const newToDos = [...todo]
    newToDos.splice(index,1)
    setTodos(newToDos)
  }
  return (<div>
    <div className="App">
      <h2>To Do List</h2>
          <ul className='list'>
            {todo.map(({text ,completed}, index)=>{
              return <div className='item'>
                <li
                className={completed?'done':""} 
                key={index} 
                onClick={()=> handleItemDone(index)}
                >
                  {text}
                  </li>
                  <span onClick={()=> handleDeleteItem(index)}>❌</span>
              </div>
            })}
          </ul>

      <input ref={inputRef} placeholder='Enter item ..'/>
          <button onClick={handleAddItem}>Add item</button>
    </div>
    <div>
          <p className='note'> - click on the item to mark it as done</p>
    </div>
    </div>
  );
}

export default App;
