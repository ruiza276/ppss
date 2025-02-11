import { CosmosClient } from "@azure/cosmos";
import type { NextApiRequest, NextApiResponse } from 'next';

const endpoint = process.env["COSMOSDB_ENDPOINT"];
const key = process.env["COSMOSDB_KEY"];

if (!endpoint || !key) {
    throw new Error("COSMOSDB_ENDPOINT and COSMOSDB_KEY must be defined");
}

const client = new CosmosClient({ endpoint, key });
const database = client.database("ppss");
const container = database.container("Items");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("ADDitems IF");
    if (req.method === 'POST') {
        try {
            const newItem = req.body;
            const { resource: createdItem } = await container.items.create(newItem);
            res.status(201).json(createdItem);
        } catch (error) {
            console.error('Failed to create item:', error);
            res.status(500).json({ error: 'Failed to create item' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}