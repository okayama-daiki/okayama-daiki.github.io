import { Link, Divider, Spacer } from "@nextui-org/react";
import { Mail } from "@geist-ui/icons";

const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <Divider className="mb-4" />
      {children}
      <Spacer y={10} />
    </>
  );
};

export default function MainPage() {
  return (
    <section className="my-10">
      <SubSection title="Who am I?">
        <p className="mb-2">
          I am a software engineer in Japan. Currently I am working for{" "}
          <Link
            href="https://github.com/Dakken-LLC"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Dakken LLC.
          </Link>
          , a data analysis and software development company. I am also
          attending{" "}
          <Link
            href="https://www.u-hyogo.ac.jp/english/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            the University of Hyogo
          </Link>
          , majoring in online exploration algorithms. I will receive a BE in
          March 2025 and will be admitted to{" "}
          <Link
            href="https://u-hyogo.info/en/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            the Graduate School of Information Science, University of Hyogo
          </Link>
          , in April.
        </p>

        <Spacer y={5} />

        <p className="mb-2">I am interested in:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Specifications of programming languages</li>
          <li>Programming paradigms and Design patterns</li>
          <li>
            <s>
              <b>Humor and comedy</b>
            </s>
          </li>
        </ul>
      </SubSection>

      <SubSection title="Software Development Projects">
        <p className="mb-2">
          I have been working on some software development projects. I mainly
          use Python and TypeScript for development, and I am also interested in
          Rust and Go.
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Building a video on-demand system for <i>reskilling</i>
          </li>
          <li>
            [WIP] Building a self-care application co-produced with local
            governments
          </li>
        </ul>
      </SubSection>

      <SubSection title="Skills">
        <p className="mb-2">
          I have experience in the following technologies and tools:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <b>Git</b> - version control system
          </li>
          <li>
            <b>Python</b> - programming language
          </li>
        </ul>
      </SubSection>

      <SubSection title="Works">
        <p className="mb-2">
          In private, I write articles and create software. Here are some of my
          works:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <Link
              href="https://snake-game.daiki.dev/"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Snake Game - Online PvP Snake Game
            </Link>
          </li>
          <li>
            etc... See{" "}
            <Link
              href="https://github.com/okayama-daiki"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              my GitHub
            </Link>
          </li>
        </ul>
      </SubSection>

      <SubSection title="Link">
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <Link
              href="https://github.com/okayama-daiki"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://ja.stackoverflow.com/users/51374"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Stack Overflow (ja)
            </Link>
          </li>
          <li>
            <Link
              href="https://zenn.dev/daiki_okayama"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Zenn
            </Link>
          </li>
          <li>
            <Link
              href="https://qiita.com/daiki-okayama"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Qiita
            </Link>
          </li>
        </ul>
      </SubSection>

      <SubSection title="Contact">
        <p className="mb-2">
          If you have any questions or requests, please feel free to contact me.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Link
              href="mailto:fa21k015@guh.u-hyogo.ac.jp"
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              <Mail size="16px" />
              fa21k015[at]guh.u-hyogo.ac.jp
            </Link>
          </li>
        </ul>
      </SubSection>
    </section>
  );
}
