import { Center, Heading } from "@chakra-ui/react";

import { TodoCard } from "./components";
import "./index.css";

function App() {
  return (
    <Center minHeight="100vh">
      <TodoCard>
        <Heading
          position="relative"
          as="h1"
          fontWeight="black"
          bgClip="text"
          bgGradient="linear(to-l, var(--chakra-colors-cyan-600), var(--chakra-colors-cyan-500))"
          fontSize={{
            base: "3xl",
            sm: "4xl",
            md: "5xl",
          }}
        >
          WHAT TO DO
        </Heading>
      </TodoCard>
    </Center>
  );
}

export default App;
