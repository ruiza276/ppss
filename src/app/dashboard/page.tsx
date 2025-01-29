// filepath: /home/alex/_repos/PPSS/ppss/src/app/dashboard/page.tsx
"use client"
import { useEffect, useState } from 'react';
import { fetchData } from '../pages/api/index';

export default function Page() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        getData();
    }, []);

    return (
        <div>
            <p>Dashboard Page</p>
            <p>Dashboard Page</p><p>Dashboard Page</p>
            <p>Dashboard Page</p>
            <p>Dashboard Page</p>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}