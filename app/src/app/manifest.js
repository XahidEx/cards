import { siteConfig } from '@/config/site';

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: 'Cards',
    icons: [
      { src: '/favicon.ico', type: 'image/x-icon', sizes: '16x16 32x32' },
      { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      { src: '/icon-192-maskable.png', type: 'image/png', sizes: '192x192', purpose: 'maskable' },
      { src: '/icon-512-maskable.png', type: 'image/png', sizes: '512x512', purpose: 'maskable' },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
