import { useState } from 'react'

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  console.log("NewTodoForm rendering") // Check console

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted with:", newItem) // Check console
    
    if (newItem.trim() === "") return
    
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="What needs to be done?"
        />
      </div>
      <button className="btn" type="submit">Add</button>
    </form>
  )
}