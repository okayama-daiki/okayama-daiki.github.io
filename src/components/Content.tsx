import { Container, Link, List, Stack, Text } from "@chakra-ui/react";

import Footer from "./Footer";
import Section from "./Section";

export default function Content() {
  return (
    <Container maxW="5xl">
      <Stack>
        <Section title="Who Am I?">
          <Text>
            I am a software engineer in Japan. Currently I am working for{" "}
            <Link href="https://dakken.co.jp">Dakken LLC.</Link>, a data
            analysis and software development company. I am also attending the
            University of Hyogo, majoring in online exploration algorithms. I
            received a BE in March 2025 and am attending to the Graduate School
            of Information Science, University of Hyogo.
          </Text>

          <Text>I am interested in:</Text>

          <List.Root>
            <List.Item>Specifications of programming languages</List.Item>
            <List.Item>Programming paradigms and Design patterns</List.Item>
            <List.Item>Humor and comedy</List.Item>
          </List.Root>
        </Section>

        <Section title="Software Development Projects">
          <Text>
            I have been working on some software development projects.
          </Text>

          <List.Root>
            <List.Item>
              Building a video on-demand system for reskilling
            </List.Item>
            <List.Item>
              Building a self-care application co-produced with local
              governments
            </List.Item>
          </List.Root>
        </Section>

        <Section title="Works as a Software Engineer">
          <Text>
            In private, I write articles and create software. Here are some of
            my works:
          </Text>
        </Section>

        <Section title="What I study?">
          <Text>
            I am studying online exploration algorithms, which are algorithms
            that explore unknown environments in real-time. My research focuses
            on grid graphs, which are commonly used in robotics and computer
            games. I am particularly interested in the efficiency of online
            exploration algorithms and their applications in real-world
            scenarios.
          </Text>
        </Section>

        <Section title="Publication as a Researcher">
          <List.Root>
            <List.Item>
              Daiki Okayama, Yuya Higashikawa, and Shuichi Miyazaki, "Online
              Exploration of Grid Graphs with Multiple Searchers", In
              Proceedings of the 16th Annual Meeting of Asian Association for
              Algorithms and Computation (AAAC 2025), May 2025. Available at{" "}
              <Link href="https://conference.cs.cityu.edu.hk/aaac2025/abstract/AAAC_2025_paper_12.pdf">
                cityu.edu.hk
              </Link>
              .
            </List.Item>
          </List.Root>
        </Section>

        <Section title="Awards">
          <List.Root>
            <List.Item>AAAC 2025 Best Student Presentation</List.Item>
          </List.Root>
        </Section>

        <Section title="Links">
          <List.Root>
            <List.Item>GitHub</List.Item>
          </List.Root>
        </Section>

        <Section title="Contact">
          <Text>
            If you have any questions or requests, please feel free to contact
            me.
          </Text>
          <List.Root>
            <List.Item>
              Email: <Link href="mailto:ad25r015@guh.u-hyogo.ac.jp"> </Link>
            </List.Item>
            <List.Item>
              Twitter:{" "}
              <Link href="https://twitter.com/daiki_okayama">
                daiki_okayama
              </Link>
            </List.Item>
          </List.Root>
        </Section>
      </Stack>

      <Footer />
    </Container>
  );
}
