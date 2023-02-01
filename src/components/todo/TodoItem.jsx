import React from 'react'
import './TodoItem.scss'

export default function TodoItem({todo}) {
  return (
    <div className='todoItem'>
        <div>id: {todo?.id}</div>
        <div>todo: {todo?.todo}</div>
    </div>
  )
}
