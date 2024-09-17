import React from 'react'


type ToDoProps = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function Todo({userId, id, title, completed }: ToDoProps){
    return (
    
    <tr key={id} className={ completed ? 'completed' : 'notcompleted' }>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{completed ? 'Yes' : 'No'}</td>
    </tr>
      
  )
}

export default Todo
