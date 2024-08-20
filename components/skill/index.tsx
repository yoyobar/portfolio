'use client';
import { IoIosLink } from 'react-icons/io';

const About = () => {
    const scrollHandler = () => {
        document.querySelector('.skill-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="px-[130px] w-full my-32 flex justify-center items-center bg-lime-800 h-[300px]">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-lime-50 hover:text-lime-400" />
                        </div>
                        <div className="text-[30px] lg:text-[50px] font-extrabold border-b text-lime-50">SKILL</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
