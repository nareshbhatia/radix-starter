import {
  Blockquote,
  Code,
  Container,
  Em,
  Flex,
  Heading,
  Link,
  Quote,
  Strong,
  Text,
} from '@radix-ui/themes';

export function TypographyPage() {
  return (
    <Container px="6" py="4" size="4">
      <Flex direction="column" gap="4" mb="8">
        <Heading>Typography</Heading>

        <div>
          <Heading size="4">{`<Text>`}</Heading>
          <Text>
            <code>var(--gray-12)</code> (from <code>.radix-themes</code>)
            <br />
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </div>

        <div>
          <Heading size="4">{`<Text color="gray">`}</Heading>
          <code>var(--gray-11)</code> (step 11: low contrast text))
          <br />
          <Text color="gray">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </div>

        <div>
          <Heading size="4">{`<Text color="gray" highContrast>`}</Heading>
          <code>var(--gray-12)</code> (step 12: high contrast text))
          <br />
          <Text color="gray" highContrast>
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </div>

        <div>
          <Heading size="4">{`<Text color="blue">`}</Heading>
          <code>var(--accent-11)</code> (step 11: low contrast text))
          <br />
          <Text color="blue">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </div>

        <Heading size="4">Blockquote</Heading>
        <Blockquote>
          Perfect typography is certainly the most elusive of all arts.
          Sculpture in stone alone comes near it in obstinacy.
        </Blockquote>

        <Heading size="4">Code</Heading>
        <Code>console.log()</Code>

        <Heading size="4">Emphasis and Strong</Heading>
        <Text>
          The <Em>most</Em> important thing to remember is,{' '}
          <Strong>stay positive</Strong>.
        </Text>

        <Heading size="4">Link</Heading>
        <Link href="#">Sign up</Link>

        <Heading size="4">Quote</Heading>
        <Text>
          His famous quote,{' '}
          <Quote>
            Styles come and go. Good design is a language, not a style
          </Quote>
          , elegantly sums up Massimo’s philosophy of design.
        </Text>
      </Flex>
    </Container>
  );
}
