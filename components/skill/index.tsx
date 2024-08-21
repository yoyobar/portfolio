'use client';
import { IoIosLink } from 'react-icons/io';
import * as constData from '@/app/config/const';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillList from './SkillList';

const Skill = () => {
    const feRef = useRef(null);
    const scrollHandler = () => {
        document.querySelector('.skill-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const inViewFE = useInView(feRef, { once: true });

    return (
        <>
            <div className="w-full py-32 flex justify-center items-center bg-slate-900 h-fit">
                <div className="px-10 max-w-[1200px] w-full flex flex-col items-center justify-center">
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
            </div>
        </>
    );
};

export default Skill;
