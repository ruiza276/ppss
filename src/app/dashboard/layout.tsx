import { Grid, GridItem } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

 
export default function Layout({ }: { children: React.ReactNode }) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      <GridItem colSpan={2}>
                <Image
                  src="/ppss.png"
                  alt="pps"
                />
      </GridItem>
      <GridItem colSpan={1}>
      <Image
                  src="/ppss.png"
                  alt="pps"
                />
      </GridItem>
      <GridItem colSpan={1}>
      <Image
                  src="/ppss.png"
                  alt="pps"
                />
      </GridItem>
    </Grid>
  );
}