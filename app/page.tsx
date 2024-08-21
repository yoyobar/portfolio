import About from '@/components/about';
import Archive from '@/components/archive';
import Header from '@/components/header';
import Intro from '@/components/intro';
import ScrollController from '@/components/ScrollController';
import Skill from '@/components/skill';

export default function Home() {
    return (
        <>
            <div className="font-pretendard">
                <ScrollController />
                <Header />
                <Intro />
                <About />
                <Skill />
                <Archive />
            </div>
            <div className="scroll-end"></div>
        </>
    );
}
