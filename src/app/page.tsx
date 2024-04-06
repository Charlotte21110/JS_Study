"use client"
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import TodoFilter from "@/components/TodoFilter";
import { useState } from "react";
import { Todo } from "@/types";


export default function Home() {
  const [todos, setTodos] =useState<Todo[]>([])//可以有一个状态去写泛型
  const [filter, setFilter] = useState('all')

  const addTodo = (text: string) =>{
    const newTodo = {
      id: Date.now(),
      text,
      completed:false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number)=>{
    setTodos(todos.filter(todo=>todo.id!=id))
  }

  const toggleTodo = (id: number)=>{
    setTodos(todos.map(todo=>{
      if (todo.id === id){
        todo.completed = ! todo.completed
      }
      return todo
    }))
  }

  //写一个函数获取所有东西
  const getFilteredTodos = ()=>{
    switch (filter){
      case 'completed':
        return todos.filter(todo=>todo.completed)
      case 'active':
        return todos.filter(todo=>!todo.completed)
      default:
        return todos
    }
  }
  

  return (
    <div>
      <h1>TodoList</h1>
    <AddTodo addTodo={addTodo}></AddTodo>
    <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
    <TodoFilter setFilter={setFilter}></TodoFilter>
    </div>
    
  )
}
