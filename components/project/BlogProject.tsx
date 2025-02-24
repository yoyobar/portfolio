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

    const detailHandler = () => {
        window.open('https://wiki.yoyobar.xyz/posts/Project/blog_page');
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
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>블로그 웹 사이트</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.05 - 2024.06 (개인 프로젝트)</div>
            </article>
            <article className="relative flex flex-col lg:flex-row px-2 lg:px-8 gap-4">
                <Carousel setApi={setApi} className="cursor-grab max-w-full lg:max-w-[380px] xl:max-w-[500px]">
                    <CarouselContent>
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
                        <Dot depths={1}>프레임워크(Gatsby, Jekyll)을 사용하지 않고 제작된 개인 블로그</Dot>
                        <Dot depths={1}>
                            <span className="font-semibold">역할</span>
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">프로젝트 전체 제작</span>
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">MDX-Plugin 자체 세팅 및 구축</span>
                        </Dot>
                        <Dot depths={3}>
                            마크다운의 확장형인 MDX를 Next.js에 조합하여 별개의 프레임워크 없이 블로그 제작
                        </Dot>
                        <Dot depths={3}>
                            디렉토리 구조 구현 및 <span className="font-semibold">SEO 최적화</span>
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">Category → Post</span> 디렉토리 구조화 블로그 게시글 구현{' '}
                        </Dot>
                        <Dot depths={3}>
                            묶음 게시글 <span className="font-semibold">Series</span> 및{' '}
                            <span className="font-semibold">Intersection Observer</span>를 활용한 목차 구현
                        </Dot>
                        <Dot depths={3}>
                            모든 게시글은 말머리 (<span className="font-semibold">FrontMatter</span>)에 따라 SEO가
                            자동으로 구성
                        </Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">이미지 최적화 및 이미지 서버 구성</span>
                        </Dot>
                        <Dot depths={3}>직접 제작한 build용 이미지 최적화 로직 사용</Dot>
                        <Dot depths={3}>프로젝트 빌드시 이미지를 webp로 변환하고 AWS S3에 전송</Dot>
                        <Dot depths={3}>주소는 자동으로 변환되어 각 게시글에 할당</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">사용자 지정 MDX 플러그인 제작</span>
                        </Dot>
                        <Dot depths={3}>
                            목차, 하이퍼링크, 코드블럭, 인용문, Callout등 노션에 존재하는 대부분의 기능을 컴포넌트를
                            활용하여 Markdown Plugin화 진행
                        </Dot>
                        <Dot depths={2}>전체 디자인 담당</Dot>
                        <Dot depths={3}>Window Desktop를 참고하여 블로그 제작</Dot>
                        <Dot depths={3}>모바일 반응형 및 창 이동, 최소화 등의 기능 구현</Dot>
                        <Dot depths={3}>Dark Theme 구현</Dot>
                        <Dot depths={2}>
                            <span className="text-rose-600">댓글 기능 / 방문자 통계 구현</span>
                        </Dot>
                        <Dot depths={3}>
                            <span className="font-semibold">Non-SQL Supabase</span>를 활용하여 일별 사용자 통계 및 댓글
                            기능 구현현
                        </Dot>
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
                                <div className="">
                                    카테고리 분류, 시리즈 분류, 게시글, 음악 재생등 블로그 플랫폼에 존재하는 대부분의
                                    기능
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
