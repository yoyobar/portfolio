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
                                className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="blog_project" fill sizes="100vw" className="" src="/img/blog_1.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/blog_2.gif')}
                                className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="blog_project" fill sizes="100vw" className="" src="/img/blog_2.gif" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="">
                            <div
                                onClick={() => modalHandler('/img/blog_3.gif')}
                                className="max-w-screen h-[380px] lg:w-[380px] lg:[380px] xl:w-[500px] xl:h-[400px] relative"
                            >
                                <Image alt="blog_project" fill sizes="100vw" className="" src="/img/blog_3.gif" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-center mt-2 text-gray-400 cursor-default select-none">{`${current} / ${count}`}</div>
                </Carousel>
                <div className="w-full text-sm md:text-lg">
                    <section className="mt-4 md:mt-0">
                        <span className="text-rose-600">Next.js </span>
                        <span>최신버전에 익숙해지고자 직접 블로그를 개발해보기위해 시작된 프로젝트 입니다.</span>
                        <p className="mt-1" />
                        <span>
                            직접 <span className="text-rose-600">MDX-plugin</span>을 세팅하며
                            <span className="text-rose-600"> Markdown</span>
                            <span>
                                문법에 익숙해 질 수 있었고 컴포넌트에
                                <span className="text-rose-600"> MDX</span>를 파싱하는 방법을 익혔습니다.
                            </span>
                        </span>
                        <p className="mt-1" />
                        <span>
                            댓글 시스템 구현을 위해 <span className="text-rose-600">Supabase</span>를 활용하면서{' '}
                            <span className="text-rose-600">NoSQL</span>에 더욱 채화 될 수 있었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">Category, Post, Series</span>등의 다양한 디렉토리를 나누면서{' '}
                            <span className="text-rose-600">Next.js</span>에 더욱 적응할 수 있었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">Next.js</span>의 <span className="text-rose-600">SEO</span>
                            에 최적화를 진행하고, 이미지를 최적화 하는 등 다양한 최적화 기법을 연습해볼 수 있었습니다.
                        </span>
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
                                <Link className="text-sky-500 hover:underline" href={'https://wiki.yoyobar.xyz'}>
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
