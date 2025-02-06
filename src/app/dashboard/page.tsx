
"use client"
import { useEffect, useState } from 'react';
import { fetchData } from '../pages/api/index';
import { Table, Container } from '@chakra-ui/react';

export default function Page() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        async function getData() {
            const fetchedData = await fetchData();
            setData(fetchedData.data);
        }
        getData();
    }, []);

    return (
        <Container>
        <Table.Root size="sm" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Time</Table.ColumnHeader>
            <Table.ColumnHeader>Height</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Type</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.time}</Table.Cell>
              <Table.Cell>{item.height}</Table.Cell>
              <Table.Cell textAlign="end">{item.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      </Container>
    );
}