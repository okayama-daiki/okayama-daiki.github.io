import { HStack, IconButton, Text } from "@chakra-ui/react";
import { useLingui } from "@lingui/react/macro";
import { CiDark, CiLight } from "react-icons/ci";
import { useColorMode } from "@/components/ui/color-mode";

export default function Footer() {
  const { i18n } = useLingui();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" mt={8}>
      {/* We need ml="-3" because the IconButton has a default margin-left */}
      <HStack ml="-3" gap="0">
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          size="md"
          variant="ghost"
          _hover={{ bg: "none" }}
        >
          {colorMode === "light" ? <CiDark /> : <CiLight />}
        </IconButton>
        <IconButton
          aria-label="Toggle language"
          size="md"
          variant="ghost"
          _hover={{ bg: "none" }}
          onClick={() => {
            if (i18n.locale === "en") {
              i18n.activate("ja");
            } else {
              i18n.activate("en");
            }
          }}
        >
          {i18n.locale === "en" ? "ja" : "en"}
        </IconButton>
        {/* <Link href="https://coff.ee/daikiokayama" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="Like this site" size="md" variant="ghost">
            <CiCoffeeCup />
          </IconButton>
        </Link> */}
      </HStack>

      <HStack color="fg.muted">
        <Text fontSize="sm">© {new Date().getFullYear()} Daiki Okayama</Text>
      </HStack>
    </HStack>
  );
}
