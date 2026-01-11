import {
    Blockquote,
    Container,
    Link,
    List,
    Spacer,
    Stack,
    Text,
    Timeline,
} from "@chakra-ui/react";
import { defineMessage } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import { useId } from "react";
import { PiVideoDuotone } from "react-icons/pi";
import { RiMentalHealthLine } from "react-icons/ri";
import Footer from "./Footer";
import Section from "./Section";
import { toaster } from "./ui/toaster";

export default function Content() {
    const { i18n } = useLingui();

    const toastTitle = defineMessage({
        id: "content.cv.toast.title",
        message: "Currently not available",
    });

    const toastDescription = defineMessage({
        id: "content.cv.toast.description",
        message: "I am currently working on my CV. It will be available soon.",
    });

    const sectionIdBase = useId();
    const sectionIds = {
        whoAmI: `${sectionIdBase}-who-am-i`,
        softwareProjects: `${sectionIdBase}-software-development-projects`,
        worksEngineer: `${sectionIdBase}-works-as-a-software-engineer`,
        study: `${sectionIdBase}-what-do-i-study`,
        publication: `${sectionIdBase}-publication-presentation`,
        links: `${sectionIdBase}-links`,
        contact: `${sectionIdBase}-contact`,
    };

    const alertNotAvailable = () => {
        toaster.create({
            title: i18n._(toastTitle),
            description: i18n._(toastDescription),
            type: "info",
        });
    };

    return (
        <Container maxW="5xl" pb="2">
            <Stack>
                <Section
                    title={<Trans>Who Am I?</Trans>}
                    id={sectionIds.whoAmI}
                >
                    <Text>
                        <Trans>I am a software engineer in Japan.</Trans>{" "}
                        <Trans>
                            Currently I am working for{" "}
                            <Link href="https://dakken.co.jp">Dakken LLC.</Link>
                            , a data analysis and software development company.
                        </Trans>{" "}
                        <Trans>
                            I received my Bachelor's degree in Social
                            Information Science from{" "}
                            <Link href="https://www.u-hyogo.ac.jp/english/">
                                University of Hyogo
                            </Link>
                            .
                        </Trans>{" "}
                        <Trans>
                            I am also attending{" "}
                            <Link href="https://u-hyogo-gsis.org/en/">
                                Graduate School of Information Science,
                                University of Hyogo
                            </Link>
                            , majoring in online exploration algorithms.
                        </Trans>
                    </Text>

                    <Spacer height={4} />

                    <Text>
                        <Trans>
                            My dedicated CV is given{" "}
                            <Link
                                href="javascript:void(0)"
                                onClick={alertNotAvailable}
                            >
                                here
                            </Link>
                            .
                        </Trans>
                    </Text>

                    <Spacer height={4} />

                    <Text>
                        <Trans>I am interested in:</Trans>
                    </Text>

                    <List.Root>
                        <List.Item>
                            <Trans>
                                Specifications of programming languages
                            </Trans>
                        </List.Item>
                        <List.Item>
                            <Trans>
                                Programming paradigms and Design patterns
                            </Trans>
                        </List.Item>
                        <List.Item>
                            <Trans>Humor and comedy</Trans>
                        </List.Item>
                    </List.Root>
                </Section>

                <Section
                    title={<Trans>Software Development Projects</Trans>}
                    id={sectionIds.softwareProjects}
                >
                    <Text>
                        <Trans>
                            I have been working on some software development
                            projects.
                        </Trans>
                    </Text>

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
                                <Timeline.Title>
                                    <Trans>
                                        Building an on-demand video broadcasting
                                        system for recurrent education
                                    </Trans>
                                </Timeline.Title>
                                <Timeline.Description>
                                    <Trans>Feb 2024 - Apr 2024</Trans>
                                </Timeline.Description>
                                <Text textStyle="sm">
                                    <Trans>
                                        I was responsible for the development of
                                        a video broadcasting system for
                                        recurrent education. The system allows
                                        users to watch videos on demand, and
                                        provides a user-friendly interface for
                                        managing videos and users.
                                    </Trans>
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
                                <Timeline.Title textStyle="sm">
                                    <Trans>
                                        Developing a web application for
                                        managing mental health
                                    </Trans>
                                </Timeline.Title>
                                <Timeline.Description>
                                    <Trans>Sep 2024 - Apr 2025</Trans>
                                </Timeline.Description>
                                <Text textStyle="sm">
                                    <Trans>
                                        Press release is available at{" "}
                                        <Link href="https://www.kobe-np.co.jp/news/akashi/202505/0019016362.shtml">
                                            here
                                        </Link>{" "}
                                        (in Japanese).
                                    </Trans>
                                </Text>
                            </Timeline.Content>
                        </Timeline.Item>
                    </Timeline.Root>
                </Section>

                <Section
                    title={<Trans>Works as a Software Engineer</Trans>}
                    id={sectionIds.worksEngineer}
                >
                    <Text>
                        <Trans>
                            In private, I write articles and create software.
                            Here are some of my works:
                        </Trans>
                    </Text>

                    <List.Root>
                        <List.Item>
                            <Link href="https://snake-game.daiki.dev">
                                <Trans>
                                    Snake Game - Online PvP snake game
                                </Trans>
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Trans>etc... See my</Trans>{" "}
                            <Link
                                href="https://github.com/okayama-daiki"
                                target="_blank"
                            >
                                GitHub
                            </Link>
                        </List.Item>
                    </List.Root>
                </Section>

                <Section
                    title={<Trans>What do I study?</Trans>}
                    id={sectionIds.study}
                >
                    <Text>
                        <Trans>
                            I am studying the online graph exploration.
                            Following is a brief introduction.
                        </Trans>
                    </Text>

                    <Blockquote.Root my="2">
                        <Blockquote.Content>
                            <Trans>
                                Imagine you made it your personal goal to visit
                                all pubs of the city you just moved to and know
                                nothing about. Since you are ambitious, you want
                                to do it in one night, but as you walk into the
                                first pub next door you notice that you do not
                                have a map of the city. Luckily, on one wall you
                                find a list of some of the closest pubs with
                                information how far away they are and how to get
                                there. As you are assured, such a list is
                                available in every pub of the city, so you
                                decide to conduct your quest by using only the
                                information on these lists. Of course, you want
                                to minimize the total distance you have to walk
                                during your endeavor, but, after all, how much
                                could a map help if you have these lists?
                                Probably not too much, right?
                            </Trans>
                        </Blockquote.Content>
                        <Blockquote.Caption>
                            -{" "}
                            <cite>
                                <Link href="https://tik-old.ee.ethz.ch/file//a0b760df702cca0a7686388f89cdbffb/bait.pdf">
                                    Online Graph Exploration
                                </Link>{" "}
                                <Trans>by Roger Wattenhofer</Trans>
                            </cite>
                        </Blockquote.Caption>
                    </Blockquote.Root>
                </Section>

                <Section
                    title={
                        <Trans>
                            Publication / Presentation as a Researcher
                        </Trans>
                    }
                    id={sectionIds.publication}
                >
                    <List.Root>
                        <List.Item>
                            Daiki Okayama, Yuya Higashikawa, and Shuichi
                            Miyazaki, "Online Exploration of Grid Graphs with
                            Multiple Searchers", In Proceedings of the 16th
                            Annual Meeting of Asian Association for Algorithms
                            and Computation (AAAC 2025), May 2025. Available at{" "}
                            <Link href="https://conference.cs.cityu.edu.hk/aaac2025/abstract/AAAC_2025_paper_12.pdf">
                                cityu.edu.hk
                            </Link>
                            .
                        </List.Item>
                    </List.Root>
                </Section>

                <Section title={<Trans>Links</Trans>} id={sectionIds.links}>
                    <List.Root>
                        <List.Item>
                            <Link
                                href="https://github.com/okayama-daiki"
                                target="_blank"
                            >
                                <Trans>GitHub</Trans>
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link
                                href="https://www.linkedin.com/in/daikiokayama/"
                                target="_blank"
                            >
                                <Trans>LinkedIn</Trans>
                            </Link>
                        </List.Item>
                        <List.Item>
                            <Link
                                href="https://www.slideshare.net/DaikiOkayama"
                                target="_blank"
                            >
                                <Trans>SlideShare</Trans>
                            </Link>
                        </List.Item>
                    </List.Root>
                </Section>

                <Section title={<Trans>Contact</Trans>} id={sectionIds.contact}>
                    <Text>
                        <Trans>
                            Please send me a message through my{" "}
                            <Link
                                href="https://www.linkedin.com/in/daikiokayama/"
                                target="_blank"
                            >
                                LinkedIn
                            </Link>{" "}
                            page, or email found in my recent papers. I am
                            always open to discussing new ideas and
                            opportunities.
                        </Trans>
                    </Text>
                </Section>
            </Stack>

            <Footer />
        </Container>
    );
}
