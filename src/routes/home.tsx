import { Button, Container, Flex, Heading } from '@radix-ui/themes';

export function HomePage() {
  return (
    <Container px="6" py="4" size="4">
      <Flex direction="column" gap="4">
        <Heading>Buttons</Heading>
        <Flex gap="4">
          <Button>Next</Button>
          <Button highContrast>Next</Button>
          <Button color="gray">Next</Button>
          <Button color="gray" highContrast>
            Next
          </Button>
          <Button disabled>Next</Button>
          <Button loading>Next</Button>
        </Flex>
      </Flex>
    </Container>
  );
}
