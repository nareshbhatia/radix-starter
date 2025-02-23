import { Icons } from '../Icons';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={handleClick} variant="ghost">
      {theme === 'light' ? <Icons.moon /> : <Icons.sun />}
    </IconButton>
  );
}
