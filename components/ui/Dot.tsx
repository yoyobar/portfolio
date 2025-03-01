import React, { ReactNode } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { FaDiamond } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
const Dot = ({ children, type }: { children: ReactNode; type: 'dot' | 'check' | 'diamond' | 'title' }) => {
    return type === 'dot' ? (
        <div className="flex gap-2 items-center mt-1 ml-1">
            <GoDotFill className="text-[0.75rem] shrink-0" />
            <div>{children}</div>
        </div>
    ) : type === 'check' ? (
        <div className="flex gap-2 items-center mt-3 ml-0.5 font-semibold">
            <FaCheckSquare className="text-green-500 shrink-0" />
            <div>{children}</div>
        </div>
    ) : type === 'diamond' ? (
        <div className="flex gap-2 items-center mt-1 ml-1.5">
            <FaDiamond className="text-sky-500 text-[0.5rem] shrink-0" />
            <div>{children}</div>
        </div>
    ) : (
        type === 'title' && (
            <div className="flex gap-2 items-center mt-3">
                <div className="text-xl font-bold">{children}</div>
            </div>
        )
    );
};

export default Dot;
