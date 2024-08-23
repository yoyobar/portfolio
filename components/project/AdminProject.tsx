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

const AdminProject = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const { setOpen, setSrc } = useModalStore();
    const modalHandler = (src: string) => {
        setOpen(true);
        setSrc(src);
    };

    const detailHandler = () => {
        window.open('https://wiki.yoyobar.xyz/posts/Project/admin_page');
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>어드민 페이지</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.04 - 2024.05 (개인 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="cursor-grab max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/admin_1.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/admin_1.png" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <p>백엔드와의 연동을 연습하기위해 개인적으로 진행한 프로젝트 입니다.</p>
                        <p className="mt-1">
                            <span className="text-rose-500">MySQL</span>, <span className="text-rose-500">Docker</span>
                            환경을 구축하여 직접 백엔드 로직을 구성해보았습니다.
                        </p>
                        <p className="mt-1">
                            <span className="text-rose-500">React-query</span>를 사용하여 서버 상태에 대한 최적화를 해볼
                            수 있었습니다.
                        </p>
                        <p className="mt-1">
                            <span className="text-rose-500">Typescript</span>를 최초로 사용하여 enum, 유틸리티 타입등
                            다양한 타입을 연습해보았습니다.
                        </p>
                        <p className="mt-1">
                            사용자 인증로직을 직접 처음부터 구축하여 <span className="text-rose-500">인증</span>의 대한
                            이해를 넓혔습니다.
                        </p>
                        <p className="mt-1">
                            <span className="text-rose-500">어드민 페이지</span>를 제작하여 어드민의 사용자 관할을
                            구현해보았습니다.
                        </p>
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

export default AdminProject;
