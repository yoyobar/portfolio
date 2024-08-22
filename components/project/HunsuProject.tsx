'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';

const HunsuProject = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const detailHandler = () => {
        window.open('https://hunsuking.yoyobar.xyz');
    };

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="px-4 lg:px-0 w-full flex flex-col h-fit bg-white rounded-lg shadow-lg shadow-sky-950 border pb-14">
            <article>
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>훈수왕</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.08 - 2024.09 (팀 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="cursor-grab max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent>
                        <CarouselItem className="">
                            <div className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative">
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/placeholder.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative">
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/placeholder.png" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
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
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">담당 파트</div>
                                </div>
                                <div>
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Github</div>
                                </div>
                                <Link
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/OZ-Coding-School/oz_03_collabo-004-FE'}
                                >
                                    https://github.com/OZ-Coding-School
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">URL</div>
                                </div>
                                <Link className="text-sky-500 hover:underline" href={'https://hunsuking.yoyobar.xyz'}>
                                    https://hunsuking.yoyobar.xyz
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
                                    <div className="font-bold text-rose-600 w-fit">Database</div>
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
    );
};

export default HunsuProject;
