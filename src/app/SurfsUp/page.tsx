
"use client"
import { useEffect, useState } from 'react';
import { fetchData } from '../pages/api/index';
import { Table, Container, Image, Center } from '@chakra-ui/react';

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
          <Center>
            <Image src="/surfsUpFinal.png" alt="Waves" /> 
            </Center>
        <Table.Root size="sm" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Wave Time</Table.ColumnHeader>
            <Table.ColumnHeader>Wave Type</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Wave Height</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.time}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell textAlign="end">{item.height}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      </Container>
    );
}