import React, { useState, useEffect } from 'react';
import getTodos from '../api/todos';
import Todo from './Todo';

interface Todo {
    userId: number,
    id: number;
    title: string;
    completed: boolean;
}

const TodoTable = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [choosenLimit, setChoosenLimit] = useState(10);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getTodos(page, limit);
            setTodos(data);
        };
        fetchTodos();
    }, [page, limit]);

    const handlePageChange = (newPage: number) => {
        if(newPage<1){
            setPage(1);
        }
        else if(todos.length === 0){
            setPage(page-1)
        }else{
            setPage(newPage);
        }

    };

    const handleLimitChange = (newLimit: number) => {
        if (newLimit > 40 || newLimit < 10 || newLimit === null) {
            setLimit(10);
        }
        else {
            setLimit(newLimit);
        }
    };

    const handleChosenLimit = (choosenLimit: number) => {
        setChoosenLimit(choosenLimit);
    }

    return (
        <div className='TodoTable'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <Todo userId={todo.userId} id={todo.id} title={todo.title} completed={todo.completed} />
                    ))}
                </tbody>
            </table>
            <br></br>
            <center>
            <div>
                <button onClick={() => handlePageChange(page - 1)}>Prev Page</button>
                <button onClick={() => handlePageChange(page + 1)}>Next Page</button>
                <br></br>
                <input
                    type="number"
                    placeholder="Page limit 10-40 (Inc)"
                    onChange={(e) => handleChosenLimit(parseInt(e.target.value, 10))}
                /><br></br>
                <button onClick={() => handleLimitChange(choosenLimit)}>Set Page Limit</button>
                
            </div>
            <b><p>Page: {page} & Limit: {limit}</p></b>
            </center>
        </div>
    );
};

export default TodoTable;