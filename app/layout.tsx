import type { Metadata } from 'next';
import { metadata as meta } from './config/metadata';
import './globals.css';
import { pretendard } from '@/util/fonts';

export const metadata: Metadata = {
    metadataBase: new URL(meta.url),
    manifest: meta.manifest,
    icons: meta.icons,
    title: meta.title,
    description: meta.description,
    creator: meta.author.creator,
    openGraph: meta.openGraph,
    twitter: meta.twitter,

    alternates: {
        canonical: meta.canonical,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${pretendard.className}`}>
            <body>
                <div className="main_root">{children}</div>
                <div className="portal_root"></div>
            </body>
        </html>
    );
}
