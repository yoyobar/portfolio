'use client';
import { coding } from '@/util/fonts';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { twMerge as tw } from 'tailwind-merge';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
    const githubHandler = () => {
        window.open('https://github.com/yoyobar');
    };
    const webHandler = () => {
        window.open('https://wiki.yoyobar.xyz');
    };
    const nextHandler = () => {
        window.open('https://nextjs.org/');
    };
    const vercelHandler = () => {
        window.open('https://vercel.com/');
    };
    const mailHandler = () => {
        document.getElementById('mail-handler')!.focus();
    };

    return (
        <div className="relative z-20 w-full h-[200px] bg-stone-800 flex flex-col items-center pt-10 gap-4">
            <div className="flex gap-8 text-gray-200 items-center">
                <FaGithub
                    title="github"
                    onClick={githubHandler}
                    className="text-[45px] cursor-pointer hover:text-gray-400"
                />

                <TbWorld title="blog" onClick={webHandler} className="text-[50px] cursor-pointer hover:text-gray-400" />

                <IoMdMail
                    title="mail"
                    onClick={mailHandler}
                    className="text-[50px] cursor-pointer hover:text-gray-400"
                />
            </div>
            <div className={tw('text-gray-200', coding.className)}>© 2024. Min Su Kim. All rights reserved.</div>
            <div className={tw('text-gray-200 flex gap-2 items-center', coding.className)}>
                Powered By
                <SiNextdotjs
                    title="next.js"
                    onClick={nextHandler}
                    className="text-2xl hover:text-gray-400 cursor-pointer"
                />
                <IoLogoVercel
                    title="vercel"
                    onClick={vercelHandler}
                    className="text-2xl hover:text-gray-400 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Footer;
