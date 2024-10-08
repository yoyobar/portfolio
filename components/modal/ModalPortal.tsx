import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: ReactElement }) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (typeof window === 'undefined') return <></>;

    return mounted ? createPortal(children, document.getElementById('portal_root') as HTMLElement) : <></>;
};

export default ModalPortal;
