'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useModalStore } from '@/app/config/store';

const WeatherProject = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const { setOpen, setSrc } = useModalStore();
    const modalHandler = (src: string) => {
        setOpen(true);
        setSrc(src);
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>WeatherMe</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.04 (개인 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="cursor-grab max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/weather_1.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/weather_1.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/weather_2.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/weather_2.gif" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-fit text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <p>수강 기간중 처음으로 개인적으로 진행하게된 프로젝트입니다.</p>
                        <p className="mt-1">
                            다른 프로젝트보다 완성도가 낮지만, 반응형을 고려하고,{' '}
                            <span className="text-rose-500">API</span>를 연동하는 과정을 처음으로 진행하면서 좋은 경험을
                            쌓을 수 있었습니다.
                        </p>
                        <p className="mt-1">
                            프론트가 백엔드의 <span className="text-rose-500">API</span>와{' '}
                            <span className="text-rose-500">RESTFUL</span>하게 통신하는 과정을 연습해 볼 수 있었습니다.
                        </p>
                        <p className="mt-1">
                            사용자 인터랙션 <span className="text-rose-500">(검색, 캐러셀, 토글)</span>등을 직접
                            설계하면서 UI로직을 연습해볼 수 있었습니다.
                        </p>
                        <p className="mt-1">
                            <span className="text-rose-500">반응형</span>을 고려하고, 사용자 편의성을 처음으로 고려해볼
                            수 있었습니다.
                        </p>
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

export default WeatherProject;
