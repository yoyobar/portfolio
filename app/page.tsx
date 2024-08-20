import About from '@/components/about';
import Header from '@/components/header';
import Skill from '@/components/skill';

export default function Home() {
    return (
        <div className="h-[200vh]">
            <Header />
            <About />
            <Skill />
        </div>
    );
}
