import { mainNavItems } from '../../config/main-nav';
import { siteConfig } from '../../config/site';
import { Icons } from '../Icons';
import { Flex, TabNav, Text } from '@radix-ui/themes';
import { NavLink, useLocation } from 'react-router';

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <Flex gap={{ initial: '4', lg: '6' }}>
      <Flex align="center" gapX="2">
        <Icons.frame />
        <Text weight="bold">{siteConfig.name}</Text>
      </Flex>
      <TabNav.Root>
        {mainNavItems.map((item) => (
          <TabNav.Link active={pathname === item.href} asChild key={item.href}>
            <NavLink to={item.href}>{item.title}</NavLink>
          </TabNav.Link>
        ))}
      </TabNav.Root>
    </Flex>
  );
}
