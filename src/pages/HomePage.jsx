import { useState, useRef, useContext } from "react";

function HomePage() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const todoEkleme = () => {
        setTodos([...todos, { title: input, done: false, id: Math.floor(Math.random() * 1000) }]);
        inputRef.current.value = "";
        console.table(todos);
    }
    return (
        <>
            <input ref={inputRef} type="text" name="title" placeholder="Todo Title"
                onChange={handleChange}
                className="bg-sky-100" />
            <button onClick={todoEkleme}> EKLE</button>
            <hr />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}</li>
                ))}
            </ul>

        </>
    );
}

export default HomePage;