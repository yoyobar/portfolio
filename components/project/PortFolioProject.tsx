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
import Dot from '../ui/Dot';
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
                        <Dot depths={1}>
                            <span className="font-semibold">역할</span>
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">NodeMailer</span>를 활용한 사용자 메일 서비스 구축
                        </Dot>
                        <Dot depths={2}>
                            Mobile / Desktop <span className="text-rose-600">반응형 구축</span>
                        </Dot>
                        <Dot depths={3}>
                            <Link
                                target="_blank"
                                className="text-sky-500 hover:underline"
                                href={'https://tailwindcss.com/docs/responsive-design'}
                            >
                                Tailwind Responsive Custom
                            </Link>
                            을 통해 구축
                        </Dot>
                        <Dot depths={2}>
                            해외 사용률이 높은 <span className="text-rose-600">Shadn/ui</span>를 채택하여 학습
                        </Dot>
                        <Dot depths={3}>자주 사용되는 UI를 Shadn/ui 를 사용하여 제작</Dot>
                        <Dot depths={2}>
                            사용자 경험 중심의 <span className="text-rose-600">UI/UX</span> 개선
                        </Dot>
                        <Dot depths={3}>IntersectionObserver를 활용해 스크롤 컨트롤 기능 구현</Dot>

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
                                    target="_blank"
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
