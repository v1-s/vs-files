import React, { useState, useRef } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
    const [items, setItems] = useState([]);
    const _inputElement = useRef(null);

    function addItem(e) {
        if (_inputElement.current.value !== "") {
            var newItem = {
                text: _inputElement.current.value,
                key: Date.now()
            };

            setItems(prevItems => {
                return [...prevItems, newItem];
            });

            _inputElement.current.value = "";
        }
        console.log(items);
        e.preventDefault();
    }

    function deleteItem(key) {
        var filteredItems = items.filter(function (item) {
            return (item.key !== key);
        });

        setItems(filteredItems);
    }

    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input ref={_inputElement} placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
                <TodoItems entries={items} delete={deleteItem} />
            </div>
        </div>
    );
}
