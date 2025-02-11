"use client"
import { useEffect, useState } from 'react';

export default function Page() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ type: '', time: '', height: '' });

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch('/api/getItems');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Failed to fetch items:', error);
            }
        }
        fetchItems();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/addItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const addedItem = await response.json();
            setItems([...items, addedItem]);
            setNewItem({ type: '', time: '', height: '' });
        } catch (error) {
            console.error('Failed to add item:', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="type"
                    value={newItem.type}
                    onChange={handleInputChange}
                    placeholder="Type"
                    required
                />
                <input
                    type="text"
                    name="time"
                    value={newItem.time}
                    onChange={handleInputChange}
                    placeholder="Time"
                    required
                />
                <input
                    type="text"
                    name="height"
                    value={newItem.height}
                    onChange={handleInputChange}
                    placeholder="Height"
                    required
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}