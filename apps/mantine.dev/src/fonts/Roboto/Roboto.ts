import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    { path: './Roboto-Regular.ttf', weight: '700', style: 'normal' },
    { path: './Roboto-Bold.ttf', weight: '900', style: 'normal' },
    // { path: './RobotoMono-SemiBold.ttf', weight: '700', style: 'normal' },
    // { path: './RobotoMono-Bold.ttf', weight: '900', style: 'normal' },
  ],
});
