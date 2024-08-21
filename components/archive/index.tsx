'use client';
import { coding } from '@/util/fonts';
import { FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { IoIosLink } from 'react-icons/io';
import { twMerge as tw } from 'tailwind-merge';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
const Archive = () => {
    const [githubHover, setGithubHover] = useState(false);
    const [blogHover, setBlogHover] = useState(false);

    const sectionRef = useRef(null);
    const inViewSection = useInView(sectionRef, { once: true });
    const scrollHandler = () => {
        document.querySelector('.archive-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const githubHandler = () => {
        window.open('https://github.com/yoyobar/');
    };
    const blogHandler = () => {
        window.open('https://wiki.yoyobar.xyz/');
    };

    return (
        <>
            <div className="relative w-full py-32 flex justify-center items-center bg-stone-900 h-fit">
                <div className="px-10 max-w-[1200px] w-full flex flex-col items-center justify-center mb-20">
                    <div className="flex mb-20 gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-gray-200 hover:text-white" />
                        </div>
                        <div className="text-[50px] font-extrabold border-b border-b-white text-white">Archives</div>
                    </div>

                    <div ref={sectionRef} className="flex flex-col lg:flex-row gap-10">
                        <motion.div
                            onMouseEnter={() => setGithubHover(true)}
                            onMouseLeave={() => setGithubHover(false)}
                            onClick={githubHandler}
                            whileHover={{ translateY: -5 }}
                            animate={{ opacity: inViewSection ? 1 : 0 }}
                            className="bg-white relative z-10 cursor-pointer select-none w-[400px] h-[315px] rounded-md p-4 px-8 flex flex-col gap-4"
                        >
                            <div className="flex gap-4 text-2xl items-center">
                                <FaGithub className="w-12 h-12" />
                                <div className={tw('text-3xl font-extrabold', coding.className)}>Github</div>
                            </div>
                            <div className={tw('text-sky-500', githubHover && 'underline')}>
                                https://github.com/yoyobar
                            </div>
                            <div className="text-lg">
                                <span className="font-bold">소스코드 저장소</span> <span>입니다.</span>
                            </div>
                            <ul className="flex items-center gap-4">
                                <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                                <div>OZ 코딩스쿨 수강 기간 동안 작성한 프로젝트</div>
                            </ul>
                            <ul className="flex items-center gap-4">
                                <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                                <div>개인적으로 공부하고 진행한 프로젝트</div>
                            </ul>
                            <ul className="flex items-center gap-4">
                                <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                                <div>공부하고 기록한 학습기록</div>
                            </ul>
                        </motion.div>
                        <motion.div
                            onMouseEnter={() => setBlogHover(true)}
                            onMouseLeave={() => setBlogHover(false)}
                            onClick={blogHandler}
                            animate={{ opacity: inViewSection ? 1 : 0 }}
                            whileHover={{ translateY: -5 }}
                            className="relative z-10 bg-white cursor-pointer select-none w-[400px] h-[315px] rounded-md p-4 px-8 flex flex-col gap-4"
                        >
                            <div className="flex gap-4 text-2xl items-center">
                                <SiNextdotjs className="w-12 h-12" />
                                <div className={tw('text-3xl font-extrabold', coding.className)}>Blog</div>
                            </div>
                            <div className={tw('text-sky-500', blogHover && 'underline')}>https://wiki.yoyobar.xyz</div>
                            <div className="text-lg">
                                <span className="font-bold">직접 제작한 블로그</span> <span>입니다.</span>
                            </div>
                            <ul className="flex items-center gap-4">
                                <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                                <div>학습하면서 발생한 문제 기록</div>
                            </ul>
                            <ul className="flex items-center gap-4">
                                <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                                <div>학습하면서 햇갈리는 부분 기록</div>
                            </ul>
                            <ul className="flex items-center gap-4">
                                <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                                <div>프로젝트 회고록</div>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <div className="hidden select-none 2xl:flex absolute text-[200px] -rotate-[14deg] -right-10 -bottom-14 text-white opacity-50 gap-2">
                    <span className={coding.className}>ARCHIVES</span>
                    <span className="animate-flick">|</span>
                </div>
            </div>
            <div className="project-container"></div>
        </>
    );
};

export default Archive;
