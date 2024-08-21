'use client';
import React from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
    const aboutHandler = () => {
        document.querySelector('.about-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Title />
            <div className="pt-[64px] h-[520px] w-full bg-slate-900 flex flex-col justify-center items-center text-slate-100">
                <div className="text-white text-[60px] font-extrabold">
                    <span className="text-rose-500">FE</span> {` Developer`}
                </div>
                <div className="text-white text-[60px] font-medium">Minsu Kim</div>
                <div className="w-10 h-1 bg-rose-500 my-6"></div>
                <div className="flex flex-col gap-1 h-6 text-center text-xl text-slate-100">
                    <TypeAnimation
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1.5rem' }}
                        sequence={[
                            '안녕하세요. ',
                            1000,
                            '빠르게 배우고 성장하며 기술을 공유하는, ',
                            1250,
                            '개발자 김민수입니다. ',
                            2500,
                        ]}
                    />
                </div>
                <motion.button
                    onClick={aboutHandler}
                    whileTap={{ translateY: 10 }}
                    whileHover={{ scale: 1.05 }}
                    className=" mt-10 bg-rose-500  p-3 text-xl rounded-md flex justify-center items-center gap-2"
                >
                    Read More
                    <FaLongArrowAltDown />
                </motion.button>
                <div className="about-container"></div>
            </div>
        </>
    );
};

export default Header;
