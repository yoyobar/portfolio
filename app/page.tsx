import About from '@/components/about';
import Archive from '@/components/archive';
import Header from '@/components/header';
import Skill from '@/components/skill';

export default function Home() {
    return (
        <div className="h-[200vh]">
            <Header />
            <About />
            <Skill />
            <Archive />
        </div>
    );
}
