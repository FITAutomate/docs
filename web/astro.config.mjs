import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://fitautomate.com',
  integrations: [
    starlight({
      title: 'FIT Automate Docs',
      favicon: '/favicon.ico',
      description: 'FIT Automate documentation for practical procedures, product knowledge, and operating guidance.',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/FITAutomate' }],
      components: {
        Footer: './src/components/Footer.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/FITAutomate/docs/edit/main/web/',
      },
      head: [
        {
          tag: 'script',
          attrs: { defer: true, src: '/fit-sidebar-accordion.js' },
        },
      ],
      sidebar: [
        {
          label: 'FIT',
          collapsed: true,
          autogenerate: { directory: 'fit' },
        },
        {
          label: 'Finance',
          collapsed: true,
          autogenerate: { directory: 'finance' },
        },
        {
          label: 'Marketing',
          collapsed: true,
          autogenerate: { directory: 'marketing' },
        },
        {
          label: 'Operations',
          collapsed: true,
          autogenerate: { directory: 'operations' },
        },
        {
          label: 'Help',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'help' },
            {
              label: 'Getting Started',
              collapsed: true,
              autogenerate: { directory: 'help/getting-started' },
            },
            {
              label: 'Writing',
              collapsed: true,
              autogenerate: { directory: 'help/writing' },
            },
            {
              label: 'Publishing',
              collapsed: true,
              autogenerate: { directory: 'help/publishing' },
            },
            {
              label: 'Search',
              collapsed: true,
              autogenerate: { directory: 'help/search' },
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
