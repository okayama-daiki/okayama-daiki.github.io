import { Heading, Link, Separator, Stack } from "@chakra-ui/react";

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack color="fg.muted" lineHeight="tall" paddingY="2" id={convertToAnchorId(title)}>
      {/* gap="0" is needed to remove the default margin between Heading and Separator */}
      <Stack gap="0">
        <Link href={`#${convertToAnchorId(title)}`} variant="plain" _hover={{ textDecoration: "none" }}>
          <Heading fontWeight="bold" color="fg">
            {title}
          </Heading>
        </Link>
        <Separator />
      </Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
}

/**
 * Convert a string to a hyphenated lowercase string.
 * This is used to create anchor IDs for headings.
 * @param s
 * @return string
 * @example
 * convertToAnchorId("Hello World") // "hello-world"
 * convertToAnchorId("Who am I?") // "who-am-i"
 */
const convertToAnchorId = (s: string): string => {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};
