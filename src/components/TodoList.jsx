import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../store/todoSlice"
export const TodoList = () => {

    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos)


    const handleRemove = (item) => {
        dispatch((removeTodo(item)));
    }
    return (
        <div>
            {todos?.map((item) => {
                return (
                    <div className="mx-2 flex justify-between my-2 bg-blue-200 rounded">
                        <p className=" my-2 px-4 rounded">{item}</p>
                        <button onClick={() => handleRemove(item)} className="bg-red-100 rounded-3xl px-2 my-1 border border-red-400 active:bg-red-400">Remove❌</button>
                    </div>
                )
            })}


        </div>
    )
}
