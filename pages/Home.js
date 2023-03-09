import Layout from "@/components/Layout";
import { Card, Grid, Spacer, Text,  } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout title="Home">
      <Grid.Container gap={6} justify="center">
        <Grid>
            <Spacer y={6}/>
      <Text 
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%", justifyContent: "center"
        }}
        weight="bold"
      >
        READY TO GET RIPPED
      </Text>
      </Grid>
    
        <Grid>
        <Spacer y={2} />
        <Card css={{  mw: "560px" }}>
        <Card.Header >
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        </Card.Header>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iCQ2gC4DqJw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
