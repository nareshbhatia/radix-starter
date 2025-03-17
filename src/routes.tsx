import { RootLayout } from './app/root';
import { ButtonsPage } from './app/routes/buttons/route';
import { ColorsPage } from './app/routes/colors/route';
import { KitchenSinkPage } from './app/routes/kitchen-sink/route';
import { TypographyPage } from './app/routes/typography/route';
import { RoutePath } from './config/RoutePath';
import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePath.Colors,
        element: <ColorsPage />,
      },
      {
        path: RoutePath.Typography,
        element: <TypographyPage />,
      },
      {
        path: RoutePath.Buttons,
        element: <ButtonsPage />,
      },
      {
        path: RoutePath.KitchenSink,
        element: <KitchenSinkPage />,
      },
    ],
  },
];
