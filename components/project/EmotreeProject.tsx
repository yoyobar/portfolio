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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>AI 감정 분석 시뮬레이션</div>
                <div className={tw('w-full text-center text-xl', aggro.className)}>Emotree</div>
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
                    <section className="flex flex-col mt-4">
                        <Dot type="title">주요 역할 및 구현 내용</Dot>
                        <Dot type="check">
                            <span className="text-rose-600">조코딩 2024 AI 해커톤 출품 - 예선 통과</span>
                        </Dot>

                        <Dot type="dot">
                            Figma · Excalidraw · Notion 활용 → &nbsp;
                            <span className="font-semibold">개발 프로세스 체계화 및 문서화</span>
                        </Dot>
                        <Dot type="check">회원가입 및 인증 시스템 구축</Dot>
                        <Dot type="dot">PrivateRoute 적용 → 비회원 접근 차단 및 권한 관리</Dot>
                        <Dot type="check">3D 스타일 UI 및 게이미피케이션 적용</Dot>
                        <Dot type="dot">
                            CSS transform-style: preserve-3D 활용 → &nbsp;
                            <span className="text-highlight">Canvas 없이 3D 스타일 UI 구현</span>
                        </Dot>
                        <Dot type="dot">Grid 레이아웃 기반 사용자 레벨별 UI 변화 → 게임 같은 몰입감 제공</Dot>
                        <Dot type="check">레벨·경험치 및 감정 통계 시스템 개발</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">AI 감정 분석 기반 경험치 및 레벨링 로직 구현</span>
                        </Dot>
                        <Dot type="dot">
                            감정별 통계 데이터 <span className="text-highlight">그래프 시각화</span>
                        </Dot>
                        <Dot type="check">어드민 페이지 기능 구축</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">사용자 관리 및 통계 데이터 제공</span>
                        </Dot>
                        <Dot type="dot">어드민 전용 사용자 계정 관리 및 사용량 분석 기능 추가</Dot>
                        <Dot type="check">사운드 인터랙션 및 UX 최적화</Dot>
                        <Dot type="dot">배경 음악, 버튼 상호작용, 대화방 내 효과음 적용</Dot>
                        <Dot type="dot">
                            크롬의 자동 재생 정책 대응 → &nbsp;
                            <span className="font-semibold">오픈소스 사운드 활용 최적화</span>
                        </Dot>
                        <Dot type="check">AWS 기반 배포 및 CI/CD 구축</Dot>
                        <Dot type="dot">
                            GitHub Actions → <span className="font-semibold">자동 배포 파이프라인 구축</span>
                        </Dot>
                        <Dot type="dot">AWS Route53 + SSL 인증서 적용</Dot>
                        <Dot type="title">성과 및 배운 점</Dot>
                        <Dot type="diamond"> OAuth2 인증 Flow 이해, 서드파티 계정 연동 및 보안 고려</Dot>
                        <Dot type="diamond">
                            대화 감정 분석 <span className="font-semibold">데이터 그래프 시각화</span>, 사용자용 &
                            어드민용 통계 차별화
                        </Dot>
                        <Dot type="diamond"> 사운드 인터랙션 최적화, 크롬 정책을 고려한 오디오 재생 방식 적용</Dot>
                        <Dot type="diamond">AWS 기반 인프라 구축 경험, Git 업데이트 시 자동 CI/CD 연동</Dot>

                        <div className="gap-2 flex">
                            <Link
                                href={'https://plaid-plow-0e3.notion.site/Emotree-1a94c7349b4c8083bbd7f665b581fae9'}
                                target="_blank"
                                className="hover:bg-slate-700 transition w-[150px] py-1 px-4 rounded-sm bg-black text-white text-center mt-4"
                            >
                                자세히 보기
                            </Link>
                            <Link
                                href={
                                    'https://www.figma.com/design/CxT7yiciTNPFwVH6XCwsbX/3Team-EmoTree-UI?node-id=0-1&t=SRD9KJCSwdrHqfLE-1'
                                }
                                target="_blank"
                                className="hover:bg-stone-600 transition w-[150px] py-1 px-4 rounded-sm bg-stone-300 text-center mt-4 hover:text-white flex gap-2 justify-center items-center"
                            >
                                FIGMA
                            </Link>
                            <Link
                                href={'https://plaid-plow-0e3.notion.site/Emotree-1a94c7349b4c806fa010d618df08fa6a'}
                                target="_blank"
                                className="hover:bg-stone-600 transition w-[150px] py-1 px-4 rounded-sm bg-stone-300 text-center mt-4 hover:text-white flex gap-2 justify-center items-center"
                            >
                                해커톤 발표자료
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
