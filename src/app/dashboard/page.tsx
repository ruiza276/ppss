/* "use client"

import { CosmosClient } from "@azure/cosmos";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useForm } from "react-hook-form"

interface FormValues {
  username: string
  bio: string
}
export const dynamic = 'force-dynamic';

export default async function Page() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState();
  const endpoint = process.env["COSMOSDB_ENDPOINT"];
  const key = process.env["COSMOSDB_KEY"];

  if (!endpoint || !key) {
      throw new Error("COSMOSDB_ENDPOINT and COSMOSDB_KEY must be defined");
  }

  const client = new CosmosClient({ endpoint, key });
  const database = client.database("ppss");
  const container = database.container("Items");

  const { resources: notes } = await container.items.readAll().fetchAll();

  const onSubmit = async (data) => {
    data.preventDefault();
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

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>()

    return (
      console.log(items),
      <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field
          label="Username"
          invalid={!!errors.username}
          errorText={errors.username?.message}
        >
          <Input
            placeholder="@username"
            {...register("username", { required: "Username is required" })}
          />
        </Field>
        <Field
          label="Profile bio"
          invalid={!!errors.bio}
          helperText="A short description of yourself"
          errorText={errors.bio?.message}
        >
          <Textarea
            placeholder="I am ..."
            {...register("bio", { required: "Bio is required" })}
          />
        </Field>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
    );
}

 */