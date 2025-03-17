import { ColorScale, ColorScaleGroup } from '../../../components/Scale/Scale';
import { Container, Flex, Heading, Text } from '@radix-ui/themes';

export function ColorsPage() {
  return (
    <Container px="6" py="4" size="4">
      <Flex direction="column" gap="4" mb="8">
        <Heading>Colors</Heading>

        <Heading size="4">Slate</Heading>
        <ColorScaleGroup>
          <ColorScale label="Slate" name="slate" />
          <ColorScale label="Slate Alpha" name="slateA" />
          <ColorScale label="Slate Dark" name="slateDark" />
          <ColorScale label="Slate Dark Alpha" name="slateDarkA" />
        </ColorScaleGroup>

        <Heading size="4">Blue</Heading>
        <ColorScaleGroup>
          <ColorScale label="Blue" name="blue" />
          <ColorScale label="Blue Alpha" name="blueA" />
          <ColorScale label="Blue Dark" name="blueDark" />
          <ColorScale label="Blue Dark Alpha" name="blueDarkA" />
        </ColorScaleGroup>

        <Heading size="4">Red</Heading>
        <ColorScaleGroup>
          <ColorScale label="Red" name="red" />
          <ColorScale label="Red Alpha" name="redA" />
          <ColorScale label="Red Dark" name="redDark" />
          <ColorScale label="Red Dark Alpha" name="redDarkA" />
        </ColorScaleGroup>

        <Heading size="4">Yellow</Heading>
        <ColorScaleGroup>
          <ColorScale label="Yellow" name="yellow" />
          <ColorScale label="Yellow Alpha" name="yellowA" />
          <ColorScale label="Yellow Dark" name="yellowDark" />
          <ColorScale label="Yellow Dark Alpha" name="yellowDarkA" />
        </ColorScaleGroup>

        <Heading size="4">Green</Heading>
        <ColorScaleGroup>
          <ColorScale label="Green" name="green" />
          <ColorScale label="Green Alpha" name="greenA" />
          <ColorScale label="Green Dark" name="greenDark" />
          <ColorScale label="Green Dark Alpha" name="greenDarkA" />
        </ColorScaleGroup>

        <Heading size="4">Overlays</Heading>
        <Text>
          These scales are designed for overlays and don’t change across light
          and dark theme.
        </Text>
        <ColorScaleGroup>
          <ColorScale label="Black Alpha" name="blackA" />
          <ColorScale label="White Alpha" name="whiteA" />
        </ColorScaleGroup>
      </Flex>
    </Container>
  );
}
