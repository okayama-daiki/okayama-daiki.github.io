import { HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { CiCoffeeCup, CiDark, CiLight } from "react-icons/ci";

import { useColorMode } from "@/components/ui/color-mode";

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" mt={8}>
      <HStack>
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          size="md"
          variant="ghost"
        >
          {colorMode === "light" ? <CiDark /> : <CiLight />}
        </IconButton>
        <Link
          href="https://coff.ee/daikiokayama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="Like this site" size="md" variant="ghost">
            <CiCoffeeCup />
          </IconButton>
        </Link>
      </HStack>

      <HStack color="fg.muted">
        <Text fontSize="sm">© {new Date().getFullYear()} Daiki Okayama</Text>
      </HStack>
    </HStack>
  );
}
