import { Center, useColorModeValue } from "@chakra-ui/react";

import type { ReactNode } from "react";

interface TodoCardProps {
  children: ReactNode;
}

export const TodoCard = ({ children }: TodoCardProps) => {
  const cardBackgroundColor = useColorModeValue("gray.200", "gray.800");
  return (
    <Center
      paddingX={{ base: "0", sm: "4" }}
      paddingY={{ base: "0", sm: "4" }}
      flex={{ base: "auto", sm: "initial" }}
      borderRadius={{ base: "0rem", sm: "2rem" }}
      backgroundColor={cardBackgroundColor}
    >
      {children}
    </Center>
  );
};

export default TodoCard;
