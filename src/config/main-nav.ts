import { RoutePath } from './RoutePath';

export interface NavItem {
  title: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  {
    title: 'Colors',
    href: RoutePath.Colors,
  },
  {
    title: 'Typography',
    href: RoutePath.Typography,
  },
  {
    title: 'Buttons',
    href: RoutePath.Buttons,
  },
  {
    title: 'Kitchen Sink',
    href: RoutePath.KitchenSink,
  },
];
