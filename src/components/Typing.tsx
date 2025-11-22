import { Box, Icon, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import "@fontsource/sacramento/index.css";
import { LuChevronsDown } from "react-icons/lu";
import { getGreetingMessage, updateVisitorData } from "@/utils/visitor";

export default function Typing() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    updateVisitorData();
    setGreetingMessage(getGreetingMessage());
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    if (!spanRef.current || !greetingMessage) return;

    const typed = new Typed(spanRef.current, {
      strings: [greetingMessage, "I'm Daiki Okayama."],
      typeSpeed: 40,
      backSpeed: 50,
      onComplete: (self) => {
        self.cursor.remove();
      },
    });

    return () => {
      typed.destroy();
    };
  }, [greetingMessage]);

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
