import { DensityToggle } from './DensityToggle';
import { ModeToggle } from './ModeToggle';
import styles from './RightNav.module.css';

export function NavRight() {
  return (
    <nav className={styles.nav}>
      <ModeToggle />
      <DensityToggle />
    </nav>
  );
}
