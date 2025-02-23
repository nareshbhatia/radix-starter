import { AppHeader } from '../components/AppHeader';
import { Flex } from '@radix-ui/themes';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <Flex direction="column" minHeight="100vh" position="relative">
      <AppHeader />
      <Outlet />
    </Flex>
  );
}
