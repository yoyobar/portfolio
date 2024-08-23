'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useModalStore } from '@/app/config/store';

const HunsuProject = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const { setOpen, setSrc } = useModalStore();
    const modalHandler = (src: string) => {
        setOpen(true);
        setSrc(src);
    };

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
                            <div
                                onClick={() => modalHandler('/img/placeholder.png')}
                                className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="hunsu_project" fill sizes="100vw" className="" src="/img/placeholder.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/placeholder.png')}
                                className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="hunsu_project" fill sizes="100vw" className="" src="/img/placeholder.png" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <span>
                            <span className="text-rose-600">OZ 코딩스쿨</span>에서 주최한 FE-BE 콜라보프로젝트로
                            진행하게 된 프로젝트입니다.
                            <span className="text-rose-600"> 팀장</span>을 맡아서 진행하게 되었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            다시 한번 <span className="text-rose-600">AI</span>를 활용한 플랫폼 서비스를 기획하였고,
                            대화간 네이버 지식인 서비스에 AI를 배합한 질문 플랫폼을 개발하였습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">반응형</span>을 고려한 모던 웹 스타일에 맞는 웹페이지를
                            구상하여 현대웹에 부합한 형태로 제작하였습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            다양한 모달, 메일 인증 등을 추가하여
                            <span className="text-rose-600"> 사용자 편의성과 보안</span>을 크게 신경써서 제작해볼 수
                            있었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">PrivateRoute</span>등을 활용한 사용자 접근제한을 구현하고,
                            <span className="text-rose-600">어드민 페이지</span>를 구현하여 관리자측면의 편의성을
                            고려하였습니다.
                        </span>
                        <p className="mt-1" />
                        <section className="flex flex-col mt-4 gap-4">
                            <div className="border-b w-full"></div>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                </div>
                                <div>
                                    <p>게시판 CRUD, 질문 작성및 AI 답변</p>
                                    <p>어드민 사용자 경고 시스템, 이미지 최적화</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">담당 파트</div>
                                </div>
                                <div>
                                    <p>전체적인 모달 및 UI 구상</p>
                                    <p>기획 및 개발 총괄</p>
                                    <p>어드민 페이지</p>
                                    <p>사용자 메일 인증</p>
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
