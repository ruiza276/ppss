"use client"
import { useEffect, useState } from 'react';
import { fetchData } from '../pages/api/index';
import { 
  Box, 
  Container, 
  Image, 
  Center, 
  Text, 
  SimpleGrid, 
  Stack, 
  HStack, 
  Badge, 
  Spinner,
  Heading
} from '@chakra-ui/react';

interface TideData {
  time: string;
  type: 'high' | 'low';
  height: number;
}

export default function Page() {
    const [data, setData] = useState<TideData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                setError(null);
                const fetchedData = await fetchData();
                setData(fetchedData.data || []);
            } catch (err) {
                setError('Failed to fetch tide data. Please try again later.');
                console.error('Error fetching tide data:', err);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    const formatTime = (timeString: string) => {
        const date = new Date(timeString);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        
        const isToday = date.toDateString() === today.toDateString();
        const isTomorrow = date.toDateString() === tomorrow.toDateString();
        
        const timeOnly = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        
        if (isToday) {
            return `Today ${timeOnly}`;
        } else if (isTomorrow) {
            return `Tomorrow ${timeOnly}`;
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
    };

    const formatHeight = (height: number) => {
        return `${height.toFixed(2)}m`;
    };

    const getTideIcon = (type: 'high' | 'low') => {
        return type === 'high' ? '🌊' : '🏖️';
    };

    const getTideBadgeColor = (type: 'high' | 'low') => {
        return type === 'high' ? 'blue' : 'orange';
    };

    if (loading) {
        return (
            <Container maxW="container.lg" py={8}>
                <Center>
                    <Image src="/surfsUpFinal.png" alt="Waves" mb={8} />
                </Center>
                <Center>
                    <Stack align="center" gap={4}>
                        <Spinner size="xl" color="pink.500" />
                        <Text>Loading tide data...</Text>
                    </Stack>
                </Center>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxW="container.lg" py={8}>
                <Center>
                    <Image src="/surfsUpFinal.png" alt="Waves" mb={8} />
                </Center>
                <Box 
                    bg="red.900" 
                    color="red.100" 
                    p={4} 
                    borderRadius="md" 
                    border="1px solid"
                    borderColor="red.700"
                >
                    <Text>{error}</Text>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxW="container.lg" py={8}>
            <Center mb={8}>
                <Image src="/surfsUpFinal.png" alt="Waves" />
            </Center>

            <Stack gap={6}>
                <Box textAlign="center">
                    <Heading size="lg" mb={2}>Puerto Vallarta Tides</Heading>
                    <Text color="gray.400" fontSize="sm">
                        Live tide data for the next 24 hours
                    </Text>
                </Box>

                {data.length === 0 ? (
                    <Center py={8}>
                        <Text>No tide data available at this time.</Text>
                    </Center>
                ) : (
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                        {data.map((item, index) => (
                            <Box 
                                key={index} 
                                bg="gray.800"
                                p={4}
                                borderRadius="lg"
                                border="1px solid"
                                borderColor="gray.700"
                                boxShadow="lg"
                                _hover={{ boxShadow: "xl", borderColor: "gray.600" }}
                                transition="all 0.2s"
                            >
                                <Stack gap={3}>
                                        <HStack justify="space-between" align="center">
                                            <HStack gap={2}>
                                                <Text fontSize="xl">
                                                    {getTideIcon(item.type)}
                                                </Text>
                                                <Badge 
                                                    colorScheme={getTideBadgeColor(item.type)}
                                                    variant="solid"
                                                    size="sm"
                                                >
                                                    {item.type.toUpperCase()} TIDE
                                                </Badge>
                                            </HStack>
                                            <Text 
                                                fontSize="2xl" 
                                                fontWeight="bold"
                                                color={item.type === 'high' ? 'blue.400' : 'orange.400'}
                                            >
                                                {formatHeight(item.height)}
                                            </Text>
                                        </HStack>
                                        
                                        <Box>
                                            <Text fontSize="sm" color="gray.500" mb={1}>
                                                TIME
                                            </Text>
                                            <Text fontSize="lg" fontWeight="medium">
                                                {formatTime(item.time)}
                                            </Text>
                                        </Box>
                                    </Stack>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}

                <Box textAlign="center" pt={4}>
                    <Text fontSize="xs" color="gray.500">
                        Tide data provided by StormGlass • Updated in real-time
                    </Text>
                </Box>
            </Stack>
        </Container>
    );
}