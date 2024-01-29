import React, { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
    const [items, setItems] = useState([]);
	const addItem = (e) => {
        if (e.target.value !== "") {
            var newItem = {
                text: e.target.value,
                key: Date.now()
            };

             setItems((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            e.target.value = "";
        }
        console.log(items);
        e.preventDefault();
    }

    const deleteItem = (key) => {
        var filteredItems = items.filter(function (item) {
            return (item.key !== key);
        });

        setItems({
            items: filteredItems
        });
    }

    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
                <TodoItems entries={items} delete={deleteItem} />
            </div>
        </div>
    );
}
