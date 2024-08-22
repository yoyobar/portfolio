import About from '@/components/about';
import Archive from '@/components/archive';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Intro from '@/components/intro';
import Project from '@/components/project';
import ScrollController from '@/components/ScrollController';
import Skill from '@/components/skill';

export default function Home() {
    return (
        <>
            <div className="font-pretendard">
                <div className="scroll-end"></div>
                <Header />
                <Intro />
                <About />
                <Skill />
                <Archive />
                <Project />
                <Footer />
            </div>
            <ScrollController />
        </>
    );
}
