'use client';
import { aggro } from '@/util/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge as tw } from 'tailwind-merge';

const Project2 = () => {
    const detailHandler = () => {
        window.open('https://emotree.yoyobar.xyz');
    };
    return (
        <div className="w-full flex flex-col h-fit bg-white rounded-lg shadow-lg shadow-sky-950 border pb-14">
            <article>
                <div className={tw('w-full text-center text-4xl pt-14', aggro.className)}>Emotree</div>
                <div className="w-full text-center text-gray-500 pb-12">2024.07 - 2024.08 (팀 프로젝트)</div>
            </article>
            <article className="flex flex-col lg:flex-row gap-4">
                <div className="w-full h-[400px] relative cursor-pointer aspect-w-1 aspect-h-1">
                    <Image alt="emotree_project" fill className="object-cover md:px-8 px-4" src="/img/project_2.png" />
                </div>

                <div className="w-full text-sm md:text-lg pr-20">
                    <section>
                        <span>
                            <span className="text-rose-600">OZ 코딩스쿨</span>에서 주최한 FE-BE 협동프로젝트로 진행하게
                            된 프로젝트입니다.
                            <span className="text-rose-600"> 팀장</span>을 맡아서 진행하게 되었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">조코딩 2024 GOOGLE 해커톤</span> 출전을 위해
                            <span className="text-rose-600"> AI</span>를 활용한 플랫폼 서비스를 기획하였고, 대화간
                            감정분석을 분석하여 이를 이용해 정원을 가꾸는 시뮬레이션 웹 게임을 개발하였습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">Preserve-3D</span>를 활용한 2.5D 스타일의 디자인을 설계하여
                            복잡한 CSS 구조를 다뤄볼 수 있었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            다양한 사운드 인터랙션, 모달등을 추가하여
                            <span className="text-rose-600"> 사용자 편의성</span>을 크게 신경써서 제작해볼 수
                            있었습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            <span className="text-rose-600">PrivateRoute</span>등을 활용한 사용자 접근제한을 구현하고,{' '}
                            <span className="text-rose-600">어드민 페이지</span>를 구현하여 관리자측면의 편의성도
                            고려하였습니다.
                        </span>
                        <p className="mt-1" />
                        <span>
                            규격있는 상태관리를 <span className="text-rose-600">Zustand</span>를 통해 다뤄보며
                            상태관리와 좀더 친숙해 질 수 있었습니다.
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
                                    className="text-sky-500 hover:underline"
                                    href={'https://github.com/OZ-Coding-School/oz_03_main-003-FE'}
                                >
                                    https://github.com/OZ-Coding-School
                                </Link>
                            </section>
                            <section className="flex flex-col lg:flex-row gap-2 items-start">
                                <div className="flex gap-2 items-center min-w-[140px]">
                                    <FaCheck />
                                    <div className="font-bold text-rose-600 w-fit">URL</div>
                                </div>
                                <Link className="text-sky-500 hover:underline" href={'https://emotree.yoyobar.xyz'}>
                                    https://emotree.yoyobar.xyz
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

export default Project2;
