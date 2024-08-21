'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';

const Project5 = () => {
    return (
        <div className="w-full flex flex-col h-fit bg-white rounded-lg shadow-lg shadow-sky-950 border pb-14">
            <article>
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>WeatherMe</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.04 (개인 프로젝트)</div>
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
                            <div className="border-b w-full"></div>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                </div>
                                <div>
                                    <p>검색기능, 주간 날씨, 일간 날씨, 화씨/섭씨 변환</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Github</div>
                                </div>
                                <Link
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/yoyobar/weatherme'}
                                >
                                    https://github.com/yoyobar/weatherme
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">URL</div>
                                </div>
                                <Link
                                    className="text-sky-500 hover:underline"
                                    href={'https://weather-me-eight.vercel.app'}
                                >
                                    https://weather-me-eight.vercel.app
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                </div>
                                <div>
                                    <p>React, Javascript</p>
                                </div>
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
    );
};

export default Project5;
