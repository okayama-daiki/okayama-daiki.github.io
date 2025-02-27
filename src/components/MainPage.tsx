import { Link, Divider, Spacer } from "@nextui-org/react";
import { Mail } from "@geist-ui/icons";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section className="my-10">
      <SubSection title={t("whoAmI.title")}>
        <p className="mb-2">
          {t("whoAmI.description")}{" "}
          <Link
            href="https://www.dakken.co.jp"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Dakken LLC.
          </Link>
          {t("whoAmI.company")}{" "}
          <Link
            href="https://www.u-hyogo.ac.jp/english/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            {t("whoAmI.university.name")}
          </Link>
          {t("whoAmI.university.details")}{" "}
          <Link
            href="https://u-hyogo.info/en/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            {t("whoAmI.university.graduateSchool.name")}
          </Link>
          {t("whoAmI.university.graduateSchool.details")}
        </p>

        <Spacer y={5} />

        <p className="mb-2">{t("whoAmI.interests.title")}</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>{t("whoAmI.interests.items.languages")}</li>
          <li>{t("whoAmI.interests.items.designPatterns")}</li>
          <li>
            <s>
              <b>{t("whoAmI.interests.items.humor")}</b>
            </s>
          </li>
        </ul>
      </SubSection>

      <SubSection title={t("projects.title")}>
        <p className="mb-2">{t("projects.description")}</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>{t("projects.items.videoSystem")}</li>
          <li>[WIP] {t("projects.items.selfCareApp")}</li>
        </ul>
      </SubSection>

      <SubSection title={t("skills.title")}>
        <p className="mb-2">{t("skills.description")}</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <b>{t("skills.items.git.name")}</b> -{" "}
            {t("skills.items.git.description")}
          </li>
          <li>
            <b>{t("skills.items.python.name")}</b> -{" "}
            {t("skills.items.python.description")}
          </li>
        </ul>
      </SubSection>

      <SubSection title={t("works.title")}>
        <p className="mb-2">{t("works.description")}</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <Link
              href="https://snake-game.daiki.dev/"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {t("works.items.snakeGame")}
            </Link>
          </li>
          <li>
            {t("works.items.github.text")}{" "}
            <Link
              href="https://github.com/okayama-daiki"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {t("works.items.github.link")}
            </Link>
          </li>
        </ul>
      </SubSection>

      <SubSection title={t("links.title")}>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <Link
              href="https://github.com/okayama-daiki"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {t("links.items.github")}
            </Link>
          </li>
          <li>
            <Link
              href="https://ja.stackoverflow.com/users/51374"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {t("links.items.stackoverflow")}
            </Link>
          </li>
          <li>
            <Link
              href="https://zenn.dev/daiki_okayama"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {t("links.items.zenn")}
            </Link>
          </li>
          <li>
            <Link
              href="https://qiita.com/daiki-okayama"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {t("links.items.qiita")}
            </Link>
          </li>
        </ul>
      </SubSection>

      <SubSection title={t("contact.title")}>
        <p className="mb-2">{t("contact.description")}</p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Link
              href="mailto:fa21k015@guh.u-hyogo.ac.jp"
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              <Mail size="16px" />
              {t("contact.email")}
            </Link>
          </li>
        </ul>
      </SubSection>
    </section>
  );
}
