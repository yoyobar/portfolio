'use client';
import { IoIosLink } from 'react-icons/io';
import * as constData from '@/app/config/const';
import SkillList from './SkillList';
import { coding } from '@/util/fonts';

const Skill = () => {
    const scrollHandler = () => {
        document.querySelector('.skill-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="relative w-full py-32 flex justify-center items-center bg-slate-900 h-fit">
                <div className="px-10 mb-20 max-w-[1200px] w-full flex flex-col items-center justify-center">
                    <div className="flex mb-10 gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-gray-200 hover:text-white" />
                        </div>
                        <div className="text-[50px] font-extrabold border-b border-b-white text-white">SKILLS</div>
                    </div>
                    <SkillList title="Front-End" data={constData.skillDataFE} />

                    <SkillList title="Back-End" data={constData.skillDataBE} />
                    <SkillList title="Version Control" data={constData.skillDataVC} />

                    <SkillList title="Communication" data={constData.skillDataCM} />

                    <SkillList title="Deployment" data={constData.skillDataDP} />
                </div>
                <div className="select-none hidden 2xl:flex absolute text-[200px] -rotate-[-14deg] -left-10 -bottom-14 text-white opacity-50 gap-2">
                    <span className={coding.className}>
                        S<span className="text-teal-500">K</span>ILLS
                    </span>
                    <span className="animate-flick">|</span>
                </div>
            </div>
            <div className="archive-container"></div>
        </>
    );
};

export default Skill;
