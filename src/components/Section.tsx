import { Heading, Separator, Stack } from "@chakra-ui/react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack color="fg.muted" paddingY="2">
      {/* gap="0" is needed to remove the default margin between Heading and Separator */}
      <Stack gap="0">
        <Heading size="lg" fontWeight="bold" color="fg">
          {title}
        </Heading>
        <Separator />
      </Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
}
