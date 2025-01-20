import { Box, Center, Container, For, Stack, Text, SimpleGrid } from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"


export default function Page() {
  return (
    <Center>
    <Container maxW="container.lg">
   <Stack gap="8">
          <Stack gap="1">
            <Text fontWeight="bold">{"FAQs"}</Text>
            <AccordionRoot
              size={"lg"}
              collapsible
              defaultValue={["q0"]}
            >
              {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                  <AccordionItemContent>{item.text}</AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Stack>
    </Stack>
    </Container>
    </Center>
  )
}

const items = [
  { value: "q0", title: "How do you contact the admin?", text: "TBA" },
  { value: "q1", title: "Do you allow pets?", text: "We love furry (and not furry 🦎) pet friends! However, we do not accept pet stays at the studios at this time." },
  { value: "q2", title: "Do you allow smoking?", text: "Not in the rooms please! However there are a few spots and benches to be found around the building where one can smoke! Smoking with our resident gargoyle is a favorite smoking spot among certain staff members 😶‍🌫️ All studios come with a plastic ash tray for you to use around the building as well. " },
]