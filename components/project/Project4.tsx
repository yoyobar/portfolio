'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';

const Project4 = () => {
    const detailHandler = () => {
        window.open('https://wiki.yoyobar.xyz/posts/Project/admin_page');
    };
    return (
        <div className="w-full flex flex-col h-fit bg-white rounded-lg shadow-lg shadow-sky-950 border pb-14">
            <article>
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>어드민 페이지</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.04 - 2024.05 (개인 프로젝트)</div>
            </article>
            <article className="flex flex-col lg:flex-row gap-4">
                <div className="w-full h-[400px] relative cursor-pointer aspect-w-1 aspect-h-1">
                    <Image alt="admin_project" fill className="object-cover md:px-8 px-4" src="/img/placeholder.png" />
                </div>

                <div className="w-full text-sm md:text-lg pr-20">
                    <section>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quos ducimus officiis
                            eligendi odio vel aspernatur possimus itaque aliquid, blanditiis commodi veritatis dolor
                            impedit. Aliquam possimus reprehenderit ex ut velit?
                        </span>
                        <section className="flex flex-col mt-4 gap-4">
                            <button
                                onClick={detailHandler}
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
                                <div>
                                    <p>카테고리 구별, 태스크 생성, 수정, 삭제 (CRUD)</p>
                                    <p>어드민 페이지 전체 관할</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Github</div>
                                </div>
                                <Link
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/yoyobar/adminpage'}
                                >
                                    https://github.com/yoyobar/adminpage
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                </div>
                                <div>
                                    <p>React, React-query, Zustand</p>
                                    <p>TypeScript, TailwindCSS</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Backend</div>
                                </div>
                                <div>Express.js</div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Database</div>
                                </div>
                                <div>MySQL</div>
                            </section>
                        </section>
                    </section>
                </div>
            </article>
        </div>
    );
};

export default Project4;
