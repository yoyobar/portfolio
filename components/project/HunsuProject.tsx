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
import { FaExternalLinkAlt } from 'react-icons/fa';
const HunsuProject = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const { setOpen, setSrc } = useModalStore();
    const detailHandler = () => {
        window.open('https://plaid-plow-0e3.notion.site/Hunsuking-1a74c7349b4c80bf9ab4cfcc2e542e6b');
    };
    const linkHandler = () => {
        window.open(
            'https://www.figma.com/design/GUiUSjlhjMjPZkCoD51F0S/%ED%9B%88%EC%88%98%EC%99%95?node-id=2-3&t=sN2SJ94bYhjohPIE-1',
            '_blank'
        );
    };

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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>훈수왕</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.08 - 2024.09 (팀 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent className="cursor-grab">
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/hunsu_1.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="hunsu_project" fill sizes="100vw" className="" src="/img/hunsu_1.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/hunsu_2.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="hunsu_project" fill sizes="100vw" className="" src="/img/hunsu_2.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/hunsu_3.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="hunsu_project" fill sizes="100vw" className="" src="/img/hunsu_3.png" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/hunsu_4.png')}
                                className="max-w-screen h-[300px] lg:w-[380px] md:h-[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="hunsu_project" fill sizes="100vw" className="" src="/img/hunsu_4.png" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <Dot depths={1}>AI 기반 사용자 Q&A 커뮤니티</Dot>
                        <Dot depths={1}>
                            <div className="flex items-center gap-2">
                                FIGMA 디자인 전체 총괄 및 제작
                                <FaExternalLinkAlt
                                    onClick={linkHandler}
                                    title="FIGMA 확인"
                                    className="text-rose-600 hover:text-rose-800 cursor-pointer"
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
                            <span className="font-semibold">팀장</span>을 담당하여 팀원들과의 프로젝트 일정을 관리
                        </Dot>
                        <Dot depths={3}>
                            도메인 연동 및 <span className="font-semibold">AWS CI/CD Client Infra</span> 구축
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">Figma</span>와{' '}
                            <span className="font-semibold">Excalidraw</span>를 활용하여 개발 프로세스를 체계화
                        </Dot>
                        <Dot depths={3}>
                            프로젝트 <span className="font-semibold">60%</span> 이상 담당
                        </Dot>
                        <Dot depths={2}>회원가입 / 로그인 시스템 구축</Dot>
                        <Dot depths={3}>사설 회원가입, 비밀번호 찾기, 이메일 인증 기능 구현</Dot>
                        <Dot depths={2}>레벨 시스템, 경험치 시스템 구축</Dot>
                        <Dot depths={3}>사용자 경험치 시스템, 레벨 시스템 구현</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">사용자 글쓰기 / 수정 / 삭제 구축</span>
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">Tiptap</span> 를 참고하여 Custom Editor 제작
                        </Dot>
                        <Dot depths={3}>Markdown 문법 및 코드포맷 지원</Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">이미지 첨부</span> 기능 지원
                        </Dot>
                        <Dot depths={3}>게시글별 고유 링크 및 공유 기능 구현</Dot>
                        <Dot depths={3}>간단한 단축키 및 사용자 UX 개선</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">사용자 실시간 알림 기능 구축</span>
                        </Dot>
                        <Dot depths={3}>React-query의 Refetch를 활용하여 댓글 / 좋아요 알림 구현</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">어드민 페이지 기능 구축</span>
                        </Dot>
                        <Dot depths={3}>게시물 신고 기능 구현</Dot>
                        <Dot depths={3}>Admin 경고 구현, 경고 3회이상시 정지처리</Dot>
                        <Dot depths={3}>Admin 통계 구현, 사용자 통계 정보 확인</Dot>
                        <Dot depths={3}>Admin 관리 구현, 사용자 게시글 관리</Dot>
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
                                    <p>게시판 CRUD, 질문 작성및 AI 답변</p>
                                    <p>어드민 페이지</p>
                                    <p>실시간 알림</p>
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
                                    <p>사용자 메일 인증, Auth 로직</p>
                                    <p>실시간 알림, Admin 알림</p>
                                    <p>유저 신고 처리</p>
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
                                <Link
                                    target="_blank"
                                    className="text-sky-500 hover:underline"
                                    href={'https://hunsuking.yoyobar.xyz'}
                                >
                                    https://hunsuking.yoyobar.xyz
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                </div>
                                <div>React, React-query, Zustand, TypeScript, TailwindCSS, Tiptap</div>
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
