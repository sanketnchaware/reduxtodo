import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from "../store/todoSlice"
export const TodoInput = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }

    const handleChange = (e) => {

        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className=" flex justify-between my-2 px-2">
            <input value={text} onChange={handleChange} placeholder="Add Todo" className="w-full bg-yellow-200 mr-2 rounded-xl border-black p-2  border-2" type="text" />
            <button className="border-blue-800 active:bg-yellow-200 border-2 bg-blue-600 rounded-xl px-4 py-2">Add</button>
        </form>
    )
}
