import styles from './AppHeader.module.css';
import { Container, Text } from '@radix-ui/themes';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.container} px="6" size="4">
        <Text weight="bold">Radix Starter</Text>
      </Container>
    </header>
  );
}
