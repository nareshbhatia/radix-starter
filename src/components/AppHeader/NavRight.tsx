import { DensityToggle } from './DensityToggle';
import { ModeToggle } from './ModeToggle';
import styles from './NavLeft.module.css';

export function NavRight() {
  return (
    <nav className={styles.nav}>
      <ModeToggle />
      <DensityToggle />
    </nav>
  );
}
