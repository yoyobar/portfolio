import About from '@/components/about';
import Archive from '@/components/archive';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Intro from '@/components/intro';
import Project from '@/components/project';
import ScrollController from '@/components/ScrollController';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    return (
        <>
            <div className="font-pretendard">
                <div className="scroll-end"></div>
                <Intro />
                <About />
                <Archive />
                <Project />
                <Contact />
                <Footer />
                <Analytics />
            </div>
            <ScrollController />
        </>
    );
}
