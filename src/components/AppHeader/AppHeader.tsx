import styles from './AppHeader.module.css';
import { NavLeft } from './NavLeft';
import { NavRight } from './NavRight';
import { Container, Flex } from '@radix-ui/themes';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.container} px="6" size="4">
        <Flex align="center" justify="between">
          <NavLeft />
          <NavRight />
        </Flex>
      </Container>
    </header>
  );
}
