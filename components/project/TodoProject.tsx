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

const TodoProject = () => {
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>RecordTodo</div>
                <div className="w-full text-center text-gray-500 pb-12">2025.01 (개인 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent className="cursor-grab">
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/todo_1.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/todo_1.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/todo_2.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/todo_2.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/todo_3.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/todo_3.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/todo_4.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/todo_4.png" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-fit text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <Dot depths={1}>온라인 이력관리 Web-Application</Dot>
                        <Dot depths={1}>역할</Dot>
                        <Dot depths={2}>Supabase를 활용한 Authentication 인증 구현</Dot>
                        <Dot depths={2}>Supabase Table를 활용한 유저 정보 기록</Dot>
                        <Dot depths={2}>Mobile / Desktop 반응형 구축</Dot>
                        <Dot depths={2}>React-Native를 활용한 Web-view 구현</Dot>
                        <Dot depths={3}>웹뷰 application 구축</Dot>
                        <Dot depths={1}>목적 및 성과</Dot>
                        <Dot depths={2}>지인의 이력 관리를 위해 제작한 프로젝트 입니다.</Dot>
                        <Dot depths={2}>간단한 Web-Viewer를 구성하며 React-Native와 친숙해질 수 있었습니다.</Dot>
                        <Dot depths={2}>Supabase의 Auth관련 설정과 redirection 처리를 연습해볼 수 있었습니다.</Dot>
                        <section className="flex flex-col mt-4 gap-4">
                            <div className="border-b w-full"></div>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                </div>
                                <div>
                                    <p>이력관리, 삭제 이력관리, 회원가입/로그인, 웹/모바일</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Github</div>
                                </div>
                                <Link
                                    target="_blank"
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/yoyobar/recordTodo'}
                                >
                                    https://github.com/yoyobar/recordTodo
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">URL</div>
                                </div>
                                <Link
                                    target="_blank"
                                    className="text-sky-500 hover:underline"
                                    href={'https://recordtodo.yoyobar.xyz/'}
                                >
                                    https://recordtodo.yoyobar.xyz/
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                </div>
                                <div>
                                    <p>React, React-native, Typescript, tailwindCSS</p>
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

export default TodoProject;
