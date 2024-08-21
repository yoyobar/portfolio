'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollController = () => {
    const [isInView, setIsInView] = useState(false);

    const scrollToUpHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(!entry.intersectionRatio);
        });

        const targetElement = document.querySelector('.scroll-end');

        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => {
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, []);

    return (
        isInView && (
            <motion.button
                onClick={scrollToUpHandler}
                whileHover={{ opacity: 1 }}
                whileTap={{ translateY: -20 }}
                transition={{ type: 'spring' }}
                className="fixed z-50 cursor-pointer flex justify-center items-center w-12 h-12 bottom-5 right-5 bg-gray-600 opacity-75 rounded-sm"
            >
                <FaAngleDoubleUp className="text-gray-100 text-2xl" />
            </motion.button>
        )
    );
};

export default ScrollController;
