import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithubSquare, FaJira, FaDocker } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssFill, RiSupabaseFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs, SiRedux, SiExpress } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { IoLogoVercel } from 'react-icons/io5';

import Figma from '@/public/icon/Figma-logo.svg';
import Notion from '@/public/icon/Notion-logo.svg';
import Zustand from '@/public/icon/Zustand-logo.svg';
import AWS from '@/public/icon/Aws-logo.svg';
export const skillDataFE = [
    {
        icon: <FaHtml5 className="w-12 h-12 text-red-400" />,
        label: 'HTML',
        progress: 100,
        learn: 'Familiar',
    },
    {
        icon: <FaCss3Alt className="w-12 h-12 text-sky-600" />,
        label: 'CSS',
        progress: 100,
        learn: 'Familiar',
    },
    {
        icon: <RiJavascriptFill className="w-12 h-12 text-yellow-400" />,
        label: 'Javascript',
        progress: 80,
        learn: 'Familiar',
    },
    {
        icon: <BiLogoTypescript className="w-12 h-12 text-sky-600" />,
        label: 'Typescript',
        progress: 60,
        learn: 'Learning',
    },
    {
        icon: <FaReact className="w-12 h-12 text-sky-600" />,
        label: 'React',
        progress: 80,
        learn: 'Familiar',
    },
    {
        icon: <SiNextdotjs className="w-12 h-12 text-gray-100" />,
        label: 'Next.js',
        progress: 50,
        learn: 'Learning',
    },
    {
        icon: <RiTailwindCssFill className="w-12 h-12 text-sky-400" />,
        label: 'TailwindCSS',
        progress: 100,
        learn: 'Familiar',
    },
    {
        icon: <SiRedux className="w-12 h-12 text-purple-400" />,
        label: 'Redux',
        progress: 40,
        learn: 'Tried',
    },
    {
        icon: <Zustand className="w-12 h-12" />,
        label: 'Zustand',
        progress: 70,
        learn: 'Familiar',
    },
];

export const skillDataBE = [
    {
        icon: <DiMysql className="w-12 h-12 text-[#c88b24]" />,
        label: 'MySQL',
        progress: 40,
        learn: 'Tried',
    },
    {
        icon: <SiExpress className="w-12 h-12 text-[#82a964]" />,
        label: 'Express.js',
        progress: 32,
        learn: 'Tried',
    },
    {
        icon: <RiSupabaseFill className="w-12 h-12 text-[#6fc48e]" />,
        label: 'Supabase',
        progress: 52,
        learn: 'Learning',
    },
];

export const skillDataVC = [
    {
        icon: <FaGitAlt className="w-12 h-12 text-[#d9603b]" />,
        label: 'Git',
        progress: 85,
        learn: 'Familiar',
    },
    {
        icon: <FaGithubSquare className="w-12 h-12 text-white" />,
        label: 'Github',
        progress: 90,
        learn: 'Familiar',
    },
];

export const skillDataCM = [
    {
        icon: <Notion className="w-12 h-12 text-gray-200" />,
        label: 'Notion',
        progress: 80,
        learn: 'Familiar',
    },
    {
        icon: <FaJira className="w-12 h-12 text-[#4d83fa]" />,
        label: 'Jira',
        progress: 44,
        learn: 'Learning',
    },
    {
        icon: <Figma className="w-12 h-12 text-gray-200" />,
        label: 'Figma',
        progress: 56,
        learn: 'Learning',
    },
];

export const skillDataDP = [
    {
        icon: <AWS className="w-12 h-12" />,
        label: 'AWS Web Service',
        progress: 66,
        learn: 'Familiar',
    },
    {
        icon: <IoLogoVercel className="w-12 h-12 text-gray-100" />,
        label: 'Vercel',
        progress: 80,
        learn: 'Familiar',
    },
    {
        icon: <FaDocker className="w-12 h-12 text-sky-500" />,
        label: 'Docker',
        progress: 33,
        learn: 'Tried',
    },
];
