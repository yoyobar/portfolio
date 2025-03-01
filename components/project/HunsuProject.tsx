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
const HunsuProject = () => {
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>AI 커뮤니티</div>
                <div className={tw('w-full text-center text-xl', aggro.className)}>훈수왕</div>
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
                    <section className="flex flex-col mt-4">
                        <Dot type="title">주요 역할 및 구현 내용</Dot>
                        <Dot type="check">프로젝트 리딩 & 일정 관리</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">팀장 역할 수행</span>, 개발 일정 조율 및 이슈 해결
                        </Dot>
                        <Dot type="dot">
                            <span className="text-highlight">AWS CI/CD 및 Client 인프라 구축</span>, 도메인 연동
                        </Dot>
                        <Dot type="dot">
                            <span className="font-semibold">Figma · Excalidraw 활용</span> → 개발 프로세스 체계화 및
                            협업 효율 극대화
                        </Dot>
                        <Dot type="check">이메일 인증 및 비밀번호 찾기 기능 구현</Dot>
                        <Dot type="dot">회원가입 및 인증 시스템 구축</Dot>
                        <Dot type="check">Tiptap 기반 Custom Editor & 게시글 시스템</Dot>
                        <Dot type="dot">
                            <span className="text-highlight">Markdown 문법 및 코드 포맷 지원, 이미지 첨부 기능</span>{' '}
                            추가
                        </Dot>
                        <Dot type="dot">단축키 지원 → 사용자 피드백 반영하여 UX 개선</Dot>
                        <Dot type="dot">게시글 고유 링크 및 공유 기능 구현</Dot>
                        <Dot type="check">실시간 알림 시스템 (React Query 적용)</Dot>
                        <Dot type="dot">
                            기존 새로고침 기반 알림에서 → &nbsp;
                            <span className="font-semibold">자동 동기화 방식으로 개선</span>
                        </Dot>
                        <Dot type="dot">
                            좋아요 · 댓글 알림 <span className="font-semibold">실시간 처리</span>
                        </Dot>
                        <Dot type="check">어드민 기능 개발</Dot>
                        <Dot type="dot">게시물 신고 기능 및 경고 3회 이상 ID 정지 시스템 구현</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">사용자 통계</span> 및 다중 게시글 삭제 기능 추가
                        </Dot>
                        <Dot type="check">Figma 기반 UI/UX 디자인 총괄</Dot>
                        <Dot type="dot">
                            모던 웹 디자인<span className="text-gray-600">(Disquiet.io 참고)</span> 적용, TailwindCSS
                            활용
                        </Dot>
                        <Dot type="dot">Framer-motion 애니메이션 적용, 직관적인 인터페이스 구현</Dot>
                        <Dot type="title">성과 및 배운점</Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">React Query 기반 실시간 데이터 동기화</span>, UX 개선 및
                            성능 최적화
                        </Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">Tiptap 기반 Custom Editor 제작</span>, 온라인 에디터 제작
                            기술 습득
                        </Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">프롬프트 엔지니어링 활용</span>, AI 훈수 시스템의 응답 품질
                            향상
                        </Dot>
                        <div className="gap-2 flex">
                            <Link
                                href={'https://plaid-plow-0e3.notion.site/Hunsuking-1a94c7349b4c8063bb9ac7b8180a860c'}
                                target="_blank"
                                className="hover:bg-slate-700 transition w-[150px] py-1 px-4 rounded-sm bg-black text-white text-center mt-4"
                            >
                                자세히 보기
                            </Link>
                            <Link
                                href={
                                    'https://www.figma.com/design/GUiUSjlhjMjPZkCoD51F0S/%ED%9B%88%EC%88%98%EC%99%95?node-id=2-3&t=sN2SJ94bYhjohPIE-1'
                                }
                                target="_blank"
                                className="hover:bg-stone-600 transition w-[150px] py-1 px-4 rounded-sm bg-stone-300 text-center mt-4 hover:text-white flex gap-2 justify-center items-center"
                            >
                                FIGMA
                            </Link>
                        </div>
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
