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

const BlogProject = () => {
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>Next.js 블로그</div>
                <div className={tw('w-full text-center text-xl', aggro.className)}>Trouble Wiki</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.05 - 2024.06 (개인 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent className="cursor-grab">
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/blog_1.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="blog_project" fill sizes="100vw" className="" src="/img/blog_1.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/blog_2.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="blog_project" fill sizes="100vw" className="" src="/img/blog_2.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/blog_3.gif')}
                                className="max-w-screen h-[300px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="blog_project" fill sizes="100vw" className="" src="/img/blog_3.gif" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <Dot type="title">주요 역할 및 구현 내용</Dot>
                        <Dot type="check">프로젝트 전반 제작</Dot>
                        <Dot type="dot">
                            Next.js App-router 기반
                            <span className="text-highlight"> 블로그 자체 구축</span>
                        </Dot>
                        <Dot type="dot">
                            MDX-Plugin <span className="font-semibold">자체 개발</span>
                        </Dot>
                        <Dot type="dot">확장된 마크다운 기능(목차, 코드블럭, 인용, Callout등) 추가</Dot>
                        <Dot type="check">SEO 및 콘텐츠 관리</Dot>
                        <Dot type="dot">
                            Category → Post 구조 설계, <span className="font-semibold">Series</span> 기능 및 목차 자동
                            생성 (IntersectionObserver 활용)
                        </Dot>
                        <Dot type="dot">
                            <span className="font-semibold">frontmatter 기반 SEO 최적화</span>, 모든 게시글에 자동
                            메타데이터 적용
                        </Dot>
                        <Dot type="check">이미지 최적화 및 서버 연동</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">빌드 시 이미지 WebP 변환 + AWS S3 업로드</span>,
                            클라이언트에 최적화된 이미지 자동 제공
                        </Dot>
                        <Dot type="dot">
                            이미지 최적화 로직을 통해
                            <span className="text-highlight">&nbsp;LCP 11.5s → 7.2s / FCP 1.7s → 0.8s로 40%&nbsp;</span>
                            성능 개선
                        </Dot>
                        <Dot type="check">UI/UX & 디자인</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">Windows 스타일 블로그</span> UI 설계, 창 이동·최소화 기능
                            구현
                        </Dot>
                        <Dot type="dot">
                            <span className="font-semibold">반응형 디자인 및 다크모드 지원</span>
                        </Dot>
                        <Dot type="check">백엔드 및 데이터 관리</Dot>
                        <Dot type="dot">
                            <span className="font-semibold">
                                Supabase 기반 <span className="text-rose-600">댓글 및 방문자 통계 시스템</span> 구축
                            </span>
                        </Dot>
                        <Dot type="dot">
                            <span className="font-semibold">Non-SQL 데이터베이스 경험</span>, SQL 대비 장단점 분석
                        </Dot>
                        <Dot type="title">성과 및 배운점</Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">웹 최적화 기법 적용</span>, 성능 개선 및 SEO 경험 확보
                        </Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">MDX 활용 경험</span>, 현대 웹사이트에서 Markdown을 활용하는
                            방식 습득
                        </Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">Supabase + S3 연동</span>, CDN 활용 및 클라우드 스토리지
                            경험 습득
                        </Dot>
                        <Dot type="diamond">
                            <span className="font-semibold">
                                풀스택 프로젝트 완성, 기획부터 배포까지 전 과정 직접 수행
                            </span>
                        </Dot>
                        <section className="flex flex-col mt-4 gap-4">
                            <Link
                                href={'https://wiki.yoyobar.xyz/posts/Project/blog_page'}
                                target="_blank"
                                className="hover:bg-slate-700 transition w-[150px] py-1 px-4 rounded-sm bg-black text-white text-center"
                            >
                                자세히 보기
                            </Link>
                            <div className="border-b w-full"></div>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">주요 기능</div>
                                </div>
                                <p>카테고리 분류, 시리즈 분류, 게시글, 음악 재생등</p>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Github</div>
                                </div>
                                <Link
                                    target="_blank"
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/yoyobar/newBlog'}
                                >
                                    https://github.com/yoyobar/newBlog
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
                                    href={'https://wiki.yoyobar.xyz'}
                                >
                                    https://wiki.yoyobar.xyz
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Frontend</div>
                                </div>
                                <div>Next.js, TypeScript, TailwindCSS</div>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">Backend</div>
                                </div>
                                <div>Supabase</div>
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

export default BlogProject;
