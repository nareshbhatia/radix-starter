import styles from './AppHeader.module.css';
import { MainNav } from './MainNav';
import { NavRight } from './RightNav';
import { Container, Flex } from '@radix-ui/themes';

export function AppHeader() {
  return (
    <header>
      <Container className={styles.container} px="6" size="4">
        <Flex align="center" justify="between">
          <MainNav />
          <NavRight />
        </Flex>
      </Container>
    </header>
  );
}
