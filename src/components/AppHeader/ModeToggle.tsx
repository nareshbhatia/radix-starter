import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={handleClick} variant="ghost">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
