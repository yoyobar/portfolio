'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io'; // Close icon
import { twMerge as tw } from 'tailwind-merge';
import { aggro, coding } from '@/util/fonts';

const list = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 0 },
};

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const scrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setMenuOpen(false);
    };

    const aboutScrollHandler = () => {
        document.querySelector('.about-container')?.scrollIntoView({
            behavior: 'smooth',
        });
        setMenuOpen(false);
    };

    const skillScrollHandler = () => {
        document.querySelector('.skill-container')?.scrollIntoView({
            behavior: 'smooth',
        });
        setMenuOpen(false);
    };

    const archiveScrollHandler = () => {
        document.querySelector('.archive-container')?.scrollIntoView({
            behavior: 'smooth',
        });
        setMenuOpen(false);
    };
    const projectScrollHandler = () => {
        document.querySelector('.project-container')?.scrollIntoView({
            behavior: 'smooth',
        });

        setMenuOpen(false);
    };

    const contactScrollHandler = () => {
        document.querySelector('.contact-container')?.scrollIntoView({
            behavior: 'smooth',
        });

        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div
                className={tw(
                    'header select-none px-10 fixed lg:px-[130px] z-50 w-full h-16 flex items-center justify-between bg-stone-800 bg-opacity-75',
                    coding.className
                )}
            >
                <div
                    onClick={scrollTopHandler}
                    className={tw(
                        'hover:text-amber-400 tracking-wider cursor-pointer text-lg md:text-2xl text-gray-200',
                        aggro.className
                    )}
                >{`KMS's Portfolio`}</div>
                <div className="hidden lg:flex gap-10">
                    <div
                        onClick={aboutScrollHandler}
                        className="hover:text-rose-500 cursor-pointer text-gray-200 font-medium"
                    >
                        About me
                    </div>
                    <div
                        onClick={skillScrollHandler}
                        className="hover:text-rose-500 cursor-pointer text-gray-200 font-medium"
                    >
                        Skills
                    </div>
                    <div
                        onClick={archiveScrollHandler}
                        className="hover:text-rose-500 cursor-pointer text-gray-200 font-medium"
                    >
                        Archives
                    </div>
                    <div
                        onClick={projectScrollHandler}
                        className="hover:text-rose-500 cursor-pointer text-gray-200 font-medium"
                    >
                        Projects
                    </div>
                    <div
                        onClick={contactScrollHandler}
                        className="hover:text-rose-500 cursor-pointer text-gray-200 font-medium"
                    >
                        Contact
                    </div>
                </div>
                <div
                    onClick={toggleMenu}
                    className="text-white flex justify-center items-center cursor-pointer lg:hidden p-2 rounded-full hover:bg-stone-800 transition"
                >
                    {isMenuOpen ? <IoMdClose className="text-2xl" /> : <RxHamburgerMenu className="text-2xl" />}
                </div>
            </div>

            <motion.div
                className="fixed top-16 left-0 bg-stone-800 bg-opacity-75 w-full h-fit lg:hidden z-50"
                initial="closed"
                animate={isMenuOpen ? 'open' : 'closed'}
                variants={list}
                transition={{ duration: 0.3 }}
            >
                {isMenuOpen && (
                    <div className="flex flex-col items-center p-4 select-none gap-4">
                        <div
                            onClick={aboutScrollHandler}
                            className="hover:text-white cursor-pointer text-gray-200 font-medium text-2xl border-b-2 border-transparent hover:border-b-slate-100 transition"
                        >
                            About me
                        </div>
                        <div
                            onClick={skillScrollHandler}
                            className="hover:text-white cursor-pointer text-gray-200 font-medium text-2xl border-b-2 border-transparent hover:border-b-slate-100 transition"
                        >
                            Skills
                        </div>
                        <div
                            onClick={archiveScrollHandler}
                            className="hover:text-white cursor-pointer text-gray-200 font-medium text-2xl border-b-2 border-transparent hover:border-b-slate-100 transition"
                        >
                            Archives
                        </div>
                        <div
                            onClick={projectScrollHandler}
                            className="hover:text-white cursor-pointer text-gray-200 font-medium text-2xl border-b-2 border-transparent hover:border-b-slate-100 transition"
                        >
                            Projects
                        </div>
                        <div
                            onClick={contactScrollHandler}
                            className="hover:text-white cursor-pointer text-gray-200 font-medium text-2xl border-b-2 border-transparent hover:border-b-slate-100 transition"
                        >
                            Contact
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default Header;
