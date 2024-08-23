'use client';
import { aggro, coding } from '@/util/fonts';
import { IoIosLink } from 'react-icons/io';
import AdminProject from './AdminProject';
import HunsuProject from './HunsuProject';
import EmotreeProject from './EmotreeProject';
import BlogProject from './BlogProject';
import WeatherProject from './WeatherProject';
import PortFolioProject from './PortFolioProject';
import { twMerge as tw } from 'tailwind-merge';
import ModalPortal from '../modal/ModalPortal';
import ModalPicture from '../modal/ModalPicture';
import { useModalStore } from '@/app/config/store';

const Project = () => {
    const { modal, setOpen } = useModalStore();
    const scrollHandler = () => {
        document.querySelector('.project-container')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="relative w-full py-32 flex flex-col justify-center items-center bg-sky-700 h-fit">
                <div className="px-2 md:px-10 mb-20 max-w-[1200px] w-full flex flex-col gap-10 items-center justify-center">
                    <div className="flex mb-20 gap-2 relative justify-center items-center">
                        <div onClick={scrollHandler} className="cursor-pointer w-[25px] h-[25px]">
                            <IoIosLink className="w-full h-full text-gray-200 hover:text-white" />
                        </div>
                        <div
                            className={tw(
                                'text-[50px] font-extrabold border-b border-b-white text-white',
                                aggro.className
                            )}
                        >
                            Projects
                        </div>
                    </div>

                    <PortFolioProject />
                    <HunsuProject />
                    <EmotreeProject />
                    <BlogProject />
                    <AdminProject />
                    <WeatherProject />
                </div>
                <footer className="hidden select-none 2xl:flex absolute text-[200px] -rotate-[-14deg] -left-10 -bottom-14 text-white opacity-50 gap-2">
                    <span className={coding.className}>
                        Pro<span className="text-lime-500">j</span>ects
                    </span>
                    <span className="animate-flick">|</span>
                </footer>
                <div className="contact-container"></div>
            </div>

            {modal.open && (
                <ModalPortal>
                    <ModalPicture
                        src={modal.src}
                        isOpen={modal.open}
                        onClose={() => setOpen(false)}
                        parent="main_root"
                    />
                </ModalPortal>
            )}
        </>
    );
};

export default Project;
