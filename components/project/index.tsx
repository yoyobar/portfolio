'use client';
import { aggro, coding } from '@/util/fonts';
import Image from 'next/image';
import { IoIosLink } from 'react-icons/io';
import { twMerge as tw } from 'tailwind-merge';
import { FaCheck } from 'react-icons/fa6';
import Link from 'next/link';

const Project = () => {
    const scrollHandler = () => {
        document.querySelector('.project-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const blogHandler = () => {
        window.open('https://wiki.yoyobar.xyz/posts/Project/blog_page');
    };
    const emotreeHandler = () => {
        window.open('https://emotree.yoyobar.xyz');
    };

    return (
        <>
            <div className="relative w-full py-32 flex flex-col justify-center items-center bg-sky-700 h-fit">
                <div className="px-2 md:px-10 mb-20 max-w-[1200px] w-full flex flex-col gap-10 items-center justify-center">
                    <div className="flex mb-20 gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-gray-200 hover:text-white" />
                        </div>
                        <div className="text-[50px] font-extrabold border-b border-b-white text-white">Projects</div>
                    </div>
                    <div className="w-full flex flex-col h-fit bg-white rounded-lg shadow-lg shadow-sky-950 border pb-14">
                        <article>
                            <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>
                                블로그 웹 사이트
                            </div>
                            <div className="w-full text-center text-gray-500 pb-12">2024.05 - 2024.06</div>
                        </article>
                        <article className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full h-[400px] relative cursor-pointer aspect-w-1 aspect-h-1">
                                <Image alt="blog_project" fill className="px-4 object-cover" src="/img/project_1.png" />
                            </div>

                            <div className="w-full text-sm md:text-lg ml-8 pr-20">
                                <section>
                                    <span className="text-rose-600">Next.js </span>
                                    <span>
                                        최신버전에 익숙해지고자 직접 블로그를 개발해보기위해 시작된 프로젝트 입니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        직접 <span className="text-rose-600">MDX-plugin</span>을 세팅하며
                                        <span className="text-rose-600"> Markdown</span>
                                        <span>
                                            문법에 익숙해 질 수 있었고 컴포넌트에
                                            <span className="text-rose-600"> MDX</span>를 파싱하는 방법을 익혔습니다.
                                        </span>
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        댓글 시스템 구현을 위해 <span className="text-rose-600">Supabase</span>를
                                        활용하면서 <span className="text-rose-600">NoSQL</span>에 더욱 채화 될 수
                                        있었습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        <span className="text-rose-600">Category, Post, Series</span>등의 다양한
                                        디렉토리를 나누면서 <span className="text-rose-600">Next.js</span>에 더욱 적응할
                                        수 있었습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        <span className="text-rose-600">Next.js</span>의{' '}
                                        <span className="text-rose-600">SEO</span>에 최적화를 진행하고, 이미지를 최적화
                                        하는 등 다양한 최적화 기법을 연습해볼 수 있었습니다.
                                    </span>
                                    <section className="flex flex-col mt-4 gap-4">
                                        <button
                                            onClick={blogHandler}
                                            className="hover:bg-slate-700 transition w-[200px] py-1 px-4 rounded-sm bg-black text-white"
                                        >
                                            자세히 보기
                                        </button>
                                        <div className="border-b w-full"></div>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                            </div>
                                            <div className="">
                                                카테고리 분류, 시리즈 분류, 게시글, 음악 재생등 블로그 플랫폼에 존재하는
                                                대부분의 기능
                                            </div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Github</div>
                                            </div>
                                            <Link
                                                className="text-sky-500 hover:underline"
                                                href={'https://github.com/yoyobar/newBlog'}
                                            >
                                                https://github.com/yoyobar/newBlog
                                            </Link>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">URL</div>
                                            </div>
                                            <Link
                                                className="text-sky-500 hover:underline"
                                                href={'https://wiki.yoyobar.xyz'}
                                            >
                                                https://wiki.yoyobar.xyz
                                            </Link>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                            </div>
                                            <div>Next.js, TypeScript, TailwindCSS</div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Backend</div>
                                            </div>
                                            <div>Supabase</div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Deployment</div>
                                            </div>
                                            <div>Vercel</div>
                                        </section>
                                    </section>
                                </section>
                            </div>
                        </article>
                    </div>
                    <div className="w-full flex flex-col h-fit bg-white rounded-lg shadow-lg shadow-sky-950 border pb-14">
                        <article>
                            <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>Emotree</div>
                            <div className="w-full text-center text-gray-500 pb-12">2024.07 - 2024.08</div>
                        </article>
                        <article className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full h-[400px] relative cursor-pointer aspect-w-1 aspect-h-1">
                                <Image alt="blog_project" fill className="px-4 object-cover" src="/img/project_2.png" />
                            </div>

                            <div className="w-full text-sm md:text-lg ml-8 pr-20">
                                <section>
                                    <span>
                                        <span className="text-rose-600">OZ 코딩스쿨</span>에서 주최한 FE-BE
                                        협동프로젝트로 진행하게 된 프로젝트입니다.
                                        <span className="text-rose-600"> 팀장</span>을 맡아서 진행하게 되었습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        <span className="text-rose-600">조코딩 2024 GOOGLE 해커톤</span> 출전을 위해
                                        <span className="text-rose-600"> AI</span>를 활용한 플랫폼 서비스를 기획하였고,
                                        대화간 감정분석을 분석하여 이를 이용해 정원을 가꾸는 시뮬레이션 웹 게임을
                                        개발하였습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        <span className="text-rose-600">Preserve-3D</span>를 활용한 2.5D 스타일의
                                        디자인을 설계하여 복잡한 CSS 구조를 다뤄볼 수 있었습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        다양한 사운드 인터랙션, 모달등을 추가하여
                                        <span className="text-rose-600"> 사용자 편의성</span>을 크게 신경써서 제작해볼
                                        수 있었습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        <span className="text-rose-600">PrivateRoute</span>등을 활용한 사용자 접근제한을
                                        구현하고, <span className="text-rose-600">어드민 페이지</span>를 구현하여
                                        관리자측면의 편의성도 고려하였습니다.
                                    </span>
                                    <p className="mt-1" />
                                    <span>
                                        규격있는 상태관리를 <span className="text-rose-600">Zustand</span>를 통해
                                        다뤄보며 상태관리와 좀더 친숙해 질 수 있었습니다.
                                    </span>
                                    <section className="flex flex-col mt-4 gap-4">
                                        <button
                                            onClick={emotreeHandler}
                                            className="hover:bg-slate-700 transition w-[200px] py-1 px-4 rounded-sm bg-black text-white"
                                        >
                                            자세히 보기
                                        </button>
                                        <div className="border-b w-full"></div>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                            </div>
                                            <div className="">
                                                AI 감정분석, 나무 심기, 채팅방 생성, 마이페이지, 어드민페이지
                                            </div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Github</div>
                                            </div>
                                            <Link
                                                className="text-sky-500 hover:underline"
                                                href={'https://github.com/OZ-Coding-School/oz_03_main-003-FE'}
                                            >
                                                https://github.com/OZ-Coding-School/oz_03_main-003-FE
                                            </Link>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">URL</div>
                                            </div>
                                            <Link
                                                className="text-sky-500 hover:underline"
                                                href={'https://emotree.yoyobar.xyz'}
                                            >
                                                https://emotree.yoyobar.xyz
                                            </Link>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                            </div>
                                            <div>React, Zustand, TypeScript, TailwindCSS</div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Backend</div>
                                            </div>
                                            <div>Django FrameWork</div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Backend</div>
                                            </div>
                                            <div>Postgre SQL</div>
                                        </section>
                                        <section className="flex flex-col lg:flex-row gap-2 items-start">
                                            <div className="flex gap-2 items-center min-w-[140px]">
                                                <FaCheck />
                                                <div className="font-bold text-rose-600 w-fit">Deployment</div>
                                            </div>
                                            <div>Amazon Web Service</div>
                                        </section>
                                    </section>
                                </section>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="hidden select-none 2xl:flex absolute text-[200px] -rotate-[-14deg] -left-10 -bottom-14 text-white opacity-50 gap-2">
                    <span className={coding.className}>Projects</span>
                    <span className="animate-flick">|</span>
                </div>
            </div>
        </>
    );
};

export default Project;
