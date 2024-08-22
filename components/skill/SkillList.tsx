import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { coding } from '@/util/fonts';

interface SkillItem {
    icon: JSX.Element;
    label: string;
    progress: number;
    learn: string;
}

interface SkillListProps {
    data: SkillItem[];
    title: string;
}

const SkillList = ({ title, data }: SkillListProps) => {
    const sectionRef = useRef(null);
    const inViewSection = useInView(sectionRef, { once: true });

    return (
        <div className="w-full relative z-10">
            <div className="flex gap-2 border-b-2 border-b-rose-500 rounded-sm py-2 justify-center items-center mb-20 mt-20 text-3xl tracking-wider text-gray-100">
                <div className={coding.className}>{title}</div>
            </div>

            <div
                ref={sectionRef}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 select-none"
            >
                {data.map((item, index) => (
                    <motion.div
                        whileHover={{ translateY: -5 }}
                        whileTap={{ translateY: 5 }}
                        key={index}
                        className="cursor-pointer w-full rounded-md flex justify-start items-center gap-1 bg-slate-800 p-3"
                    >
                        {item.icon}
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex w-full">
                                <div className="font-semibold text-gray-100 flex-grow">{item.label}</div>
                                <div className="font-semibold text-gray-300">{item.learn}</div>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-md relative">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{
                                        width: inViewSection ? `${item.progress}%` : '0%',
                                    }}
                                    transition={{ duration: 1.5, delay: index * 0.25, type: '' }}
                                    className="absolute h-full left-0 top-0 bg-purple-500 rounded-sm"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillList;
