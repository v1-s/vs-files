import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [todos,setTodos]=useState([]);
    useEffect(() => {
        let Url='https://dummyjson.com/todos';
        axios.get(Url).then(response => {
            setTodos(response.data.todos);
            console.log("response Data",response.data.todos);
        }).catch(error=>
            console.log(error))
    }, []);
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>todo</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
