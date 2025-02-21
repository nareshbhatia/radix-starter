import styles from './NavLeft.module.css';
import { Text } from '@radix-ui/themes';

export function NavLeft() {
  return (
    <nav className={styles.nav}>
      <Text weight="bold">Radix Starter</Text>
    </nav>
  );
}
