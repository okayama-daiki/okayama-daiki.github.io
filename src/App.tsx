import { Spacer } from "@chakra-ui/react";

import Typing from "@/components/Typing";
import Content from "./components/Content";

export default function App() {
  return (
    <>
      <Typing />
      <Spacer height={8} />
      <Content />
    </>
  );
}
