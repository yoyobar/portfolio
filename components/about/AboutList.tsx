import { FaUser } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import { FaPen } from 'react-icons/fa';
const AboutList = () => {
    return (
        <ul className="mt-20 grid gap-y-12 w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <li className="w-full flex justify-center items-center gap-4">
                <div className="w-8 h-8 flex justify-center items-center">
                    <FaUser className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-xl font-semibold text-rose-500">Name</div>
                    <div className="text-lg font-semibold">김민수</div>
                </div>
            </li>
            <li className="w-full flex justify-center items-center gap-4">
                <div className="w-8 h-8 flex justify-center items-center">
                    <FaCalendar className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-xl font-semibold text-rose-500">Birth</div>
                    <div className="text-lg font-semibold">98.01.03</div>
                </div>
            </li>
            <li className="w-full flex justify-center items-center gap-4">
                <div className="w-8 h-8">
                    <FaLocationDot className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-xl font-semibold text-rose-500">Address</div>
                    <div className="text-lg font-semibold">경기도 광주시</div>
                </div>
            </li>
            <li className="w-full flex justify-center items-center gap-4">
                <div className="w-8 h-8">
                    <FaPhone className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-xl font-semibold text-rose-500">Phone</div>
                    <div className="text-lg font-semibold">010-2528-8183</div>
                </div>
            </li>
            <li className="w-full flex justify-center items-center gap-4">
                <div className="w-8 h-8">
                    <TbMailFilled className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-xl font-semibold text-rose-500">E-mail</div>
                    <div className="text-lg font-semibold">barwait@naver.com</div>
                </div>
            </li>
            <li className="w-full flex justify-center items-center gap-4">
                <div className="w-8 h-8">
                    <FaPen className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-xl font-semibold text-rose-500">Education</div>
                    <div className="text-lg font-semibold">Myongji College</div>
                </div>
            </li>
        </ul>
    );
};

export default AboutList;
