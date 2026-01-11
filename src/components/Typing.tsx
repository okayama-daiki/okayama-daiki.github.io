import { Box, Icon, VStack } from "@chakra-ui/react";
import { defineMessage } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import "@fontsource/sacramento/index.css";
import { LuChevronsDown } from "react-icons/lu";
import { updateAndGetGreetingMessage } from "@/utils/visitor";

const NAME_MESSAGE = defineMessage({
  id: "typing.name",
  message: "I'm Daiki Okayama.",
});

export default function Typing() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [greetingMessage] = useState(() => updateAndGetGreetingMessage());
  const { i18n } = useLingui();

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    if (!spanRef.current) return;

    const typed = new Typed(spanRef.current, {
      strings: [greetingMessage, i18n._(NAME_MESSAGE)],
      typeSpeed: 40,
      backSpeed: 50,
      onComplete: (self) => {
        self.cursor.remove();
      },
    });

    return () => {
      typed.destroy();
    };
  }, [greetingMessage, i18n]);

  return (
    <VStack height="100dvh" justifyContent="center" alignItems="center">
      <Box fontFamily="sacramento">
        <span ref={spanRef} style={{ fontSize: "2.2rem" }} />
      </Box>
      <Icon
        size="xl"
        strokeWidth={1}
        animation="bounce 1s 4s ease-in-out infinite, fade-in 1s 4s forwards"
        opacity={0}
        onClick={scrollDown}
        cursor="pointer"
      >
        <LuChevronsDown />
      </Icon>
    </VStack>
  );
}
