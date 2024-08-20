export const metadata = {
    url: 'https://portfolio.yoyobar.xyz',
    manifest: '/favicon/site.webmanifest',
    author: {
        name: 'yoyobar',
        contacts: {
            email: 'barwait@naver.com',
        },
        creator: 'Minsu Kim',
    },
    title: `KMS's Portfolio`,
    description: '개발자 김민수의 포트폴리오 페이지 입니다.',
    icons: {
        icon: [
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                url: '/favicon/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon/favicon-16x16.png',
            },
        ],
    },
    since: 2024,
    canonical: 'https://portfolio.yoyobar.xyz/',
    openGraph: {
        url: 'https://portfolio.yoyobar.xyz/',
        siteName: `KMS's Portfolio`,
        images: ['/img/template_og_main.webp'],
        description: '개발자 김민수의 포트폴리오 페이지 입니다.',
        type: 'article',
        authors: ['Minsu Kim', 'yoyobar'],
    },
    twitter: {
        card: 'summary_large_image',
        title: `KMS's Portfolio`,
        description: '개발자 김민수의 포트폴리오 페이지 입니다.',
        creator: 'yoyobar',
        images: ['/img/template_og_main.webp'],
    },
};
