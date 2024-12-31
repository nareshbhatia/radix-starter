import { routes } from './routes';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
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
    <ThemeProvider attribute="class">
      <Theme accentColor="blue" grayColor="auto" radius="medium">
        <RouterProvider router={router} />
      </Theme>
    </ThemeProvider>
  </StrictMode>,
);
