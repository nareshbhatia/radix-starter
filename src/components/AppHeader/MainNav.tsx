import type { NavItem } from '../../config/main-nav';
import { mainNavItems } from '../../config/main-nav';
import { siteConfig } from '../../config/site';
import { Icons } from '../Icons';
import { Flex, TabNav, Text } from '@radix-ui/themes';
import { NavLink, useLocation } from 'react-router';

function isNavItemActive(item: NavItem, pathname: string) {
  return (
    // item.href === '/' is a special case, matching only if pathname is exactly '/'
    (item.href === '/' && pathname === '/') ||
    (item.href !== '/' && pathname.startsWith(item.href))
  );
}

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
          <TabNav.Link
            active={isNavItemActive(item, pathname)}
            asChild
            key={item.href}
          >
            <NavLink to={item.href}>{item.title}</NavLink>
          </TabNav.Link>
        ))}
      </TabNav.Root>
    </Flex>
  );
}
