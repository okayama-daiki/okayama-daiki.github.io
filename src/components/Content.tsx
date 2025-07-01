import { Blockquote, Container, Link, List, Spacer, Stack, Text, Timeline } from "@chakra-ui/react";
import { FaPersonFalling } from "react-icons/fa6";
import { PiVideoDuotone } from "react-icons/pi";
import { RiMentalHealthLine } from "react-icons/ri";
import Footer from "./Footer";
import Section from "./Section";
import { toaster } from "./ui/toaster";

export default function Content() {
  const alertNotAvailable = () => {
    toaster.create({
      title: "Currently not available",
      description: "I am currently working on my CV. It will be available soon.",
      type: "info",
    });
  };

  return (
    <Container maxW="5xl" pb="2">
      <Stack>
        <Section title="Who Am I?">
          <Text>
            I am a software engineer in Japan. Currently I am working for{" "}
            <Link href="https://dakken.co.jp">Dakken LLC.</Link>, a data analysis and software development company. I am
            also attending{" "}
            <Link href="https://u-hyogo.info/en/">Graduate School of Information Science, University of Hyogo</Link>,
            majoring in online exploration algorithms. I received my Bachelor's degree in Social Information Science
            from <Link href="https://www.u-hyogo.ac.jp/english/">University of Hyogo</Link>.
          </Text>

          <Spacer height={4} />

          <Text>
            My dedicated CV is given{" "}
            <Link href="javascript:void(0)" onClick={alertNotAvailable}>
              here
            </Link>
            .
          </Text>

          <Spacer height={4} />

          <Text>I am interested in:</Text>

          <List.Root>
            <List.Item>Specifications of programming languages</List.Item>
            <List.Item>Programming paradigms and Design patterns</List.Item>
            <List.Item>Humor and comedy</List.Item>
          </List.Root>
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

        <Section title="Works as a Software Engineer">
          <Text>In private, I write articles and create software. Here are some of my works:</Text>

          <List.Root>
            <List.Item>
              <Link href="https://snake-game.daiki.dev">Snake Game - Online PvP snake game</Link>
            </List.Item>
            <List.Item>
              etc... See my{" "}
              <Link href="https://github.com/okayama-daiki" target="_blank">
                GitHub
              </Link>
            </List.Item>
          </List.Root>
        </Section>

        <Section title="What do I study?">
          <Text>I am studing the online graph exploration. Following is a brief introduction.</Text>

          <Blockquote.Root my="2">
            <Blockquote.Content>
              Imagine you made it your personal goal to visit all pubs of the city you just moved to and know nothing
              about. Since you are ambitious, you want to do it in one night, but as you walk into the first pub next
              door you notice that you do not have a map of the city. Luckily, on one wall you find a list of some of
              the closest pubs with information how far away they are and how to get there. As you are assured, such a
              list is available in every pub of the city, so you decide to conduct your quest by using only the
              information on these lists. Of course, you want to minimize the total distance you have to walk during
              your endeavor, but, after all, how much could a map help if you have these lists? Probably not too much,
              right?
            </Blockquote.Content>
            <Blockquote.Caption>
              -{" "}
              <cite>
                <Link href="https://tik-old.ee.ethz.ch/file//a0b760df702cca0a7686388f89cdbffb/bait.pdf">
                  Online Graph Exploration
                </Link>{" "}
                by Roger Wattenhofer
              </cite>
            </Blockquote.Caption>
          </Blockquote.Root>
        </Section>

        <Section title="Publication / Presentation as a Researcher">
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
