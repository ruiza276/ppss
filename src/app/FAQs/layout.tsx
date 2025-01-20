import { Grid, GridItem } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

 
export default function FaqsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }