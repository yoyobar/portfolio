import React, { ReactNode } from 'react';

const Dot = ({ children, depths }: { children: ReactNode; depths: 1 | 2 | 3 }) => {
    return depths === 1 ? (
        <div className="flex gap-2 items-center mt-1">
            <div className="w-1.5 h-1.5 bg-stone-800 rounded-full text-sm shrink-0" />
            <div>{children}</div>
        </div>
    ) : depths === 2 ? (
        <div className="flex gap-2 items-center mt-1">
            <div className="w-1.5 h-1.5 border border-stone-800 rounded-sm ml-5 shrink-0" />
            <div>{children}</div>
        </div>
    ) : (
        depths === 3 && (
            <div className="flex gap-2 items-center mt-1">
                <div className="w-1.5 h-1.5 bg-stone-800 ml-10 shrink-0" />
                <div>{children}</div>
            </div>
        )
    );
};

export default Dot;
