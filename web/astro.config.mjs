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
      sidebar: [
        {
          label: 'FIT Intro',
          autogenerate: { directory: 'fit-intro' },
        },
        {
          label: 'Help',
          items: [
            { label: 'Overview', slug: 'help' },
            {
              label: 'Getting Started',
              autogenerate: { directory: 'getting-started' },
            },
            {
              label: 'Writing',
              autogenerate: { directory: 'writing' },
            },
            {
              label: 'Publishing',
              autogenerate: { directory: 'publishing' },
            },
            {
              label: 'Search',
              autogenerate: { directory: 'help/search' },
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
