"use client"
import { useEffect, useState } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { handler } from '../pages/api/addItems';

interface Message {
  name: string;
  location: string;
  message: string;
}

export default function Page() {
  const [items, setItems] = useState<Message[]>([]);
  const [newItem, setNewItem] = useState<Message>({ name: '', location: '', message: '' });
  const req = useForm();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    console.log("onSubmit", e);
    console.log("newItem", newItem);
    const req = 
    e.preventDefault();
    try {
      handler();
/*       if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      //const addedItem: Message = await response.json();
      //setItems([...items, addedItem]);
      setNewItem({ name: '', location: '', message: '' });
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
      <form onSubmit={onSubmit}>
        <Stack >
          <Input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <Input
            type="text"
            name="location"
            value={newItem.location}
            onChange={handleInputChange}
            placeholder="Where are you visiting from?"
            required
          />
          <Textarea
            name="message"
            value={newItem.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
          />
          <Button type="submit" colorScheme="blue">Add Item</Button>
        </Stack>
      </form>
    </div>
  );
}