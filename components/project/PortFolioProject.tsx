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

const PortFolioProject = () => {
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>
                    <p>포트폴리오</p>
                    <p>웹 사이트</p>
                </div>
                <div className="w-full text-center text-gray-500 pb-12">2024.09 (개인 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="cursor-grab max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/port_1.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="portfolio_project" fill sizes="100vw" className="" src="/img/port_1.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/port_2.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="portfolio_project" fill sizes="100vw" className="" src="/img/port_2.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/port_3.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/port_3.gif" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <p>현재 보고 계시는 포트폴리오 페이지입니다.</p>
                        <p className="mt-1">
                            <span className="text-rose-500">Next.js 15+</span>를 다시 사용해보고, 더욱 친숙해질 수
                            있었습니다.
                        </p>
                        <p className="mt-1">
                            <span className="text-rose-500">NodeMailer</span>를 활용한 메일 전송 시스템을 제작해볼 수
                            있었습니다.
                        </p>
                        <p className="mt-1">
                            4K부터 핸드폰까지, <span className="text-rose-500">복잡한 반응형</span> 구현을 해볼 수
                            있었습니다.
                        </p>
                        <p className="mt-1">
                            해외에서 인기가많은 <span className="text-rose-500">shadn/ui + tailwindCSS</span>를 활용해서
                            UI를 구성해보며 경험을 쌓았습니다.
                        </p>
                        <section className="flex flex-col mt-4 gap-4">
                            <div className="border-b w-full"></div>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                </div>
                                <div className="">스크롤 애니메이션, 반응형 웹, 메일 전송</div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Github</div>
                                </div>
                                <Link
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/yoyobar/portfolio'}
                                >
                                    https://github.com/yoyobar/portfolio
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                </div>
                                <div>Next.js, Shadn/ui, TypeScript, TailwindCSS</div>
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

export default PortFolioProject;
