'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useModalStore } from '@/app/config/store';
import Dot from '../ui/Dot';
const EmotreeProject = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const { setOpen, setSrc } = useModalStore();
    const modalHandler = (src: string) => {
        setOpen(true);
        setSrc(src);
    };

    const detailHandler = () => {
        window.open('https://plaid-plow-0e3.notion.site/Emotree-1a74c7349b4c804bb698c8b490f79aed');
    };

    const linkHandler = () => {
        window.open('https://plaid-plow-0e3.notion.site/Emotree-1824c7349b4c815fac09d260755ed724', '_blank');
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>Emotree</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.07 - 2024.08 (팀 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent className="cursor-grab">
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/emotree_1.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="emotree_project" fill sizes="100vw" className="" src="/img/emotree_1.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/emotree_2.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="emotree_project" fill sizes="100vw" className="" src="/img/emotree_2.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/emotree_3.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="emotree_project" fill sizes="100vw" className="" src="/img/emotree_3.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/emotree_4.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="admin_project" fill sizes="100vw" className="" src="/img/emotree_4.png" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <Dot depths={1}>AI 기반 사용자간 대화 감정분석 서비스</Dot>
                        <Dot depths={1}>
                            <div className="font-semibold flex gap-2 items-center">
                                조코딩 2024 GOOGLE 해커톤 출품{' '}
                                <FaExternalLinkAlt
                                    onClick={linkHandler}
                                    title="ppt 확인"
                                    className="text-rose-600 cursor-pointer hover:text-rose-800"
                                />
                            </div>
                        </Dot>
                        <Dot depths={1}>
                            <span className="font-semibold">역할</span>
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">프로젝트 일정 관리</span>
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">팀장</span>을 담당하여 프로젝트 일정 관리
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">Figma</span>와
                            <span className="font-semibold ml-1">Excalidraw</span>,
                            <span className="font-semibold ml-1">Notion</span>을 활용하여 개발 프로세스 체계화
                        </Dot>
                        <Dot depths={3}>
                            프로젝트 <span className="font-semibold">60%</span> 이상 담당
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">회원가입 / 로그인 시스템 구축</span>
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">oAuth2</span> 기반 구글 회원가입 / 로그인 로직 구현
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">PrivateRoute</span>로 내부 접근 권한 제한
                        </Dot>
                        <Dot depths={2}>Preserve-3D를 활용한 3d-style Graphic 구현</Dot>
                        <Dot depths={3}>별도의 Canvas없이 3d-style Graphic 구현</Dot>
                        <Dot depths={3}>grid를 이용한 사용자 레벨별 UI 변동, 게임같은 경험 제공</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">레벨 시스템, 경험치 시스템, 통계 시스템 구축</span>
                        </Dot>
                        <Dot depths={3}>
                            유저레벨 / 감정 분석 경험치의 <span className="font-semibold">재귀적인 구조</span> 구현
                        </Dot>
                        <Dot depths={3}>
                            레벨을 직관적으로 볼 수 있는 감정별 <span className="font-semibold">통계데이터</span> 구현
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">어드민 페이지 구축</span>
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">사용자 계정 관리, 사용량 통계</span> 등 Admin 페이지 구현
                        </Dot>
                        <Dot depths={2}>사운드 인터랙션 및 UX 담당</Dot>
                        <Dot depths={3}>배경 음악, 전체 애니메이션 등 효과별 음성 제공</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">배포 서비스 담당</span>
                        </Dot>
                        <Dot depths={3}>
                            AWS를 활용한 자동 CI/CD 및 <span className="font-semibold">Client Infra</span> 담당
                        </Dot>
                        <button
                            onClick={detailHandler}
                            className="mt-4 hover:bg-slate-700 transition w-[200px] py-1 px-4 rounded-sm bg-black text-white"
                        >
                            자세히 보기
                        </button>
                        <section className="flex flex-col mt-4 gap-4">
                            <div className="border-b w-full"></div>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                </div>
                                <div>
                                    <p>AI 감정분석, 나무 심기, 채팅방 생성</p>
                                    <p>마이 페이지, 어드민 페이지</p>
                                </div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">담당 파트</div>
                                </div>
                                <div>
                                    <p>{`CI/CD, 로그인 로직, 어드민 로직`}</p>
                                    <p>{`메인 페이지 로직, 경험치 시스템 로직`}</p>
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
                                    href={'https://github.com/OZ-Coding-School/oz_03_main-003-FE'}
                                >
                                    https://github.com/OZ-Coding-School
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

export default EmotreeProject;
