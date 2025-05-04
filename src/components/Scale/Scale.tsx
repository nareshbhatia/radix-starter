import * as Colors from '@radix-ui/colors';
import { Box, Flex, Text } from '@radix-ui/themes';

// pulling the first scale and getting the keys from it
const colorKeys = Object.keys(Object.values(Colors)[0]);

interface ColorScaleGroupProps {
  children: React.ReactNode;
}

export function ColorScaleGroup({ children }: ColorScaleGroupProps) {
  return (
    <>
      <Flex style={{ gap: 1 }}>
        <Box height="24px" style={{ width: 140 }} />
        {colorKeys.map((key, i) => (
          <Box flexGrow="0" flexShrink="1" key={key} width="48px">
            <Text align="center" as="div" color="gray" size="1">
              {i + 1}
            </Text>
          </Box>
        ))}
        <Box />
      </Flex>
      {children}
    </>
  );
}

interface ColorScaleProps {
  label: string;
  name: keyof typeof Colors;
}

export function ColorScale({ label, name }: ColorScaleProps) {
  // eslint-disable-next-line import/namespace
  const scale = Colors[name];

  const isAlpha = name.endsWith('A');
  const isDarkAlpha = name.endsWith('DarkA');
  const isWhiteA = name.endsWith('whiteA');
  const isBlackA = name.endsWith('blackA');

  return (
    <Flex style={{ width: 'calc(100% - 25px)', gap: 1, marginBottom: 1 }}>
      <Flex align="center" height="32px" style={{ width: 140 }}>
        <Text color="gray" size="1">
          {label}
        </Text>
      </Flex>
      {Object.values(scale).map((value, i) => (
        <Box
          flexShrink="1"
          height="32px"
          key={i}
          style={{
            backgroundColor: isDarkAlpha
              ? Colors.grayDark.gray1
              : isAlpha
                ? 'white'
                : 'transparent',

            // Show transparency grid for whiteA and blackA
            ...(isBlackA && {
              backgroundColor: 'white',
              backgroundSize: '16px 16px',
              backgroundPosition: '0px 0px, 8px 0px, 8px -8px, 0px 8px',
              backgroundImage: `
											linear-gradient(45deg, #f8f8f8 25%, transparent 25%),
											linear-gradient(135deg, #f8f8f8 25%, transparent 25%),
											linear-gradient(45deg, transparent 75%, #f8f8f8 75%),
											linear-gradient(135deg, transparent 75%, #f8f8f8 75%)`,
            }),
            ...(isWhiteA && {
              backgroundColor: '#181818',
              backgroundSize: '16px 16px',
              backgroundPosition: '0px 0px, 8px 0px, 8px -8px, 0px 8px',
              backgroundImage: `
											linear-gradient(45deg, #222222 25%, transparent 25%),
											linear-gradient(135deg, #222222 25%, transparent 25%),
											linear-gradient(45deg, transparent 75%, #222222 75%),
											linear-gradient(135deg, transparent 75%, #222222 75%)`,
            }),
          }}
          width="48px"
        >
          <Box
            height="100%"
            key={i}
            style={{ backgroundColor: value }}
            width="100%"
          />
        </Box>
      ))}
    </Flex>
  );
}
