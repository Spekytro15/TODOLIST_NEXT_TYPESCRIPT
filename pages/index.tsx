import type { NextPage } from 'next'
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import TodoList from './components/todolist';


interface Todo {
  item?:string
}

const Home: React.FC <Todo> =(props)  => {
  const [todo, settodo] = useState<Todo[]>([]);
  const [item, setitem] = useState<string>("");

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>, name: any): void {
    const val = (e.target && e.target.value) || '';
   
   setitem(val)

  }

  const addTodo = () => {
  const newTodo = {item:item}
   settodo([...todo, newTodo])

   setitem("")
    
  }
  useEffect(() => {
    console.log(todo)
}, [todo]); 

 
  const footer = <span>
    <InputText type="text" value={item} style={{ margin: "1vh" }} onChange={(e) => onInputChange(e, "item")} placeholder="item" />
   <Button style={{ margin: "1vh" }} type="submit" onClick={addTodo} >Cadastrar</Button>
    </span>;
  return (


    <>
      <Card title="TodoList" footer={footer} className="">
     <ul 
     style={{listStyle:"none"}}
     >
      {todo.map((todo, index) => (
           <li style={{marginTop:"5px"}}><TodoList id="1" item={todo.item}/>  </li>
          
        ))}
      </ul>   
      </Card> 
    </>

  )
}

export default Home
