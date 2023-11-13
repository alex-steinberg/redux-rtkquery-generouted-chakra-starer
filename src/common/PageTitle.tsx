import { Box, Heading } from "@chakra-ui/react"
import React, { FC, ReactNode } from "react"

type PageTitleProps = {
  children: React.ReactNode
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <Heading size="lg" as="h1" px={4} mb={6} mt={8}>
      {children}
    </Heading>
  )
}

export default PageTitle
