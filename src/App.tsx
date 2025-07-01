import { Spacer } from "@chakra-ui/react";

import Content from "@/components/Content";
import Typing from "@/components/Typing";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <Typing />
      <Spacer height={8} />
      <Content />
      <Toaster />
    </>
  );
}
