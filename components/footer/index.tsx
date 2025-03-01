'use client';
import { coding } from '@/util/fonts';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { twMerge as tw } from 'tailwind-merge';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { SiNotion } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
    const mailHandler = () => {
        document.getElementById('mail-handler')!.focus();
    };

    return (
        <div className="relative z-20 w-full h-[200px] bg-stone-800 flex flex-col items-center pt-10 gap-4">
            <div className="flex gap-8 text-gray-200 items-center">
                <Link href={'https://github.com/yoyobar'} target="_blank">
                    <FaGithub title="github" className="text-[45px] cursor-pointer hover:text-gray-400" />
                </Link>

                <Link href={'https://wiki.yoyobar.xyz'} target="_blank">
                    <TbWorld title="blog" className="text-[50px] cursor-pointer hover:text-gray-400" />
                </Link>
                <Link href={'https://plaid-plow-0e3.notion.site/3d4cdf754f1e42cf8460dd12408a41a4'} target="_blank">
                    <SiNotion title="notion" className="text-[40px] cursor-pointer hover:text-gray-400" />
                </Link>

                <IoMdMail
                    title="mail"
                    onClick={mailHandler}
                    className="text-[50px] cursor-pointer hover:text-gray-400"
                />
            </div>
            <div className={tw('text-gray-200', coding.className)}>© 2025. Min Su Kim. All rights reserved.</div>
            <div className={tw('text-gray-200 flex gap-2 items-center', coding.className)}>
                Powered By
                <Link href={'https://nextjs.org/'} target="_blank">
                    <SiNextdotjs title="next.js" className="text-2xl hover:text-gray-400 cursor-pointer" />
                </Link>
                <Link href={'https://vercel.com/'} target="_blank">
                    <IoLogoVercel title="vercel" className="text-2xl hover:text-gray-400 cursor-pointer" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
