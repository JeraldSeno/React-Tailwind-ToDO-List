import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [newDue, setNewDue] = useState("")
  const [newTime, setNewTime] = useState("")
  const [newClock, setNewClock] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem, newDue, newTime, newClock)

    setNewItem("")

    if (newDue === "") return

    setNewDue("")

    if (newTime === "") return

    setNewTime("")

    if (newClock === "") return

    setNewClock("")
  }

  return (
    <form onSubmit={handleSubmit} className="m-3">
      <div className="flex flex-col space-y-3">
        <label htmlFor="item" className="bold">New Task</label>
        <div className="flex">
            <span>Name:</span>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="item"
                className="rounded pl-2 bg-[#4F4557] w-full ml-2"
            />           
        </div>
        <div className="flex">
            <span>Due Date:</span>
              <select 
                value={newDue} 
                className="rounded bg-[#4F4557] ml-2 w-fit mr-auto" 
                onChange={e => setNewDue(e.target.value)}
              >
                <option>No Date</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            <span>Time:</span>
            <select
                value={newTime}
                onChange={e => setNewTime(e.target.value)}
                type="time"
                className="rounded bg-[#4F4557] ml-2"
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select
                value={newClock}
                onChange={e => setNewClock(e.target.value)}
                type="time"
                className="rounded bg-[#4F4557] ml-2"
            >
              <option></option>
              <option>a.m</option>
              <option>p.m</option>
            </select>
        </div>
        <button className="mr-auto w-fit pl-2 pr-2 rounded bg-[#6D5D6E] hover:bg-[#6D5D7E]">Add</button>
      </div>
    </form>
  )
}