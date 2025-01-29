import { RootLayout } from './app/root';
import { HomePage } from './app/routes/home/route';
import { RoutePath } from './utils/RoutePath';
import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePath.Home,
        element: <HomePage />,
      },
    ],
  },
];
