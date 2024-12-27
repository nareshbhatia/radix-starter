import { routes } from './routes';
import { Theme } from '@radix-ui/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './reset.css';
import '@radix-ui/themes/styles.css';
import './overrides.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <Theme
      accentColor="indigo"
      appearance="dark"
      grayColor="auto"
      radius="medium"
      scaling="100%"
    >
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
);
