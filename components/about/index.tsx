'use client';
import { IoIosLink } from 'react-icons/io';
import AboutList from './AboutList';
import { twMerge as tw } from 'tailwind-merge';
import { aggro } from '@/util/fonts';

const About = () => {
    const scrollHandler = () => {
        document.querySelector('.about-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="w-full py-32 flex justify-center items-center bg-white">
                <div className="max-w-[1400px] mb-20 w-full flex flex-col items-center justify-center">
                    <div className="flex gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-gray-600 hover:text-black" />
                        </div>
                        <div className={tw('text-[44px] md:text-[50px] font-extrabold border-b', aggro.className)}>
                            ABOUT ME
                        </div>
                    </div>
                    <AboutList />
                </div>
            </div>
            <div className="skill-container"></div>
        </>
    );
};

export default About;
