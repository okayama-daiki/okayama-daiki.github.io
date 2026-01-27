import { Container, Link, List, Spacer, Stack, Text, Timeline, Heading } from "@chakra-ui/react";
import { FaPersonFalling } from "react-icons/fa6";
import { PiVideoDuotone } from "react-icons/pi";
import { RiMentalHealthLine } from "react-icons/ri";
import Footer from "./Footer";
import Section from "./Section";

export default function Content() {
  return (
    <Container maxW="5xl" pb="2">
      <Stack>
        <Section title="Who Am I?">
          <Text>
            I am a programmer in Japan and occasionally take on software development contracts from{" "}
            <Link href="https://dakken.co.jp">Dakken LLC.</Link>, a student-run company focusing on data analysis and
            software development. I received my Bachelor's degree in Social Information Science from{" "}
            <Link href="https://www.u-hyogo.ac.jp/english/">University of Hyogo</Link>. I am currently a Master's
            student at{" "}
            <Link href="https://u-hyogo-gsis.org/en/">Graduate School of Information Science, University of Hyogo</Link>
            , majoring in online graph exploration algorithms.
          </Text>

          <Spacer height={4} />
        </Section>

        <Section title="Software Development Projects">
          <Text>I have been working on some software development projects.</Text>

          <Spacer height={4} />

          <Timeline.Root>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <PiVideoDuotone />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Building a on-demand video broadcasting system for reccurent education</Timeline.Title>
                <Timeline.Description>Feb 2024 - Apr 2024</Timeline.Description>
                <Text textStyle="sm">
                  I was responsible for the development of a video broadcasting system for recurrent education. The
                  system allows users to watch videos on demand, and provides a user-friendly interface for managing
                  videos and users.
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <RiMentalHealthLine />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Developing a web application for managing mental health</Timeline.Title>
                <Timeline.Description>Sep 2024 - Apr 2025</Timeline.Description>
                <Text textStyle="sm">
                  Press release is available at{" "}
                  <Link href="https://www.kobe-np.co.jp/news/akashi/202505/0019016362.shtml">here</Link> (in Japanese).
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <FaPersonFalling />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Replace the existing web application with Next.js</Timeline.Title>
                <Timeline.Description>Feb 2025 - Mar 2025</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </Section>

        <Section title="What is 'Online Graph Exploration'?">
          <Text>
            Online graph exploration is a class of problems in theoretical computer science that studies how one or more
            agents can efficiently explore an unknown graph. In this setting, the structure of the graph is not known in
            advance and is revealed only through exploration, which requires algorithms to make decisions online without
            full information. My research focuses on multi-agent exploration in grid graphs, where the goal is to
            coordinate multiple searchers so that all vertices are visited with provable performance guarantees.
          </Text>

          <Spacer height={2} />
          <Heading fontWeight="bold" color="fg" size="md">
            Publications
          </Heading>

          <List.Root>
            <List.Item>
              Daiki Okayama, Yuya Higashikawa, and Shuichi Miyazaki, "Online Exploration of Grid Graphs with Multiple
              Searchers", In Proceedings of the 16th Annual Meeting of Asian Association for Algorithms and Computation
              (AAAC 2025), May 2025. Available at{" "}
              <Link href="https://conference.cs.cityu.edu.hk/aaac2025/abstract/AAAC_2025_paper_12.pdf">
                cityu.edu.hk
              </Link>
              .
            </List.Item>
          </List.Root>
        </Section>

        <Section title="Links">
          <List.Root>
            <List.Item>
              <Link href="https://github.com/okayama-daiki" target="_blank">
                GitHub
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://www.linkedin.com/in/daikiokayama/" target="_blank">
                LinkedIn
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://www.slideshare.net/DaikiOkayama" target="_blank">
                SlideShare
              </Link>
            </List.Item>
          </List.Root>
        </Section>

        <Section title="Contact">
          <Text>
            Please send me a message through my{" "}
            <Link href="https://www.linkedin.com/in/daikiokayama/" target="_blank">
              LinkedIn
            </Link>{" "}
            page, or email found in my recent papers. I am always open to discussing new ideas and opportunities.
          </Text>
        </Section>
      </Stack>

      <Footer />
    </Container>
  );
}
