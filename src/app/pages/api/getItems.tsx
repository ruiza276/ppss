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
    console.log("GETitems IF");  
    if (req.method === 'GET') {
        console.log("GETitems IF");    
        try {
            const { resources: items } = await container.items.readAll().fetchAll();
            res.status(200).json(items);
            console.log(items, "GETitems");
        } catch (error) {
            console.log(error, "GETitems");
            res.status(500).json({ error: 'Failed to fetch items' });
        }
    } else {
        console.log("else", "GETitems");
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}