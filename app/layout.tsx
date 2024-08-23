import type { Metadata } from 'next';
import { metadata as meta } from './config/metadata';
import './globals.css';
import { pretendard } from '@/util/fonts';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

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
                <Toaster />
                <Header />
                <div className="main_root w-full h-full overflow-x-hidden">{children}</div>
                <div id="portal_root"></div>
            </body>
        </html>
    );
}
