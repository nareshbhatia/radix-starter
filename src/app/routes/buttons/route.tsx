import styles from '../../../components/CustomTable/CustomTable.module.css';
import { Box, Button, Container, Flex, Heading } from '@radix-ui/themes';
import {
  accentColors,
  buttonPropDefs,
} from '@radix-ui/themes/dist/esm/props/index.js';
import * as React from 'react';

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ButtonsPage() {
  return (
    <Container px="6" py="4" size="4">
      <Flex direction="column" gap="8">
        <Flex direction="column" gap="4">
          <Heading>Theme Colors</Heading>
          <Box maxWidth="640px">
            <table className={styles.CustomTable}>
              <thead>
                <tr>
                  <th />
                  <th colSpan={2}>Accent</th>
                  <th colSpan={2}>Gray</th>
                  <th>Disabled</th>
                  <th>Loading</th>
                </tr>
              </thead>
              <tbody>
                {buttonPropDefs.variant.values.map((variant) => (
                  <tr key={variant}>
                    <td>{upperFirst(variant)}</td>
                    <td>
                      <Button variant={variant}>Next</Button>
                    </td>
                    <td>
                      <Button highContrast variant={variant}>
                        Next
                      </Button>
                    </td>
                    <td>
                      <Button color="gray" variant={variant}>
                        Next
                      </Button>
                    </td>
                    <td>
                      <Button color="gray" highContrast variant={variant}>
                        Next
                      </Button>
                    </td>
                    <td>
                      <Button disabled variant={variant}>
                        Next
                      </Button>
                    </td>
                    <td>
                      <Button loading variant={variant}>
                        Next
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Flex>

        <Flex direction="column" gap="4">
          <Heading>All Colors</Heading>
          <Box maxWidth="1024px">
            <table className={styles.CustomTable}>
              <thead>
                <tr>
                  <th />
                  {buttonPropDefs.variant.values.map((variant) => (
                    <th key={variant}>{upperFirst(variant)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {accentColors.map((color) => (
                  <tr key={color}>
                    <td>{upperFirst(color)}</td>
                    {buttonPropDefs.variant.values.map((variant) => (
                      <td key={variant}>
                        <Flex align="center" gap="4" justify="center">
                          <Button color={color} variant={variant}>
                            Next
                          </Button>
                          <Button color={color} highContrast variant={variant}>
                            Next
                          </Button>
                        </Flex>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Flex>

        <Flex direction="column" gap="4">
          <Heading>All Sizes</Heading>
          <Box maxWidth="640px">
            <table className={styles.CustomTable}>
              <thead>
                <tr>
                  <th />
                  {buttonPropDefs.radius.values.map((radius) => (
                    <th key={radius} style={{ textAlign: 'left' }}>
                      {radius === 'none' ? 'No radius' : upperFirst(radius)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {buttonPropDefs.variant.values.map((variant, index) => (
                  <React.Fragment key={variant}>
                    {index > 0 && (
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                    )}
                    {buttonPropDefs.size.values.map((size) => (
                      <tr key={size}>
                        <td>Size {size}</td>
                        {buttonPropDefs.radius.values.map((radius) => (
                          <td key={radius} style={{ textAlign: 'left' }}>
                            <Button
                              radius={radius}
                              size={size}
                              variant={variant}
                            >
                              Next
                            </Button>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
