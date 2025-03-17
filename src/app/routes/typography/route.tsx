import styles from '../../../components/CustomTable/CustomTable.module.css';
import { Box, Container, Flex, Heading, Link, Text } from '@radix-ui/themes';
import {
  accentColors,
  textPropDefs,
} from '@radix-ui/themes/dist/esm/props/index.js';

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function TypographyPage() {
  return (
    <Container px="6" py="4" size="4">
      <Flex direction="column" gap="4" mb="8">
        <Heading>Typography</Heading>

        <Heading size="4">Text</Heading>
        <Box style={{ width: 'calc(760px * var(--scaling))' }}>
          <Text color="gray">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </Box>

        <Box style={{ width: 'calc(760px * var(--scaling))' }}>
          <Text color="gray" highContrast>
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </Box>

        <Heading size="4">Link</Heading>
        <Link href="#">Sign up</Link>

        <Heading size="4">All colors</Heading>
        <Box style={{ width: 'calc(760px * var(--scaling))' }}>
          <table
            className={styles.CustomTable}
            style={{ whiteSpace: 'nowrap' }}
          >
            <tbody>
              {accentColors.map((color) => (
                <tr key={color} style={{ verticalAlign: 'baseline' }}>
                  <td>{upperFirst(color)}</td>
                  <td>
                    <Text color={color} mr="4">
                      The quick brown fox jumps over the lazy dog
                    </Text>
                    <Text color={color} highContrast>
                      The quick brown fox jumps over the lazy dog
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        <Heading size="4">All sizes</Heading>
        <Flex direction="column" gap="4" style={{ whiteSpace: 'nowrap' }}>
          {textPropDefs.size.values.map((size) => (
            <Flex align="center" key={size}>
              <Box flexShrink="0" style={{ width: 80 }}>
                <Text color="gray" size="1">
                  Size {size}
                </Text>
              </Box>
              <Text size={size}>
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
          ))}
        </Flex>

        <Heading size="4">All weights</Heading>
        <table className={styles.CustomTable} style={{ whiteSpace: 'nowrap' }}>
          <tbody>
            {textPropDefs.weight.values.map((weight) => (
              <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                <td>{upperFirst(weight)}</td>
                <td style={{ textAlign: 'left' }}>
                  <Text weight={weight}>
                    The quick brown fox jumps over the lazy dog
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
    </Container>
  );
}
