import { Box, Icon, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import "@fontsource/sacramento/index.css";
import { LuChevronsDown } from "react-icons/lu";

export default function Typing() {
  const spanRef = useRef<HTMLSpanElement>(null);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    if (!spanRef.current) return;

    const typed = new Typed(spanRef.current, {
      strings: ["Hello, World!", "I'm Daiki Okayama."],
      typeSpeed: 40,
      backSpeed: 50,
      onComplete: (self) => {
        self.cursor.remove();
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <VStack width="100vw" height="100dvh" justifyContent="center" alignItems="center">
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
